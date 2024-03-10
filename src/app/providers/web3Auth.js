// TORUS WALLET
// https://github.com/Web3Auth/web3auth-pnp-examples/blob/main/web-modal-sdk/blockchain-connection-examples/evm-modal-example/src/App.tsx

import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider'
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";


// const clientId = "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ"; // get from https://dashboard.web3auth.io
const clientId = "Maverick Protocol"

const chainConfig = {
    chainId: "0x1", // Please use 0x1 for Mainnet
    rpcTarget: "https://rpc.ankr.com/eth",
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    displayName: "Ethereum Mainnet",
    blockExplorerUrl: "https://etherscan.io/",
    ticker: "ETH",
    tickerName: "Ethereum",
    logo: "https://images.toruswallet.io/eth.svg",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });

export const web3AuthOptions = {
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
    uiConfig: {
        uxMode: "popup",
        appName: "Maverick Protocol",
        appUrl: "https://web3auth.io/",
        theme: {
            primary: "#7ed6df",
        },
        logoLight: "https://web3auth.io/images/web3authlog.png",
        logoDark: "https://web3auth.io/images/web3authlogodark.png",
        defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl, tr
        mode: "auto", // whether to enable dark mode. defaultValue: auto
        useLogoLoader: true,
    },
    privateKeyProvider: privateKeyProvider,
    sessionTime: 86400, // 1 day
    // useCoreKitKey: true,
};

export const openloginAdapter = new OpenloginAdapter({
    loginSettings: {
        mfaLevel: "optional",
    },
    adapterSettings: {
        uxMode: "redirect", // "redirect" | "popup"
        whiteLabel: {
            logoLight: "https://web3auth.io/images/web3authlog.png",
            logoDark: "https://web3auth.io/images/web3authlogodark.png",
            defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl, tr
            mode: "dark", // whether to enable dark, light or auto mode. defaultValue: auto [ system theme]
        },
        mfaSettings: {
            deviceShareFactor: {
                enable: true,
                priority: 1,
                mandatory: true,
            },
            backUpShareFactor: {
                enable: true,
                priority: 2,
                mandatory: false,
            },
            socialBackupFactor: {
                enable: true,
                priority: 3,
                mandatory: false,
            },
            passwordFactor: {
                enable: true,
                priority: 4,
                mandatory: false,
            },
        },
    },
});