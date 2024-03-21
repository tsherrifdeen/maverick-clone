import uptoright from "../img/upToRight.e6e1d6cb.svg";
import uptorightPre from "../img/upToRightPre.7c2ce27a.svg";
import warrior from "../img/mavWarrior.0711e780.gif";
const CommSection = () => {
  return (
    <div className="my-56">
      <h1 className="mb-16 text-6xl font-extrabold text-center uppercase">
        Get involved <span className="text-outline">in the community</span>
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-3 m-w-full max-w-[1300px] mx-auto">
        <div className="row-span-2">
          <div className="h-full p-6 shadow-sm bg-opacity-15 bg-violet-900 rounded-2xl backdrop-filter backdrop-blur-lg">
            <p className="text-sm tracking-wider uppercase">
              Maverick warrior program
            </p>
            <hr className="my-3 border border-gray-800" />
            <div className="absolute w-2/3 bottom-8">
              <h2 className="mb-6 text-2xl">
                Join our incentivized community initiative.
              </h2>
              <a
                href=""
                className="px-3 py-2 font-semibold tracking-wider uppercase border-2 rounded-full group-hover:bg-violet-800 border-violet-800 "
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
                  <h2 className="my-4 text-3xl">Twitter →</h2>
                  <p className="font-light text-md">
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
                  <h2 className="my-4 text-3xl">Discord →</h2>
                  <p className="font-light text-md">
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
                  <h2 className="my-4 text-3xl">Telegram →</h2>
                  <p className="font-light text-md">
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
                  <h2 className="my-4 text-3xl">Events →</h2>
                  <p className="font-light text-md">
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
