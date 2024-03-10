
import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi"

import {
  Modal, ModalContent, ModalBody, ModalCloseButton,
  Flex, Box, SimpleGrid,
  useSteps, useMediaQuery

} from '@chakra-ui/react'

// import modal from "@binance/w3w-qrcode-modal"

import { EthereumSVG } from './EthereumSVG'
import CoinbaseWalletSVG from './CoinbaseWalletSVG'
import WalletConnectSVG from './WalletConnectSVG'
import TrustWalletSVG from './TrustWalletSVG'
import TorrusWalletSVG from './TorrusWalletSVG'

// import BinanceWalletSVG from './BinanceWalletSVG'


// TORUS WALLET
import { Web3Auth } from '@web3auth/modal'
import { openloginAdapter, web3AuthOptions } from "../providers/web3Auth";



const walletOrdering = {
  metaMaskSDK: 1,
  coinbaseWalletSDK: 2,
  walletConnect: 3,
  trustWallet: 4,
  injected: 99
}


export const ConnectWalletModal = ({ isModalOpen, changeModalState }) => {

  const [web3auth, setWeb3auth] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);


  // Torus Wallet
  useEffect(() => {
    const init = async () => {

      try {
        const web3auth = new Web3Auth(web3AuthOptions);

        web3auth.configureAdapter(openloginAdapter);
        setWeb3auth(web3auth);

        await web3auth.initModal();

        if (web3auth.connected) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const TorusLogin = async () => {
    if (!web3auth) {
      return;
    }
    await web3auth.connect();
  };


  const { connectors, connect, status } = useConnect();

  console.log("[Connectors!]: ", connectors);



  const OnConnectWallet = (_connector_id) => {
    const connector = connectors.find((connector) => connector.name === _connector_id);
    if (connector) {
      console.log("[Connector-Found]: ", connector);
      connect({ connector: connector }, {
        onSettled: (data) => { console.log("[Connector-Settled]: ", data); },
        onSuccess: (data) => { console.log("[Connector-Success]: ", data); },
        onError: (error) => { console.log("[Connector-Error]: ", error); }
      });
    }
  }


  const [OnMediumScreenAndAbove] = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Modal size={'3xl'} isOpen={isModalOpen} onClose={() => changeModalState('modal_close')} isCentered >
        <ModalContent>
          <ModalBody>
            <ModalCloseButton size={"lg"} width={'32px'} height={"32px"} color={"#707481"} backgroundColor={"#ebebed"} borderRadius={"30px"} colorScheme="gray" />
            <div style={{ backgroundColor: "white", color: "black", borderRadius: "24px" }}>
              <div className="flex">
                <div className="sidebar hidden md:block py-6 px-6 rounded-l-3xl bg-[#ebebed] text-[#1a1d26]">
                  <div className="flex flex-col max-w-60">
                    <div className="mb-4">
                      <svg
                        width="48px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 286.3 286.3"
                        className="jss12"
                      >
                        <path
                          d="M143.15 3.88C66.23 3.88 3.88 66.23 3.88 143.15s62.35 139.28 139.27 139.28 139.27-62.36 139.27-139.28S220.07 3.88 143.15 3.88"
                          fill="#6400ff"
                        />
                        <path fill="#fff" d="M142.46 164.84v-31.22l-85.35 43.79h158.45V89.83z" />
                      </svg>
                    </div>
                    <h2 className="mb-2 text-2xl">Mavrick Protocol</h2>
                    <h4 className="mb-2 text-base font-bold">Get Started</h4>
                    <p className="text-sm">Connect your wallet to start using the app.</p>
                  </div>
                </div>
                {/* <div className="content w-[488px]"> */}
                <div className="content flex-1 flex flex-col">
                  <div className="heading shadow-sm">
                    <h4 className="m-4 leading-4 font-bold">Available Wallets</h4>
                  </div>
                  <hr style={{ height: "16px", width: "100%", color: "#707481" }} />
                  <div className="wallets px-4 pb-24">
                    <SimpleGrid columns={OnMediumScreenAndAbove ? 2 : 1} spacingX='8px' spacingY='8px' >

                      <Flex padding={'1rem'} direction={'row'} borderRadius={'24px'} border={'1px solid #d0d4f7'} alignItems={'center'} cursor={'pointer'} onClick={() => {
                        console.log("[MetaMask]:");
                        OnConnectWallet('MetaMask');
                      }}>
                        <Box maxWidth={'48px'} height={'48px'} borderRadius={'12px'} border={'1px solid #b1b8f2'} color={'black'} padding={'7px'} >
                          <EthereumSVG />
                        </Box>
                        <span className="ml-4">Meta Mask</span>
                      </Flex>

                      <Flex padding={'1rem'} direction={'row'} borderRadius={'24px'} border={'1px solid #d0d4f7'} alignItems={'center'} cursor={'pointer'} onClick={() => {
                        console.log("[Coinbase Wallet]:");
                        OnConnectWallet('Coinbase Wallet');
                      }}>
                        <Box maxWidth={'48px'} height={'48px'} borderRadius={'12px'} border={'1px solid #b1b8f2'} color={'black'} padding={'7px'} >
                          <CoinbaseWalletSVG />
                        </Box>
                        <span className="ml-4">Coinbase Wallet</span>
                      </Flex>

                      <Flex padding={'1rem'} direction={'row'} borderRadius={'24px'} border={'1px solid #d0d4f7'} alignItems={'center'} cursor={'pointer'} onClick={() => {
                        console.log("[Wallet Connect]:");
                        OnConnectWallet("WalletConnect")
                      }}>
                        <Box maxWidth={'48px'} height={'48px'} borderRadius={'12px'} border={'1px solid #b1b8f2'} color={'black'} padding={'7px'} >
                          <WalletConnectSVG />
                        </Box>
                        <span className="ml-4">Wallet Connect</span>
                      </Flex>

                      <Flex padding={'1rem'} direction={'row'} borderRadius={'24px'} border={'1px solid #d0d4f7'} alignItems={'center'} cursor={'pointer'} onClick={() => {
                        console.log("[Trust Wallet]:");
                        OnConnectWallet('TrustWallet');
                      }}>
                        <Box maxWidth={'48px'} height={'48px'} borderRadius={'12px'} border={'1px solid #b1b8f2'} color={'black'} padding={'7px'} >
                          <TrustWalletSVG />
                        </Box>
                        <span className="ml-4">Trust Wallet</span>
                      </Flex>

                      <Flex padding={'1rem'} direction={'row'} borderRadius={'24px'} border={'1px solid #d0d4f7'} alignItems={'center'} cursor={'pointer'} onClick={TorusLogin} >
                        <Box maxWidth={'48px'} height={'48px'} borderRadius={'12px'} border={'1px solid #b1b8f2'} color={'black'} padding={'7px'} >
                          <TorrusWalletSVG />
                        </Box>
                        <span className="ml-4">Torus Wallet</span>
                      </Flex>

                      {/* <Flex padding={'1rem'} direction={'row'} borderRadius={'24px'} border={'1px solid #d0d4f7'} alignItems={'center'} cursor={'pointer'} onClick={async () => {
                        console.log("[Binance]", modal);
                        modal.open(() => {
                          console.log("Modal Closed?")
                        });
                      }}>
                        <Flex alignItems={'center'} justifyContent={'center'} maxWidth={'48px'} height={'48px'} borderRadius={'12px'} border={'1px solid #b1b8f2'} color={'black'} padding={'7px'} >
                          <BinanceWalletSVG />
                        </Flex>
                        <span className="ml-4">Binance</span>
                      </Flex> */}
                      {/* {
                        connectors.map((connector) => (
                          <WalletOption
                            key={connector.uid}
                            connector={connector}
                            onClick={() => connect({ connector })}
                          />
                        ))
                      } */}

                    </SimpleGrid>
                  </div>
                </div>

              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}


// function WalletOption({
//   connector,
//   onClick,
// }) {
//   const [ready, setReady] = useState(false)

//   useEffect(() => {
//     ; (async () => {
//       const provider = await connector.getProvider()
//       setReady(!!provider)
//     })()
//   }, [connector])

//   return (
//     <button disabled={!ready} onClick={onClick}>
//       {connector.name}
//     </button>
//   )
// }