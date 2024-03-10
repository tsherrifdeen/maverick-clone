import graph from "../img/graph.svg";

const Hero = () => {
  return (
    <>
      <div className="w-full max-w-[1400px] mx-auto px-3 font-extrabold tracking-wide text-center uppercase">
        <div className="flex flex-col justify-center h-screen ">
          <h1 className="mb-8 text-3xl opacity-1 z-2 lg:text-6xl">
            The AMM for all Market Conditions.
          </h1>

          <div className="opacity-1">
            <a href="https://app.mav.xyz" target="_blank" rel="noreferrer">
              <button type="button" className="px-4 py-2 text-white border-2 rounded-full border-violet-800">
                LAUNCH APP →
              </button>
            </a>
          </div>
        </div>

        <div>
          {/* <img src={graph.src} className="" />
          <img
            src="/assets/tronLandscape.d5d9a20b.svg"
            className="translate-y-0 translate-z-0"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
