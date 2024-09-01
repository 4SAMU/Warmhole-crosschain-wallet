// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "wormhole-solidity-sdk/WormholeRelayerSDK.sol";
import "wormhole-solidity-sdk/interfaces/IERC20.sol";

contract CrossChainWallet is TokenSender, TokenReceiver {

    uint256 constant GAS_LIMIT = 500000; // Example gas limit, adjust as needed

    // Function to send tokens across chains
    function sendCrossChainDeposit(
        uint16 targetChain, // A wormhole chain id
        address targetHelloToken, // Address of HelloToken contract on targetChain
        address recipient, // Recipient address on the target chain
        uint256 amount, // Amount of tokens to send
        address token // Address of the token contract
    ) public payable {
        uint256 cost = quoteCrossChainDeposit(targetChain);
        require(msg.value == cost, "msg.value != quoteCrossChainDeposit(targetChain)");

        // Transfer tokens from sender to this contract
        IERC20(token).transferFrom(msg.sender, address(this), amount);

        // Encode recipient address into payload
        bytes memory payload = abi.encode(recipient);

        // Send the token with payload to the target chain
        sendTokenWithPayloadToEvm(
            targetChain,
            targetHelloToken, // Address on the target chain to send token and payload
            payload,
            0, // Receiver value
            GAS_LIMIT,
            token, // Address of IERC20 token contract
            amount
        );
    }

    // Function to quote the cost of a cross-chain deposit
    function quoteCrossChainDeposit(uint16 targetChain) public view returns (uint256 cost) {
        // Cost of delivering token and payload to targetChain
        uint256 deliveryCost;
        (deliveryCost,) = wormholeRelayer.quoteEVMDeliveryPrice(targetChain, 0, GAS_LIMIT);

        // Total cost: delivery cost + cost of publishing the 'sending token' wormhole message
        cost = deliveryCost + wormhole.messageFee();
    }

    // Override function to receive payload and tokens from another chain
    function receivePayloadAndTokens(
        bytes memory payload,
        TokenReceived[] memory receivedTokens,
        bytes32, // sourceAddress
        uint16,  // sourceChain
        bytes32  // deliveryHash
    ) internal override onlyWormholeRelayer {
        require(receivedTokens.length == 1, "Expected 1 token transfer");

        // Decode recipient address from the payload
        address recipient = abi.decode(payload, (address));

        // Transfer the received token to the recipient
        IERC20(receivedTokens[0].tokenAddress).transfer(recipient, receivedTokens[0].amount);
    }

    // Function to handle receiving Wormhole messages (VAA)
    function receiveWormholeMessages(
        bytes memory payload,
        bytes[] memory additionalVaas,
        bytes32 sourceAddress,
        uint16 sourceChain,
        bytes32 deliveryHash
    ) external payable {
        TokenReceived[] memory receivedTokens = new TokenReceived[](additionalVaas.length);

        for (uint256 i = 0; i < additionalVaas.length; ++i) {
            IWormhole.VM memory parsed = wormhole.parseVM(additionalVaas[i]);
            require(
                parsed.emitterAddress == tokenBridge.bridgeContracts(parsed.emitterChainId),
                "Not a Token Bridge VAA"
            );

            ITokenBridge.TransferWithPayload memory transfer = tokenBridge.parseTransferWithPayload(parsed.payload);
            require(
                transfer.to == toWormholeFormat(address(this)) && transfer.toChain == wormhole.chainId(),
                "Token was not sent to this address"
            );

            // Complete the token transfer
            tokenBridge.completeTransferWithPayload(additionalVaas[i]);

            // Resolve the token address on this chain
            address thisChainTokenAddress = getTokenAddressOnThisChain(transfer.tokenChain, transfer.tokenAddress);
            uint8 decimals = getDecimals(thisChainTokenAddress);
            uint256 denormalizedAmount = transfer.amount;
            if (decimals > 8) denormalizedAmount *= uint256(10) ** (decimals - 8);

            // Store the received token details
            receivedTokens[i] = TokenReceived({
                tokenHomeAddress: transfer.tokenAddress,
                tokenHomeChain: transfer.tokenChain,
                tokenAddress: thisChainTokenAddress,
                amount: denormalizedAmount,
                amountNormalized: transfer.amount
            });
        }

        // Call the overridden method to process the payload and tokens
        receivePayloadAndTokens(payload, receivedTokens, sourceAddress, sourceChain, deliveryHash);
    }

    // Utility function to get token address on this chain
    function getTokenAddressOnThisChain(uint16 tokenChain, bytes32 tokenAddress) internal view returns (address) {
        // Logic to resolve the token address on this chain (can use a mapping or token registry)
        // This is an example placeholder
        return address(uint160(uint256(tokenAddress)));
    }

    // Utility function to get token decimals
    function getDecimals(address token) internal view returns (uint8) {
        return IERC20(token).decimals();
    }
}