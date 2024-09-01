import { Box, Button, styled } from "@mui/material";

export const GetStartedComponent = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "50px 0",
  position: "relative",

  header: {
    width: "80%",
    fontSize: "22px",
    fontWeight: 600,
    color: "hsl(210, 100%, 60%);",
    marginBottom: "20px",
    textAlign: "center",
  },
  p: {
    width: "50%",
    fontSize: "16px",
    color: "#fff",
    // marginBottom: "20px",
    textAlign: "center",
  },

  "@media screen and (max-width: 599px)": {
    header: {
      fontSize: "20px",
      fontWeight: 600,
    },
    p: {
      fontSize: "14px",
    },
  },
}));

export const CardContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "50px 0",
  position: "relative",
}));

export const BlueButton = styled(Button)(({}) => ({
  display: "flex",
  textTransform: "none",
  backgroundColor: "hsl(210, 100%, 60%)",
  color: "#fff",
  fontSize: "14px",
  padding: "0 20px",
  height: "35px",
  borderRadius: "16px",
  "&:hover": {
    backgroundColor: "hsl(210, 100%, 50%)",
  },
}));
