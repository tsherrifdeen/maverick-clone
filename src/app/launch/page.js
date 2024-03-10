"use client";

import { useState } from "react";
import NavApp from "../components/NavApp";
import SwapCard from "../components/SwapCard";
import { ConnectWalletModal } from "../components/Modal";
// import web3auth from "../providers/web3Auth";
import { useAccount, useConnect, useDisconnect } from "wagmi"




// await web3auth.initModal();

const page = () => {

  const { connect, connectors } = useConnect();
  const { status } = useAccount();
  const { disconnect } = useDisconnect();

  const [isModalOpen, updateModalState] = useState(true);
  // const [connectButtonText, changeConnectButtonText] = useState('Connect Wallet');

  const changeModalState = (_reason) => {
    if (_reason === 'modal_close') {
      updateModalState(false);
      return;
    }
    if (status === "connected") {
      disconnect();
      return;
    }

    updateModalState(true);
  }




  // const OnConnectWallet = (_connector_id) => {
  //   const connector = connectors.find((connector) => connector.name === _connector_id);
  //   if (connector) {
  //     console.log("[Connector-Found]: ", connector);
  //     connect({ connector: connector }, {
  //       onSettled: (data) => { console.log("[Connector-Settled]: ", data); },
  //       onSuccess: (data) => { console.log("[Connector-Success]: ", data); },
  //       onError: (error) => { console.log("[Connector-Error]: ", error); }
  //     });
  //   }
  // }


  return (
    <>
      <NavApp isModalOpen={isModalOpen} changeModalState={changeModalState} />
      <SwapCard isModalOpen={isModalOpen} changeModalState={changeModalState} />
      <ConnectWalletModal isModalOpen={isModalOpen} changeModalState={changeModalState} />
    </>
  );
};

export default page;
