const EcoCard = () => {
  return (
    <div>
      <div>
        <h1 className="mb-6 text-4xl font-bold outlined">Maverick Ecosystem</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Partners */}
          <div className="mb-6">
            <div className="relative group">
              <img
                src="/assets/0-ethereum-short.a568872c.svg"
                alt="Ethereum Short Logo"
                className="w-16 h-16 transition duration-300 transform group-hover:scale-110"
              />
              <img
                src="/assets/0-ethereum-full.0a444f7b.svg"
                alt="Ethereum Full Logo"
                className="absolute w-24 h-24 transition duration-300 transform -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 group-hover:opacity-100"
              />
            </div>
            {/* Repeat the above structure for each partner */}
          </div>

          {/* Backed by */}
          <div className="mb-6">
            <h4 className="mb-4 text-xl font-semibold">Backed by</h4>
            <div className="relative group">
              <img
                src="/assets/0-founders-short.847a0e66.svg"
                alt="Founders Short Logo"
                className="w-16 h-16 transition duration-300 transform group-hover:scale-110"
              />
              <img
                src="/assets/0-founders-full.9094bcdf.svg"
                alt="Founders Full Logo"
                className="absolute w-24 h-24 transition duration-300 transform -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 group-hover:opacity-100"
              />
            </div>
            {/* Repeat the above structure for each backer */}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 text-center">
          <p className="mb-2">Maverick Protocol</p>
          <a
            href="https://drive.google.com/drive/folders/1EZzISmiCIk6N7CexUwyR5TR7EXlysXHy?usp=sharing"
            target="_blank"
            className="underline"
          >
            Brand Assets
          </a>
          <a
            href="https://assets.mav.xyz/privacy-policy"
            target="_blank"
            className="ml-4 underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="flex max-w-[1300px] mx-auto">
        <p>Maverick Protocol</p>
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1EZzISmiCIk6N7CexUwyR5TR7EXlysXHy?usp=sharing"
        >
          Brand Assets
        </a>
        <a target="_blank" href="https://assets.mav.xyz/privacy-policy">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default EcoCard;
