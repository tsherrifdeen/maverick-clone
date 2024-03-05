import graph from "../img/graph.svg";
const Hero = () => {
  return (
    <>
      <div className="w-full max-w-[1400px] mx-auto px-3 font-extrabold tracking-wide text-center uppercase">
        <div className="flex flex-col justify-center h-screen ">
          <h1 class="opacity-1 z-2 text-3xl mb-8 lg:text-6xl">
            The AMM for all Market Conditions.
          </h1>

          <div class="opacity-1">
            <a href="https://app.mav.xyz" target="_blank">
              <button class=" text-white px-4 py-2 rounded-full border-violet-800 border-2">
                LAUNCH APP →
              </button>
            </a>
          </div>
        </div>

        <div>
          {/* <img src={graph.src} class="" />
          <img
            src="/assets/tronLandscape.d5d9a20b.svg"
            class="translate-y-0 translate-z-0"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
