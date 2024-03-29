"use client";
import { useRef, useEffect } from "react";
const CardSection = () => {
  const scrollableRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      const scrollableElement = scrollableRef.current;
      if (!scrollableElement) return;
      const delta = Math.max(
        -1,
        Math.min(1, event.wheelDelta || -event.detail)
      );

      // Check if horizontal scrolling is at the beginning or end
      const isAtStart = scrollableElement.scrollLeft === 0;
      const isAtEnd =
        scrollableElement.scrollLeft + scrollableElement.clientWidth ===
        scrollableElement.scrollWidth;

      if (isAtStart && delta < 0) {
        // If at the beginning and scrolling left, allow vertical scrolling of the whole page
        return;
      } else if (isAtEnd && delta > 0) {
        // If at the end and scrolling right, allow vertical scrolling of the whole page
        return;
      }

      // Prevent default vertical scrolling behavior
      event.preventDefault();

      // Calculate the amount to scroll horizontally
      scrollableElement.scrollLeft -= delta * 40;
    };

    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  return (
    <div className="my-60" id="docs">
      <h1 className="mb-16 text-6xl font-extrabold text-center uppercase">
        Increase Efficiency <span className="text-outline">with Maverick</span>
      </h1>
      <div
        className="flex flex-row items-stretch overflow-x-scroll scrollable mx-auto py-6 w-full max-w-[1400px]"
        ref={scrollableRef}
      >
        <div className="flex-shrink-0 w-96" />
        <div className="flex-shrink-0 p-6 m-2 bg-gray-300 shadow-sm group bg-opacity-5 w-96 rounded-2xl backdrop-filter backdrop-blur-lg">
          <a href="https://docs.mav.xyz" target="_blank" rel="noreferrer">
            <div className="mb-4 text-sm tracking-wider uppercase opacity-90">
              <h4>Maverick Guide</h4>
            </div>
            <hr className="border border-gray-800" />
            <div className="">
              <div className="my-8">
                <h2 className="mb-4 text-2xl font-light">
                  Getting Started on Maverick
                </h2>
                <p className="opacity-80 text-md">
                  Step-by-step tutorials for all users–including traders,
                  liquidity providers, and DAO treasuries–on how to use
                  Maverick.
                </p>
              </div>
              <a
                href="https://docs.mav.xyz"
                className="absolute px-3 py-1 font-semibold tracking-wider uppercase border-2 rounded-full bottom-3 group-hover:bg-violet-800 border-violet-800"
                target="href"
              >
                Learn More →
              </a>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 p-6 m-2 bg-gray-300 shadow-sm group bg-opacity-5 w-96 rounded-2xl backdrop-filter backdrop-blur-lg">
          <a
            href="https://docs.mav.xyz/further-information/frequently-asked-questions"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 text-sm tracking-wider uppercase opacity-90">
              <h4>MAVERICK FAQ</h4>
            </div>
            <hr className="border border-gray-800" />
            <div className="">
              <div className="my-8">
                <h2 className="mb-4 text-2xl font-light ">
                  Maverick Frequently Asked Questions
                </h2>
                <p className="opacity-80 text-md">
                  A summary page of the answers to most frequently asked
                  questions like: What is Maverick Protocol? How does Maverick
                  Protocol work? How do I use the Maverick Protocol?
                </p>
              </div>
              <a
                href="https://docs.mav.xyz/further-information/frequently-asked-questions"
                className="absolute px-3 py-1 font-semibold tracking-wider uppercase border-2 rounded-full bottom-3 group-hover:bg-violet-800 border-violet-800 "
                target="href"
              >
                Learn More →
              </a>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 p-6 m-2 bg-gray-300 shadow-sm group bg-opacity-5 w-96 rounded-2xl backdrop-filter backdrop-blur-lg">
          <a
            href="https://medium.com/maverick-protocol/maverick-amm-the-revolutionary-amm-that-enables-directional-lping-unlocking-greater-capital-34427f5ac22f"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 text-sm tracking-wider uppercase opacity-90">
              <h4>MAVERICK AMM</h4>
            </div>
            <hr className="border border-gray-800" />
            <div className="">
              <div className="my-8">
                <h2 className="mb-4 text-2xl font-light ">
                  The Revolutionary AMM that enables Directional LPing,
                  unlocking greater capital control and higher capital
                  efficiency.
                </h2>
                <p className="opacity-80 text-md">
                  Maverick AMM introduces the novel AMM concept of Directional
                  LPing, which facilitates better capital control for liquidity
                  providers and offers massive improvements in capital
                  efficiency.
                </p>
              </div>
              <a
                href="https://medium.com/maverick-protocol/maverick-amm-the-revolutionary-amm-that-enables-directional-lping-unlocking-greater-capital-34427f5ac22f"
                className="absolute px-3 py-1 font-semibold tracking-wider uppercase border-2 rounded-full bottom-3 group-hover:bg-violet-800 border-violet-800 "
                target="href"
              >
                Learn More →
              </a>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 p-6 m-2 bg-gray-300 shadow-sm group bg-opacity-5 w-96 rounded-2xl backdrop-filter backdrop-blur-lg">
          <a
            href="https://medium.com/maverick-protocol/introducing-maverick-a-protocol-for-decentralized-permissionless-trading-and-staking-of-any-asset-40b2a8bb1d54"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 text-sm tracking-wider uppercase opacity-90">
              <h4>MAVERICK LITEPAPER</h4>
            </div>
            <hr className="border border-gray-800" />
            <div className="">
              <div className="my-8">
                <h2 className="mb-4 text-2xl font-light ">
                  The infrastructure for the most liquid markets in DeFi.
                </h2>
                <p className="opacity-80 text-md">
                  Maverick Protocol offers a new infrastructure for
                  decentralized finance, built to facilitate the most liquid
                  markets for traders, liquidity providers, DAO treasuries, and
                  developers, powered by a revolutionary Automated Market Maker
                  (AMM).
                </p>
              </div>
              <a
                href="https://medium.com/maverick-protocol/introducing-maverick-a-protocol-for-decentralized-permissionless-trading-and-staking-of-any-asset-40b2a8bb1d54"
                className="absolute px-3 py-1 font-semibold tracking-wider uppercase border-2 rounded-full bottom-3 group-hover:bg-violet-800 border-violet-800 "
                target="href"
              >
                Learn More →
              </a>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 p-6 m-2 bg-gray-300 shadow-sm group bg-opacity-5 w-96 rounded-2xl backdrop-filter backdrop-blur-lg">
          <a
            href="https://docs.mav.xyz/guides/liquidity-providers/understanding-modes"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 text-sm tracking-wider uppercase opacity-90">
              <h4>MAVERICK GUIDE</h4>
            </div>
            <hr className="border border-gray-800" />
            <div className="">
              <div className="my-8">
                <h2 className="mb-4 text-2xl font-light ">
                  Learn more about Maverick AMM’s four powerful liquidity Modes.
                </h2>
                <p className="opacity-80 text-md">
                  Each of these modes is designed to facilitate a particular
                  kind of liquidity strategy, with the first three all relying
                  on Maverick AMM’s intelligent liquidity-shifting technology to
                  keep your liquidity active according to certain parameters.
                  Let’s take a closer look at each of them.
                </p>
              </div>
              <a
                href="https://docs.mav.xyz/guides/liquidity-providers/understanding-modes"
                className="absolute px-3 py-1 font-semibold tracking-wider uppercase border-2 rounded-full bottom-3 group-hover:bg-violet-800 border-violet-800 "
                target="href"
              >
                Learn More →
              </a>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-96" />
      </div>
    </div>
  );
};

export default CardSection;
