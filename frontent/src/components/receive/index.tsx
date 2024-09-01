import React from "react";
import { Box, ClickAwayListener, IconButton } from "@mui/material";
import { CustomAutocompelete } from "../utils/autocomplete";
import { BlueButton } from "../intro/intro-styles";
import CloseIcon from "@mui/icons-material/Close";
import { SendContainer } from "../send/send-styles";
import { FlexRowItems } from "../wallet/wallet-styles";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

interface ReceiveModalProps {
  setSelectedAsset: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}

const ReceiveModal: React.FC<ReceiveModalProps> = ({
  setSelectedAsset,
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

        <h1>Receive Asset</h1>
        <p>Receive Asset from a different Wallet</p>

        <p className="warn">
          Make sure you are receiving assets supported on the Eth and Bsc,
          otherwise you wont be manage them here !{" "}
        </p>
        <CustomAutocompelete
          data={[
            { label: "ETH" },
            { label: "BNB" },
            { label: "USDT" },
            { label: "USDC" },
          ]}
          setSelectedAsset={setSelectedAsset}
          label="select asset to receive"
        />
        {/*Qr Code*/}

        <FlexRowItems
          sx={{ justifyContent: "center", gap: "10px", mt: "20px" }}
        >
          <BlueButton>copy</BlueButton>
          <IconButton
            sx={{
              backgroundColor: "hsl(210, 100%, 60%)",
              padding: "6px",
              borderRadius: "50%",
              svg: {
                fontSize: "20px",
                color: "#fff",
              },
              "&:hover": {
                backgroundColor: "hsl(210, 100%, 50%)",
              },
            }}
          >
            <FileUploadOutlinedIcon />
          </IconButton>
        </FlexRowItems>
      </SendContainer>
    </ClickAwayListener>
  );
};

export default ReceiveModal;
