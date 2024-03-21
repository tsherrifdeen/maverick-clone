const Hero = () => {
  return (
    <div className="loading-graph max-h-[90vh] ">
      <div className="w-full max-w-[1400px] mx-auto px-3 text-center uppercase">
        <div className="flex flex-col justify-center h-screen">
          <h1 className="text-3xl font-extrabold mb-9 opacity-1 z-2 lg:text-6xl">
            The AMM for all Market Conditions.
          </h1>

          <div className="opacity-1">
            <a href="/launch" target="_blank" rel="noreferrer">
              <button
                type="button"
                className="px-4 py-3 text-white border-2 rounded-full border-violet-800"
              >
                <strong>LAUNCH APP </strong> →
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
