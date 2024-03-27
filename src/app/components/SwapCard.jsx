import { useState } from "react";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import { formatAddress } from "../config";
import downArrow from "../img/icons8-down-24.png";
const SwapCard = ({ isModalOpen, changeModalState }) => {
  const { address, status } = useAccount();
  // const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address });

  const ConnectWalletClickHandler = () => {
    console.log("[Connect-Wallet]: ");
    console.log("[state]: ", isModalOpen);
    changeModalState();
  };

  return (
    <>
      <div className="p-5 mx-auto mt-20 bg-gray-300 border border-gray-100 shadow-sm border-opacity-20 bg-opacity-5 w-96 rounded-2xl backdrop-filter backdrop-blur-lg">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">Swap</h2>
          <button type="button" aria-label="settings">
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="TuneIcon"
            >
              {/* <path d="M 3 17 v 2 h 6 v -2 H 3 Z M 3 5 v 2 h 10 V 5 H 3 Z m 10 16 v -2 h 8 v -2 h -8 v -2 h -2 v 6 h 2 Z M 7 9 v 2 H 3 v 2 h 4 v 2 h 2 V 9 H 7 Z m 14 4 v -2 H 11 v 2 h 10 Z m -6 -4 h 2 V 7 h 4 V 5 h -4 V 3 h -2 v 6 Z"></path> */}
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between w-full p-3 my-2 bg-gray-300 border border-gray-400 border-opacity-20 bg-opacity-5 rounded-3xl backdrop-filter backdrop-blur-lg">
          <button
            type="button"
            className="flex px-3 py-2 bg-gray-200 rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg"
          >
            <h6>Add Token</h6>
            <svg
              className="w-8 h-6 m-0"
              focusable="false"
              aria-hidden="true"
              data-testid="KeyboardArrowDownIcon"
            >
              <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </button>

          <input
            className="w-1/2 text-right bg-transparent focus:outline-none"
            type="text"
            placeholder="0"
          />
        </div>
        <div className="flex justify-center">
          <button className="absolute p-2 bg-gray-200 border border-gray-400 top-[40%] border-opacity-20 bg-opacity-5 rounded-3xl">
            <img className="w-5 h-5" src={downArrow.src} alt="" />
          </button>
          {/* <div className="absolute z-10 w-10 h-10 bg-gray-200 border border-gray-100 bottom-1/2 border-opacity-20 bg-opacity-5 rounded-3xl backdrop-filter backdrop-blur-lg">
            <button className="w-8 h-8 m-auto" type="button" disabled="">
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowDownwardIcon"
              >
                <path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
              </svg>
            </button>
          </div> */}
        </div>

        <div className="flex items-center justify-between w-full p-3 my-2 bg-gray-400 border border-gray-400 rounded-3xl border-opacity-20 bg-opacity-5 backdrop-filter backdrop-blur-lg">
          <button
            type="button"
            className="flex px-3 py-2 bg-gray-100 rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg"
          >
            <h6>Add Token</h6>
            <svg
              className="w-8 h-6 m-0 text-white"
              focusable="false"
              aria-hidden="true"
              data-testid="KeyboardArrowDownIcon"
            >
              <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </button>

          <input
            className="w-1/2 text-right bg-transparent focus:outline-none"
            type="text"
            placeholder="0"
          />
        </div>
        <button
          type="button"
          className="w-full px-4 py-3 text-white rounded-lg bg-violet-800"
        >
          {status === "connecting" && isModalOpen === true ? (
            <p className="font-bold" onClick={ConnectWalletClickHandler}>
              {" "}
              Connecting . . .{" "}
            </p>
          ) : status === "connected" ? (
            <p className="font-bold" onClick={ConnectWalletClickHandler}>
              {" "}
              {ensName
                ? `${ensName} (${formatAddress(address)})`
                : formatAddress(address)}{" "}
            </p>
          ) : (
            <p className="font-bold" onClick={ConnectWalletClickHandler}>
              {" "}
              Connect Wallet{" "}
            </p>
          )}
        </button>
      </div>
      <div className="flex items-center justify-center my-4 text-sm font-semibold text-gray-500 w-">
        <p>Powered by</p>
        {"  "}
        <svg
          width="158"
          height="12"
          viewBox="0 0 158 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>No idea</title>
          <path
            d="M129.913 11.4001H131.453L127.102 0.932405H125.263L120.911 11.4001H122.436L124.036 7.45228H128.313L129.913 11.4001ZM125.606 3.51942C125.786 3.0708 125.98 2.56237 126.13 2.14367H126.22C126.369 2.56237 126.564 3.08576 126.728 3.50447L127.835 6.22607H124.515L125.606 3.51942Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M134.357 11.4001H135.763V2.54742H135.822L138.559 10.5029H139.845L142.582 2.54742H142.641V11.4001H144.032V0.932405H141.804L139.232 8.78317H139.172L136.6 0.932405H134.357V11.4001Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M148.119 11.4001H149.525V2.54742H149.585L152.321 10.5029H153.607L156.344 2.54742H156.404V11.4001H157.794V0.932405H155.566L152.994 8.78317H152.934L150.362 0.932405H148.119V11.4001Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M52.7851 6.00128C52.7851 4.36617 51.7379 3.18676 50.1475 3.18676C48.557 3.18676 47.5098 4.36735 47.5098 6.00128C47.5098 7.63521 48.5558 8.81698 50.1475 8.81698C51.7391 8.81698 52.7851 7.63639 52.7851 6.00128ZM44.6203 6.00128C44.6203 3.08287 46.7564 0.6001 49.5397 0.6001C50.9845 0.6001 52.0734 1.3238 52.5546 1.98611V0.826773H55.4203V11.1722H52.5606V10.0129C52.083 10.6752 50.9904 11.4001 49.5457 11.4001C46.7624 11.4001 44.6263 8.92087 44.6263 5.99774"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M64.8678 1.04982L62.149 7.67353L59.4302 1.04982H56.3201L60.8718 11.3998H63.4473L68.0201 1.04982H64.8678Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M70.8821 4.79676H75.7199C75.3911 3.41241 74.2991 2.89594 73.3527 2.89594C72.0352 2.89594 71.1498 3.63999 70.8868 4.79676H70.8821ZM68.0251 5.97592C68.0251 2.89594 70.3102 0.6001 73.4396 0.6001C76.4456 0.6001 78.9772 2.77095 78.8129 6.65748H70.7787C70.8821 7.87792 71.7874 8.9321 73.5582 8.9321C74.5469 8.9321 75.4111 8.51821 75.7411 7.7942H78.6849C78.0872 9.88604 76.0287 11.4001 73.4149 11.4001C70.2644 11.4001 68.0204 9.12666 68.0204 5.98418"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M90.9702 1.04982H88.2702V11.3998H90.9702V1.04982Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M92.77 6.00187C92.77 3.00049 94.9836 0.6001 98.015 0.6001C100.767 0.6001 102.582 2.40069 103.12 4.78101H100.288C99.9089 3.84943 99.1912 3.16579 98.0127 3.16579C96.5761 3.16579 95.5194 4.26386 95.5194 5.99951C95.5194 7.73516 96.5761 8.83322 98.0127 8.83322C99.1889 8.83322 99.9066 8.15077 100.288 7.21919H103.12C102.582 9.59951 100.767 11.4001 98.015 11.4001C94.9836 11.4001 92.77 8.99852 92.77 5.99715"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M110.802 1.04982L107.372 4.85875V1.04982H104.471V11.3998H107.372V6.63924L111.692 11.3998H115.271L110.104 5.70767L114.296 1.04982H110.802Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M40.4605 5.75705C40.4605 4.17179 39.9917 3.24233 38.8572 3.24233C37.6454 3.24233 36.8649 4.15129 36.8028 6.0958V11.4001H33.9901V5.75705C33.9901 4.17179 33.5213 3.24233 32.388 3.24233C31.1551 3.24233 30.3336 4.21398 30.3336 6.24287V11.3965H27.5209V0.83249H30.3336V2.03801C30.95 1.11579 31.9778 0.574508 33.0654 0.601029C34.5456 0.601029 35.6133 1.34001 36.2508 2.54433C36.8848 1.27612 38.2818 0.601029 39.428 0.601029C41.8891 0.601029 43.2709 2.39726 43.2709 5.27122V11.3965H40.4582L40.4605 5.75705Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M80.6205 1.04982H83.4309V2.83092C83.7822 1.81636 84.8268 1.04982 85.9767 1.04982H86.9205V4.05218C86.5118 3.90336 86.0821 3.82659 85.6477 3.82541C84.3139 3.82541 83.4309 4.86005 83.4309 6.57856V11.3998H80.6205V1.04982Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M10.3985 9.84878V6.0001L0.105469 11.4001H19.2132V0.600098L10.3985 9.84878Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </>
  );
};

export default SwapCard;
