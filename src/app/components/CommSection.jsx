const CommSection = () => {
  return (
    <div className="my-56">
      <h1 className="mb-16 text-6xl font-extrabold text-center uppercase">
        Get involved <span className="text-outline">in the community</span>
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-3 m-w-full max-w-[1300px] mx-auto">
        <div className="row-span-2">
          <div className="h-full p-6 shadow-sm incent-div group">
            <p className="text-sm tracking-wider uppercase">
              Maverick warrior program
            </p>
            <hr className="my-3 border border-gray-800" />
            <div className="relative w-2/3 top-52">
              <h2 className="mb-6 text-2xl font-light">
                Join our incentivized community initiative.
              </h2>
              <a
                href=""
                className="px-3 py-2 font-bold tracking-wider uppercase border-2 rounded-full group-hover:bg-violet-800 border-violet-800 "
                target="href"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
        <div className="row-span-1">
          <div className="p-5 bg-gray-300 shadow-sm bg-opacity-10 rounded-2xl backdrop-filter backdrop-blur-lg">
            <a
              className=""
              href="https://twitter.com/mavprotocol"
              target="_blank"
            >
              <div className="">
                <h4 className="text-sm uppercase text-wider">@mavprotocol</h4>
                <hr className="my-3 border border-gray-800" />
              </div>
              <div className="">
                <div>
                  <h2 className="my-4 text-3xl font-light">Twitter →</h2>
                  <p className="text-md">
                    Follow Maverick on Twitter to be the first to hear about
                    project updates and community events and to join live
                    Maverick Twitter Spaces.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row-span-1">
          <div className="p-5 bg-gray-300 shadow-sm bg-opacity-10 rounded-2xl backdrop-filter backdrop-blur-lg">
            <a href="https://discord.com/invite/dVvnmtwdRJ" target="_blank">
              <div>
                <h4 className="text-sm uppercase text-wider">
                  Discord.gg/mavprotocol
                </h4>
                <hr className="my-3 border border-gray-800" />
              </div>
              <div>
                <div>
                  <h2 className="my-4 text-3xl font-light">Discord →</h2>
                  <p className="text-md">
                    Join the Maverick Discord server to hang out, share
                    knowledge, and exchange opinions with Team Maverick and the
                    Maverick community.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row-span-1">
          <div className="h-full p-5 bg-gray-300 shadow-sm bg-opacity-10 rounded-2xl backdrop-filter backdrop-blur-lg">
            <a href="https://t.me/maverickprotocolofficial" target="_blank">
              <div>
                <h4 className="text-sm uppercase text-wider">
                  @maverick_protocol
                </h4>
                <hr className="my-3 border border-gray-800" />
              </div>
              <div>
                <div>
                  <h2 className="my-4 text-3xl font-light ">Telegram →</h2>
                  <p className="text-md">
                    Message us on Telegram to ask us anything about Maverick.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row-span-1">
          <div className="h-full p-5 bg-gray-300 shadow-sm bg-opacity-10 rounded-2xl backdrop-filter backdrop-blur-lg">
            <a
              href="https://medium.com/maverick-protocol/maverick-events/home"
              target="_blank"
            >
              <div>
                <h4 className="text-sm uppercase text-wider">
                  medium.com/maverick-protocol
                </h4>
                <hr className="my-3 border border-gray-800" />
              </div>
              <div>
                <div>
                  <h2 className="my-4 text-3xl font-light">Events →</h2>
                  <p className=" text-md">
                    Read more and sign up for the latest community events.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommSection;
