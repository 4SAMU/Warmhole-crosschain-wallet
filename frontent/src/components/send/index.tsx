import React from "react";
import { SendContainer } from "./send-styles";
import { Box, ClickAwayListener, IconButton } from "@mui/material";
import { CustomAutocompelete } from "../utils/autocomplete";
import { BlueButton } from "../intro/intro-styles";
import CloseIcon from "@mui/icons-material/Close";

interface SendModalProps {
  selectedAsset: string;
  setSelectedAsset: React.Dispatch<React.SetStateAction<string>>;
  walletAddress: string;
  setWalletAddress: React.Dispatch<React.SetStateAction<string>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}

const SendModal: React.FC<SendModalProps> = ({
  selectedAsset,
  setSelectedAsset,
  walletAddress,
  setWalletAddress,
  amount,
  setAmount,
  onClose,
}) => {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <SendContainer>
        <Box className="close" onClick={onClose}>
          <IconButton>
            <CloseIcon
              sx={{ color: "#fff", fontWeigth: 600, fontSize: "20px" }}
            />
          </IconButton>
        </Box>

        <h1>Send Asset</h1>
        <p>Send your asset to another wallet</p>
        <CustomAutocompelete
          data={[
            { label: "ETH" },
            { label: "BNB" },
            { label: "USDT" },
            { label: "USDC" },
          ]}
          setSelectedAsset={setSelectedAsset}
          label="select asset to send"
        />
        <header>Wallet Address</header>
        <input
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />

        <header>Amount</header>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <BlueButton
          onClick={() => {
            console.log({
              selectedAsset,
              walletAddress,
              amount,
            });
          }}
          sx={{
            width: "100%",
            mt: "20px",
            height: "45px",
          }}
        >
          Send
        </BlueButton>
      </SendContainer>
    </ClickAwayListener>
  );
};

export default SendModal;
