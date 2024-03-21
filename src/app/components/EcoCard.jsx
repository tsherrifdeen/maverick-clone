import ethShort from "../img/0-ethereum-short.a568872c.svg";
import ethFull from "../img/0-ethereum-full.0a444f7b.svg";
import galxeShort from "../img/1-galxe-short.ac4f4d30.svg";
import galxeFull from "../img/1-galxe-full.8b6d9d12.svg";
import lidoShort from "../img/2-lido-short.0ca21526.svg";
import lidoFull from "../img/2-lido-full.6aa00cbe.svg";
import liquityShort from "../img/3-liquity-short.9731e351.svg";
import liquityFull from "../img/3-liquity-full.f2caf382.svg";
import swellShort from "../img/4-swell-short.27356887.svg";
import swellFull from "../img/4-swell-full.b688efba.svg";
import tokemakShort from "../img/5-tokemak-short.11142d3c.svg";
import tokemakFull from "../img/5-tokemak-full.d051b411.svg";
import eraShort from "../img/6-zkSync-era-short.35271a0e.svg";
import eraFull from "../img/6-zkSync-era-full.2118491c.svg";
import foundersShort from "../img/0-founders-short.847a0e66.svg";
import foundersFull from "../img/0-founders-full.9094bcdf.svg";
import panteraShort from "../img/0-pantera-short.b98cf256.svg";
import panterFull from "../img/0-pantera-full.cabbcf37.svg";
import jumpShort from "../img/1-jumpcrypto-short.96ff1645.svg";
import jumpFull from "../img/1-jumpcrypto-full.3b2901c9.svg";
import altonomyShort from "../img/2-altonomy-short.aff78dce.svg";
import altonomyFull from "../img/2-altonomy-full.1cbe0e88.svg";
import ApolloShort from "../img/2-apollo-short.4348d52e.svg";
import ApolloFull from "../img/2-apollo-full.ec213fcb.svg";
import BinanceShort from "../img/3-binance-short.1328efc2.svg";
import Binancefull from "../img/3-binance-full.3512e7e9.svg";
import CircleShort from "../img/3-circle-short.134234f2.svg";
import coinShort from "../img/4-coinbase-short.5ad912d3.svg";
import coinFull from "../img/4-coinbase-full.38a7b45a.svg";
import circleFull from "../img/3-circle-full.a7601562.svg";
import coralShort from "../img/4-coraldefi-short.f1f38beb.svg";
import coralFull from "../img/4-coraldefi-full.442617b8.svg";
import geminiShort from "../img/5-gemini-short.27c47251.svg";
import geminiFull from "../img/5-gemini-full.f54bad5e.svg";
import goldenTreeShort from "../img/6-goldentree-short.30935f56.svg";
import goldenTreeFull from "../img/6-goldentree-full.f84eb6c8.svg";
import shimaShort from "../img//8-shima-short.b13c2f6e.svg";
import shimaFull from "../img/8-shima-full.0f3a213e.svg";
import spartanShort from "../img/9-spartan-short.5a4156c9.svg";
import spartanFull from "../img/9-spartan-full.61019f17.svg";

const EcoCard = () => {
  return (
    <div className="bg-[#02030f] py-20">
      <h1 className="mb-20 font-bold text-center uppercase text-7xl text-outline">
        MAverick Ecosystem
      </h1>
      <div className="grid max-w-2xl grid-cols-4 gap-10 mx-auto">
        <div className="w-full h-full group *:">
          <img
            src={ethShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={ethFull.src}
            alt="full logo"
            className="relative transition duration-300 transform -translate-y-[150%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={galxeShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={galxeFull.src}
            alt="full logo"
            className="relative transition duration-300 transform -translate-y-[150%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={lidoShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={lidoFull.src}
            alt="full logo"
            className="relative transition duration-300 transform -translate-y-[150%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={liquityShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 max-w-20 max-h-20 group-hover:opacity-0"
          />
          <img
            src={liquityFull.src}
            alt="full logo"
            className="relative transition duration-300 transform -translate-y-[120%] opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
      <div className="grid max-w-xl grid-cols-3 gap-8 mx-auto my-8">
        <div className="w-full h-full group">
          <img
            src={swellShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 max-w-20 max-h-20 group-hover:opacity-0"
          />
          <img
            src={swellFull.src}
            alt="full logo"
            className="relative transition duration-300 transform -translate-y-[125%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={tokemakShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={tokemakFull.src}
            alt="full logo"
            className="relative transition duration-300 transform -translate-y-[120%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={eraShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={eraFull.src}
            alt="full logo"
            className="relative transition duration-300 transform -translate-y-[125%] opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
      <p className="mb-12 font-normal text-center uppercase">backed by</p>
      <div className="grid max-w-xl grid-cols-3 gap-8 mx-auto my-8">
        <div className="w-full h-full group">
          <img
            src={foundersShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={foundersFull.src}
            alt="full logo"
            className="relative transition mx-auto duration-300 max-w-24 max-h-24 transform -translate-y-[100%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={panteraShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={panterFull.src}
            alt="full logo"
            className="relative transition mx-auto duration-300 max-w-24 max-h-24 transform -translate-y-[100%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={jumpShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 max-w-20 max-h-20 group-hover:opacity-0"
          />
          <img
            src={jumpFull.src}
            alt="full logo"
            className="relative transition mx-auto duration-300 max-w-24 max-h-24 transform -translate-y-[100%] opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
      <div className="grid max-w-3xl grid-cols-4 gap-8 mx-auto my-8 lg:grid-cols-5">
        <div className="w-full h-full group">
          <img
            src={altonomyShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 max-w-24 max-h-24 group-hover:opacity-0"
          />
          <img
            src={altonomyFull.src}
            alt="full logo"
            className="relative transition duration-300 transform -translate-y-[100%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={ApolloShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={ApolloFull.src}
            alt="full logo"
            className="relative transition duration-300 transform -translate-y-[200%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={BinanceShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={Binancefull.src}
            alt=""
            className="relative transition duration-300 transform -translate-y-[150%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={CircleShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={circleFull.src}
            alt=""
            className="relative transition duration-300 transform -translate-y-[150%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={coinShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={coinFull.src}
            alt=""
            className="relative transition duration-300 transform -translate-y-[200%] opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
      <div className="grid max-w-3xl grid-cols-4 gap-8 mx-auto my-8 lg:grid-cols-5">
        <div className="w-full h-full group">
          <img
            src={coralShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={coralFull.src}
            alt=""
            className="relative transition duration-300 max-w-24 max-h-24 mx-auto transform -translate-y-[100%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={geminiShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={geminiFull.src}
            alt=""
            className="relative transition duration-300 transform -translate-y-[150%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={goldenTreeShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={goldenTreeFull.src}
            alt=""
            className="relative transition duration-300 transform -translate-y-[150%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={shimaShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={shimaFull.src}
            alt=""
            className="relative transition duration-300 transform -translate-y-[150%] opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="w-full h-full group">
          <img
            src={spartanShort.src}
            alt="short logo"
            className="mx-auto transition duration-300 group-hover:opacity-0"
          />
          <img
            src={spartanFull.src}
            alt=""
            className="relative transition duration-300 transform -translate-y-[100%] opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default EcoCard;
