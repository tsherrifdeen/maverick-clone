const graphSection = () => {
  return (
    <div id="amm" className="h-[90vh] overflow-y-scroll scrollable mt-36">
      <div className="grid max-w-[1200px] mx-auto items-center grid-cols-5 gap-x-20">
        <div className="col-span-2 h-[90vh]">
          <span className="text-xs opacity-70">1 / 4</span>
          <p className="text-2xl my-9">
            When prices are going up, you can use
            <span className="font-bold underline"> Mode Right</span> to have
            your liquidity position follow the price of an asset up as it
            increases. Your liquidity will not move if the price decreases.
          </p>
          <a
            className="p-3 font-semibold uppercase border-2 rounded-full border-violet-800"
            href="https://docs.mav.xyz/guides/liquidity-providers/understanding-modes#mode-right"
            target="_blank"
            rel="noreferrer"
          >
            Learn More <span>→</span>
          </a>
        </div>
        <div className="col-span-3 h-[90vh]">
          <div className="">
            <img
              src="https://pub-a9e95ffe81d843ed8789f708ee388a09.r2.dev/modeRightGraph.gif"
              alt="Mode Right Graph"
            />
          </div>
        </div>
        <div className="col-span-2 h-[90vh]">
          <span className="text-xs opacity-70">2 / 4</span>
          <p className="text-2xl my-9">
            When prices are going down, you can use{" "}
            <span className="font-bold underline">Mode Left</span> to have your
            liquidity position follow the price of an asset down as it
            decreases. Your liquidity will not move if the price increases.
          </p>
          <a
            className="p-3 font-semibold uppercase border-2 rounded-full border-violet-800"
            href="https://docs.mav.xyz/guides/liquidity-providers/understanding-modes#mode-left"
            target="_blank"
            rel="noreferrer"
          >
            Learn More <span>→</span>
          </a>
        </div>
        <div className="col-span-3 h-[90vh]">
          <div className="">
            <img
              // src="https://pub-a9e95ffe81d843ed8789f708ee388a09.r2.dev/modeLeftGraph.gif"
              src="/mode-static-graph.gif"
              alt="Mode Left Graph"
            />
          </div>
        </div>
        <div className="col-span-2 h-[90vh]">
          <span className="text-xs opacity-70">3 / 4</span>
          <p className="text-2xl font-normal my-9">
            In sideways markets, such as stable pairs, you can use{" "}
            <span className="font-bold underline">Mode Both</span> to have your
            liquidity position follow the price of an asset in both directions.
          </p>
          <a
            className="p-3 font-semibold uppercase border-2 rounded-full border-violet-800"
            href="https://docs.mav.xyz/guides/liquidity-providers/understanding-modes#mode-left"
            target="_blank"
            rel="noreferrer"
          >
            Learn More <span>→</span>
          </a>
        </div>
        <div className="col-span-3 h-[90vh]">
          <div className="">
            <img src="/modeBothStatic.gif" alt="Mode Left Graph" />
          </div>
        </div>
        <div className="col-span-2 h-[90vh]">
          <span className="text-xs opacity-70">4 / 4</span>
          <p className="text-2xl font-normal my-9">
            You can use <span className="font-bold underline">Mode Static</span>{" "}
            to build a customized liquidity distribution that doesn't move with
            price. This Mode can be used to configure a number of advanced
            liquidity strategies, including token launchpads.
          </p>
          <a
            className="p-3 font-semibold uppercase border-2 rounded-full border-violet-800"
            href="https://docs.mav.xyz/guides/liquidity-providers/understanding-modes#mode-left"
            target="_blank"
            rel="noreferrer"
          >
            Learn More <span>→</span>
          </a>
        </div>
        <div className="col-span-3 h-[90vh]">
          <div className="">
            <img
              // src="https://pub-a9e95ffe81d843ed8789f708ee388a09.r2.dev/modeStaticGraph.gif"
              src="/mode-static-graph.gif"
              alt="Mode Left Graph"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default graphSection;
