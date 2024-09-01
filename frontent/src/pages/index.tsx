import { Box } from "@mui/material";
import HeadMetaData from "@/components/HeadMetaData";
import IntroComponent from "@/components/intro";

export default function Home() {
  return (
    <Box>
      <HeadMetaData pageTitle="Warmhole Wallet | Getting Started" />
      <IntroComponent />
    </Box>
  );
}
