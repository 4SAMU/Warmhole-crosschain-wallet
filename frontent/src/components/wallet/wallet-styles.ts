import { Box, Button, colors, styled } from "@mui/material";
import { transform } from "next/dist/build/swc";
import { text } from "stream/consumers";

export const WalletContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  ".connect_wallet": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center !important",
    width: "100%",
  },

  ".active_network": {
    display: "flex",
    span: {
      fontSize: "14px",
      color: "#fff",
    },
  },

  svg: {
    cursor: "pointer",
  },
}));

export const AssetsContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",

  header: {
    display: "flex",
    fontSize: "18px",
    color: "hsl(210, 100%, 60%)",
    // marginBottom: "20px",
  },

  ".balance": {
    fontSize: "14px",
    color: "hsl(210, 100%, 60%)",
  },

  "#coin": {
    fontSize: "16px",
    color: "gray",
  },
  "#bl": {
    fontSize: "14px",
    color: "gray",
  },
}));

export const FlexRowItems = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 5px",
}));

export const WalletCard = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0 10px 0",
  position: "relative",
  width: "100%",
  border: "1px solid hsl(210, 100%, 60%)",
  borderRadius: "16px",
  margin: "30px 0 20px 0",
  // background:"#000",

  ".Total_balance": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80px",
    fontSize: "40px",
    fontWeight: 700,
    color: "hsl(210, 100%, 60%)",
    textAlign: "center",
  },

  ".tabs_buttons": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    height: "80px",
  },
}));

export const TabsButtons = styled(Button)(({}) => ({
  textTransform: "none",
  padding: "5px 20px",
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: "DM Sans",
  color: "gray",
  // backgroundColor: "hsl(210, 100%, 60%)",
  borderRadius: "16px",
  position: "relative",
  transition: "all 0.3s ease-in-out !important",
  "&:hover": {
    color: "#fff",
    backgroundColor: "hsl(210, 100%, 50%)",
    ".coming_soon": {
      color: "#fff",
      display: "block",
    },
  },

  ".coming_soon": {
    display: "none",
    position: "absolute",
    top: "-5px",
    left: "70%",
    fontSize: "10px",
    color: "hsl(210, 100%, 60%)",

    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      borderRadius: "50%",
      left: "-10px",
      width: "5px",
      height: "5px",
      backgroundColor: "#fff",
    },
  },
}));
