import React from "react";

export const Modal = () => {
  return (
    <div>
      <div class="modal relative svelte-lryths">
        <div class="container relative flex svelte-ro440k">
          <div class="sidebar svelte-kwt38y">
            <div class="inner-container svelte-kwt38y">
              <div class="icon-container flex svelte-kwt38y">
                <svg
                  width="48px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 286.3 286.3"
                  class="jss12"
                >
                  <path
                    d="M143.15 3.88C66.23 3.88 3.88 66.23 3.88 143.15s62.35 139.28 139.27 139.28 139.27-62.36 139.27-139.28S220.07 3.88 143.15 3.88"
                    fill="#6400ff"
                  ></path>
                  <path
                    fill="#fff"
                    d="M142.46 164.84v-31.22l-85.35 43.79h158.45V89.83z"
                  ></path>
                </svg>
              </div>{" "}
              <h2 class="heading svelte-kwt38y">Maverick Protocol</h2>{" "}
              <h4 class="subheading svelte-kwt38y">Get started</h4>{" "}
              <p class="description svelte-kwt38y">
                Connect your wallet to start using the app.
              </p>{" "}
              <div class="indicators flex items-center svelte-kwt38y">
                <div class="indicator relative svelte-kwt38y on"></div>{" "}
                <div
                  class="join relative svelte-kwt38y"
                  style="right: 2px; width: 54px;"
                ></div>{" "}
                <div
                  class="indicator relative svelte-kwt38y"
                  style="right: 8px;"
                ></div>{" "}
                <div
                  class="join relative svelte-kwt38y"
                  style="right: 10px; width: 54px;"
                ></div>{" "}
                <div
                  style="right: 16px;"
                  class="indicator relative svelte-kwt38y"
                ></div>
              </div>
            </div>
          </div>{" "}
          <div class="content flex flex-column svelte-ro440k">
            <div class="header relative flex items-center svelte-ro440k">
              <h4 class="header-heading svelte-ro440k">Available Wallets</h4>{" "}
              <div class="button-container absolute svelte-ro440k">
                <div class="flex justify-center items-center pointer">
                  <div class="close-button flex justify-center items-center svelte-gtn9pc">
                    <div class="close-icon flex items-center svelte-gtn9pc">
                      <svg
                        width="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="scroll-container svelte-ro440k">
              <div class="spacer svelte-wp0cfb"></div>{" "}
              <div class="svelte-ro440k">
                <div class="outer-container flex flex-column svelte-11upx36">
                  {" "}
                  <div class="wallets-container svelte-11upx36">
                    <button
                      class="relative justify-start wallet-button-styling svelte-11mmkf"
                      style=""
                    >
                      <div
                        class="relative svelte-1wcty06 border-blue background-transparent"
                        style="; padding: 7px; width: 48px; height: 48px; border-radius: 12px; color: black;"
                      >
                        {" "}
                      </div>{" "}
                      <span class="name svelte-11mmkf">Coinbase Wallet</span>{" "}
                    </button>
                    <button
                      class="relative justify-start wallet-button-styling svelte-11mmkf"
                      style=""
                    >
                      <div
                        class="relative svelte-1wcty06 border-blue background-transparent"
                        style="; padding: 7px; width: 48px; height: 48px; border-radius: 12px; color: black;"
                      >
                        {" "}
                      </div>{" "}
                      <span class="name svelte-11mmkf">WalletConnect</span>{" "}
                    </button>
                    <button
                      class="relative justify-start wallet-button-styling svelte-11mmkf"
                      style=""
                    >
                      <div
                        class="relative svelte-1wcty06 border-blue background-transparent"
                        style="; padding: 7px; width: 48px; height: 48px; border-radius: 12px; color: black;"
                      >
                        {" "}
                      </div>{" "}
                      <span class="name svelte-11mmkf">Trust Wallet</span>{" "}
                    </button>
                    <button
                      class="relative justify-start wallet-button-styling svelte-11mmkf"
                      style=""
                    >
                      <div
                        class="relative svelte-1wcty06 border-blue background-transparent"
                        style="; padding: 7px; width: 48px; height: 48px; border-radius: 12px; color: black;"
                      >
                        {" "}
                      </div>{" "}
                      <span class="name svelte-11mmkf">Torus</span>{" "}
                    </button>
                    <button
                      class="relative justify-start wallet-button-styling svelte-11mmkf"
                      style=""
                    >
                      <div
                        class="relative svelte-1wcty06 border-blue background-transparent"
                        style="; padding: 7px; width: 48px; height: 48px; border-radius: 12px; color: black;"
                      >
                        {" "}
                      </div>{" "}
                      <span class="name svelte-11mmkf">Binance</span>{" "}
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
