
import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia, bsc, bscTestnet } from 'wagmi/chains'
import { injected, walletConnect, metaMask, coinbaseWallet } from 'wagmi/connectors'




const trustWalletConnector = injected(
  {
    target: 'trustWallet',
    shimDisconnect: true,
    unstable_shimAsyncInject: true,
    getProvider: () =>
      typeof window !== "undefined" ? window.trustwallet : undefined,
  }
);


export const config = createConfig({
  multiInjectedProviderDiscovery: true,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
  connectors: [
    injected(),
    walletConnect({ projectId: 'fc70813a9fcdde55e7c2aeea86347166' }),
    trustWalletConnector,
    coinbaseWallet({
      appName: "Maverick Protocol", enableMobileWalletLink: false, headlessMode: false, 
      appLogoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACz0lEQVR4Xu2by2tTQRSHv1v7oNEoipWYNhp81sSmFQ0UfIO2Yiv1hXXhRmgL1i4s2qDEVCpIKYLu/Bd0KeJG9yLiA1/LKogWQcFYK422SmS8LRGTm8dNLknvzFnPDPP75pwzZ2bu1bqIjwFO5LQJrYt4XE7tumoB4JvsHqAAKA+QPAmqEFAhoEJA7kJI5QCVA1QOUDlA6tOgSoIqCdo4Cc6rgN/Thjcefy9EbB0CgXZ4eVdSAPtCcGQEujUJAQSPQ89NmI5Br0MyAE0dcPq2Ljr6AUIeiQA0HoC+OwnB4x/hnFsSAP+u/KxkaQD49kL//eSVlgKAdwuEH6d2c9sDWLkZLj4xftqxNYBVzXDhYfp3LdsCcPsg8gzKqyQE4PbPiK/M/KppOw9wrYeh11BWnlm8aDFnAFRU62VrOqtZDUOvQLTN1koeQOsABDvhxiH48t5Y1rK1EH4EjsXZStfblSwAcUw9PAy1G/WJ9jnh5/fU4pw1cGUUqhfmJr4kAfhbofM6LN+QEPNjQj+wxMaTBVYtgOG3ICCYsZLxgE0HoeMy1DYkyxArP1CXDEDE+sg78+JLwgOE8O3d0LDfeP1SAZi/BM4/AFe9mXVP9CmaBwjBu3oh0JZZwP8AKh0QeZq/+KJ4gKdJv4byt2QWPttCAAitgMkoaBpcepE6VLIfsQgeIIQfuwb1u3Of5q8pODVT0g4+B09j7mMY9bA8BLxBaI+AuIkxa5/fwKAf+u/Bup1mR0ndzzIAYpV29Ohxnq99GoWpSagL5DtScv+CAxDlaFsYtp4s/GStGLFgABa54OhVaD5hxTStGzMvAFoZ+PboMb5mm3WTtHpkUw8jogRd6oWWs3rZGh0DUbLONYt9hVtnDGdt/7fBDAumANj+dVh5QHoCKgRUCNj9CxGVA1QOSEtAJUGVBFUStPl3gmoXULuA2gXSEVA/T4ttUOrf5/8Adm93kPHZjDMAAAAASUVORK5CYII="
    }),
    // metaMask(),
    // safe(),
  ],
})


export function formatAddress(address) {
  return address.slice(0, 7) + "..." + address.slice(address.length - 5);
}
