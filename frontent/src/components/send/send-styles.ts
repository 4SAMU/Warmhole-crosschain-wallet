import { Box, styled } from "@mui/material";

export const SendContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
  justifyContent: "center",
  padding: "20px 20px 50px 20px",
  position: "absolute",
  background: "#0F1214",
  width: "100%",
  height: "100vh",
  zIndex: 1000,
  top: "0",

  h1: {
    fontSize: "22px",
    fontWeight: 600,
    marginBottom: "10px",
    width: "100%",
    textAlign: "center",
    color: "hsl(210, 100%, 60%)",
  },
  p: {
    color: "#fff",
    fontSize: "16px",
    marginBottom: "50px",
    width: "100%",
    textAlign: "center",
  },

  ".warn": {
    color: "gray",
    fontSize: "12px",
    marginBottom: "10px",
    width: "100%",
    textAlign: "center",
  },

  header: {
    fontSize: "14px",
    color: "gray",
    margin: "20px 0 5px 0",
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid gray",
    backgroundColor: "transparent",
    color: "gray",
    fontSize: "14px",
    outline: "none",
    height: "50px",
  },

  ".close": {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
}));
