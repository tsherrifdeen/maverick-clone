import image from "../img/mavIcon.7282e1ee.svg";
const Nav = () => {
  return (
    <div className="flex py-12 px-8 justify-between w-full items-center absolute bg-gradient-to-b from-[rgba(3, 5, 23, 0.75)] to-transparent top-0 opacity-100 tracking-wide">
      <div className="">
        <a className="font-extrabold uppercase opacity-60">AMM</a>
      </div>
      <img src={image.src} className="css-12hn3rn" />
      <div className="">
        <a className="font-extrabold uppercase opacity-60">Documentation</a>
      </div>
    </div>
  );
};

export default Nav;
