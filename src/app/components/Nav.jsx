import image from "../img/mavIcon.7282e1ee.svg";
const Nav = () => {
  return (
    <div className="grid py-12 px-8 grid-cols-3 justify-between w-full items-center fixed bg-gradient-to-b from-[rgba(3, 5, 23, 0.75)] to-transparent top-0 opacity-100 tracking-wide">
      <div className="">
        <a href="#amm" className="font-bold uppercase opacity-60">
          AMM
        </a>
      </div>
      <img src={image.src} className="mx-auto" />
      <div className="text-right">
        <a className="font-bold uppercase opacity-60" href="#docs">
          Documentation
        </a>
      </div>
    </div>
  );
};

export default Nav;
