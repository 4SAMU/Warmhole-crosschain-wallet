import { Box, styled } from "@mui/material";

export const MainWrapper = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#0F1214",
  padding: "20px",
  overflowY: "auto",
  overflowX: "hidden",
  position: "relative",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (min-width: 600px)": {
    left: "50%",
    transform: "translateX(-50%)",
    width: "390px",
    // border: "1px solid #fff",
  },
  "@media (max-width: 599px)": {
    width: "100%",
    border: "none",
  },
}));

export const BottomTab = styled(Box)(({}) => ({}));
