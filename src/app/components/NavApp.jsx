
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { formatAddress } from '../config';


const NavApp = ({ isModalOpen, changeModalState }) => {

  const { address, status } = useAccount()
  // const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName })

  const ConnectWalletButtonClickHandler = () => {
    console.log("[Connect-Wallet]: ");
    console.log("[state]: ", isModalOpen);
    changeModalState(oldSate => !oldSate);
  }

  return (
    <div className="container p-3 mx-auto">
      <div className="flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center">
          <a href="/">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              width="43"
              height="43"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.0017 2.07213e-07C10.7473 -0.00172294 0.00172335 10.7438 2.07213e-07 23.9983C-0.00172294 37.2527 10.7438 47.9983 23.9983 48C37.2527 48.0017 47.9983 37.2562 48 24.0017C48 24 48 24 48 23.9983C47.9983 10.7455 37.2545 0.00172335 24.0017 2.07213e-07Z"
                fill="rgb(120, 14, 255)"
              />
              <path
                d="M23.7284 28.0735V22.6842L9.20605 30.2458H36.165V15.1226L23.7284 28.0735Z"
                fill="white"
              />
            </svg>
          </a>
          <div className="flex items-baseline ml-3 ">
            <a
              href="/?chain=1"
              className="px-4 py-2 text-white bg-white rounded-lg active bg-opacity-10"
            >
              Swap
            </a>
            <a
              href="/boosted-positions?chain=1"
              className="ml-3 text-white opacity-80"
            >
              Boosted Positions
              {/* biome-ignore lint/a11y/useAltText: <explanation> */}
              <img
                src="/boosted.3504d41d.svg"
                width="14"
                height="14"
                className="inline ml-2"
              />
            </a>
            <a href="/pools?chain=1" className="ml-4 text-white opacity-80">
              Pools
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <a
            href="https://docs.mav.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-80"
          >
            Docs
          </a>
          <div className="ml-4">
            <div
              role="menuitem"
              id="engage"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tools
            </div>
          </div>
          <a href="/stake" className="ml-4 text-white opacity-80">
            <div className="flex items-center">
              <p className="text-base">Stake Mav</p>
              <img
                src="/ethereum-logo.png"
                alt="logo"
                className="ml-4"
                width="32px"
              />
            </div>
          </a>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="px-4 py-2 ml-4 text-white rounded-md bg-violet-800">
            {
              status === "connecting" ?
                <p className="text-base" onClick={ConnectWalletButtonClickHandler}> Connecting . . . </p>
                :
                status === "connected" ?
                  <p className="text-base" onClick={ConnectWalletButtonClickHandler}> {ensName ? `${ensName} (${address})` : formatAddress(address)} </p>
                  :
                  <p className="text-base" onClick={ConnectWalletButtonClickHandler}> Connect Wallet </p>
            }
            {/* {
              address ?
                <p className="text-base" onClick={ConnectWalletButtonClickHandler}> {ensName ? `${ensName} (${address})` : address} </p>
                :
                <p className="text-base" onClick={ConnectWalletButtonClickHandler}> Connect Wallet </p>
            } */}
          </button>
          <div className="ml-4">
            <div className="relative px-4 py-2 text-white bg-white rounded-lg active bg-opacity-10">
              Ethereum Market
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavApp;

