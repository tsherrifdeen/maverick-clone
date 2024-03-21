import downarrow from "../img/downarrow.svg";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="fixed bottom-0 flex items-center justify-between w-full px-8 py-12 *:opacity-100 h-78">
        <a className="font-bold uppercase opacity-60">Community</a>
        <div className="">
          <h4 className="mb-8 font-bold uppercase">Learn More</h4>
          <img className="mx-auto" src={downarrow.src} />
        </div>
        <a
          target="_blank"
          href="http://app.mav.xyz"
          className="font-extrabold uppercase opacity-60"
        >
          Launch App
        </a>
      </div>
    </div>
  );
};
export default Footer;
