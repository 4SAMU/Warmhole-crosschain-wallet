import HeadMetaData from "@/components/HeadMetaData";
import DefaultLayout from "@/components/layouts";
import Wallet from "@/components/wallet";
import React from "react";

const WalletPage = () => {
  return (
    <>
      <HeadMetaData pageTitle="The Wallet" />
      <DefaultLayout>
        <Wallet />
      </DefaultLayout>
    </>
  );
};

export default WalletPage;
