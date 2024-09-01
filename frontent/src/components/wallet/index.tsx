import React from "react";
import {
  AssetsContainer,
  FlexRowItems,
  TabsButtons,
  WalletCard,
  WalletContainer,
} from "./wallet-styles";
import { Box, Divider } from "@mui/material";
import { BlueButton } from "../intro/intro-styles";
import SendModal from "../send";
import ReceiveModal from "../receive";

const WalletComponent = () => {
  const assets = [
    { coin: "ETH", balance: "0.00" },
    { coin: "BNB", balance: "0.00" },
    { coin: "USDT", balance: "0.00" },
    { coin: "USDC", balance: "0.00" },
  ];

  const connectWallet = () => {
    console.log("Connect Wallet");
  };

  const [selectedAsset, setSelectedAsset] = React.useState("");
  const [walletAddress, setWalletAddress] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const [sendModal, setSendModal] = React.useState(false);
  const [receiveModal, setReceiveModal] = React.useState(false);
  const [swapModal, setSwapModal] = React.useState(false);

  const handleTabs = (tab: string) => {
    if (tab === "send") {
      setSendModal(true);
    } else if (tab === "receive") {
      setReceiveModal(true);
    } else if (tab === "swap") {
      setSwapModal(true);
    }
  };

  return (
    <WalletContainer>
      <Box className="connect_wallet">
        <BlueButton onClick={connectWallet}>Connect Wallet</BlueButton>
      </Box>

      <WalletCard>
        <Box className="Total_balance">$ 0</Box>
        <Box className="tabs_buttons">
          <TabsButtons onClick={() => handleTabs("send")}>Send</TabsButtons>
          <TabsButtons onClick={() => handleTabs("receive")}>
            Receive
          </TabsButtons>
          <TabsButtons onClick={() => handleTabs("swap")}>
            Swap
            <span className="coming_soon">soon</span>
          </TabsButtons>
        </Box>
      </WalletCard>

      <AssetsContainer sx={{ mt: "20px" }}>
        <FlexRowItems>
          <header>Assets</header>
          <span className="balance">Balance</span>
        </FlexRowItems>
        <Divider
          sx={{ background: "hsl(210, 100%, 60%)", width: "100%", mt: 1 }}
        />
        {assets.map(({ coin, balance }, index) => (
          <FlexRowItems sx={{ mt: 1 }} key={index}>
            <span id="coin">{coin}</span>
            <span id="bl">{balance}</span>
          </FlexRowItems>
        ))}
      </AssetsContainer>

      {sendModal && (
        <SendModal
          selectedAsset={selectedAsset}
          setSelectedAsset={setSelectedAsset}
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          amount={amount}
          setAmount={setAmount}
          onClose={() => setSendModal(false)}
        />
      )}

      {receiveModal && (
        <ReceiveModal
          setSelectedAsset={setSelectedAsset}
          onClose={() => setReceiveModal(false)}
        />
      )}
    </WalletContainer>
  );
};

export default WalletComponent;
