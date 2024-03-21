const FooterAbout = () => {
  return (
    <div className="bg-[#02030f] ">
      <div className="flex justify-around max-w-lg pb-24 mx-auto font-light text-center uppercase text-md opacity-30">
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
  );
};

export default FooterAbout;
