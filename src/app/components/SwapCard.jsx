import React from "react";

const SwapCard = () => {
  return (
    <div className="= bg-opacity-10">
      <div className="border rounded box">
        <div className="border rounded shadow-md box">
          <div className="card">
            <div className="card-header">
              <div className="card-header-content">
                <span className="text-3xl">Swap</span>
              </div>
              <div className="card-header-action">
                <div>
                  <button className="btn btn-md">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="box">
                <div className="box">
                  <div className="border border-gray-300 rounded shadow-md box">
                    <div className="box">
                      <button className="btn btn-md">
                        <div className="box">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* SVG Path */}
                          </svg>
                          <h6>Add Token</h6>
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* SVG Path */}
                          </svg>
                        </div>
                      </button>
                      <input
                        className="input input-sm"
                        type="text"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary btn-md">
                    <p>Connect wallet</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500">
        <p>Powered by</p>
        <svg
          className="w-4 h-4"
          viewBox="0 0 158 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG Path */}
        </svg>
      </div>
    </div>
  );
  //   return <div class="MuiBox-root css-idd76o"><div class="MuiBox-root css-1c45d38"><div class="MuiBox-root css-l8w3b1"><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1o1ahdr"><div class="MuiCardHeader-root css-1lzht1h"><div class="MuiCardHeader-content css-11qjisw"><span class="MuiTypography-root MuiTypography-h3 MuiCardHeader-title css-za608u">Swap</span></div><div class="MuiCardHeader-action css-1bh09gn"><div><button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1egpgfe" tabindex="0" type="button" aria-label="settings"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TuneIcon"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg><span class="MuiTouchRipple-root css-w0pj6f"></span></button></div></div></div><div class="MuiCardContent-root css-13oixwe"><div class="MuiBox-root css-11frykb"><div class="MuiBox-root css-0"><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation4 MuiCard-root css-3kqfkg"><div class="MuiBox-root css-1e9shab"><div class="MuiBox-root css-0"><button class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-eawvty" tabindex="0" type="button" id="demo-simple-select-filled"><h6 class="MuiTypography-root MuiTypography-h6 css-dczez0"><div class="MuiBox-root css-70qvj9"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" color="#1C1D2E" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg><h6 class="MuiTypography-root MuiTypography-h6 css-1bxirjz">Add Token</h6><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1a67fbb" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownIcon"><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></div></h6><span class="MuiTouchRipple-root css-w0pj6f"></span></button></div><div class="MuiBox-root css-0"><div class="MuiFormControl-root MuiTextField-root css-3olw82"><div class="MuiInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall css-1bztyb5"><input aria-invalid="false" id=":r9b:" placeholder="0" type="text" inputmode="decimal" min="0" max="0" pattern="^[0-9]*[.]?[0-9]*$" class="MuiInput-input MuiInputBase-input MuiInputBase-inputSizeSmall css-1u7kqha" value=""></div></div></div></div><div class="MuiBox-root css-htdkkk"></div></div><div class="MuiBox-root css-1l4w6pd"><button class="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeMedium css-e63jy" tabindex="-1" type="button" disabled=""><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-11rfqcx" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDownwardIcon"><path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg></button></div><div class="MuiBox-root css-0"><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation4 MuiCard-root css-3kqfkg"><div class="MuiBox-root css-31wgb7"><button class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-eawvty" tabindex="0" type="button" id="demo-simple-select-filled"><h6 class="MuiTypography-root MuiTypography-h6 css-dczez0"><div class="MuiBox-root css-70qvj9"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" color="#1C1D2E" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg><h6 class="MuiTypography-root MuiTypography-h6 css-1bxirjz">Add Token</h6><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1a67fbb" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownIcon"><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></div></h6><span class="MuiTouchRipple-root css-w0pj6f"></span></button><p class="MuiTypography-root MuiTypography-body1 css-s442o4">-</p></div></div></div></div><button class="MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-8n5uv7" tabindex="0" type="button"><p class="MuiTypography-root MuiTypography-body1 css-urvkhn">Connect wallet</p><span class="MuiTouchRipple-root css-w0pj6f"></span></button></div></div></div><div class="MuiBox-root css-15e8nj6"><p class="MuiTypography-root MuiTypography-body2 css-xorfkx">Powered by</p><svg width="158" height="12" viewBox="0 0 158 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M129.913 11.4001H131.453L127.102 0.932405H125.263L120.911 11.4001H122.436L124.036 7.45228H128.313L129.913 11.4001ZM125.606 3.51942C125.786 3.0708 125.98 2.56237 126.13 2.14367H126.22C126.369 2.56237 126.564 3.08576 126.728 3.50447L127.835 6.22607H124.515L125.606 3.51942Z" fill="white" fill-opacity="0.5"></path><path d="M134.357 11.4001H135.763V2.54742H135.822L138.559 10.5029H139.845L142.582 2.54742H142.641V11.4001H144.032V0.932405H141.804L139.232 8.78317H139.172L136.6 0.932405H134.357V11.4001Z" fill="white" fill-opacity="0.5"></path><path d="M148.119 11.4001H149.525V2.54742H149.585L152.321 10.5029H153.607L156.344 2.54742H156.404V11.4001H157.794V0.932405H155.566L152.994 8.78317H152.934L150.362 0.932405H148.119V11.4001Z" fill="white" fill-opacity="0.5"></path><path d="M52.7851 6.00128C52.7851 4.36617 51.7379 3.18676 50.1475 3.18676C48.557 3.18676 47.5098 4.36735 47.5098 6.00128C47.5098 7.63521 48.5558 8.81698 50.1475 8.81698C51.7391 8.81698 52.7851 7.63639 52.7851 6.00128ZM44.6203 6.00128C44.6203 3.08287 46.7564 0.6001 49.5397 0.6001C50.9845 0.6001 52.0734 1.3238 52.5546 1.98611V0.826773H55.4203V11.1722H52.5606V10.0129C52.083 10.6752 50.9904 11.4001 49.5457 11.4001C46.7624 11.4001 44.6263 8.92087 44.6263 5.99774" fill="white" fill-opacity="0.5"></path><path d="M64.8678 1.04982L62.149 7.67353L59.4302 1.04982H56.3201L60.8718 11.3998H63.4473L68.0201 1.04982H64.8678Z" fill="white" fill-opacity="0.5"></path><path d="M70.8821 4.79676H75.7199C75.3911 3.41241 74.2991 2.89594 73.3527 2.89594C72.0352 2.89594 71.1498 3.63999 70.8868 4.79676H70.8821ZM68.0251 5.97592C68.0251 2.89594 70.3102 0.6001 73.4396 0.6001C76.4456 0.6001 78.9772 2.77095 78.8129 6.65748H70.7787C70.8821 7.87792 71.7874 8.9321 73.5582 8.9321C74.5469 8.9321 75.4111 8.51821 75.7411 7.7942H78.6849C78.0872 9.88604 76.0287 11.4001 73.4149 11.4001C70.2644 11.4001 68.0204 9.12666 68.0204 5.98418" fill="white" fill-opacity="0.5"></path><path d="M90.9702 1.04982H88.2702V11.3998H90.9702V1.04982Z" fill="white" fill-opacity="0.5"></path><path d="M92.77 6.00187C92.77 3.00049 94.9836 0.6001 98.015 0.6001C100.767 0.6001 102.582 2.40069 103.12 4.78101H100.288C99.9089 3.84943 99.1912 3.16579 98.0127 3.16579C96.5761 3.16579 95.5194 4.26386 95.5194 5.99951C95.5194 7.73516 96.5761 8.83322 98.0127 8.83322C99.1889 8.83322 99.9066 8.15077 100.288 7.21919H103.12C102.582 9.59951 100.767 11.4001 98.015 11.4001C94.9836 11.4001 92.77 8.99852 92.77 5.99715" fill="white" fill-opacity="0.5"></path><path d="M110.802 1.04982L107.372 4.85875V1.04982H104.471V11.3998H107.372V6.63924L111.692 11.3998H115.271L110.104 5.70767L114.296 1.04982H110.802Z" fill="white" fill-opacity="0.5"></path><path d="M40.4605 5.75705C40.4605 4.17179 39.9917 3.24233 38.8572 3.24233C37.6454 3.24233 36.8649 4.15129 36.8028 6.0958V11.4001H33.9901V5.75705C33.9901 4.17179 33.5213 3.24233 32.388 3.24233C31.1551 3.24233 30.3336 4.21398 30.3336 6.24287V11.3965H27.5209V0.83249H30.3336V2.03801C30.95 1.11579 31.9778 0.574508 33.0654 0.601029C34.5456 0.601029 35.6133 1.34001 36.2508 2.54433C36.8848 1.27612 38.2818 0.601029 39.428 0.601029C41.8891 0.601029 43.2709 2.39726 43.2709 5.27122V11.3965H40.4582L40.4605 5.75705Z" fill="white" fill-opacity="0.5"></path><path d="M80.6205 1.04982H83.4309V2.83092C83.7822 1.81636 84.8268 1.04982 85.9767 1.04982H86.9205V4.05218C86.5118 3.90336 86.0821 3.82659 85.6477 3.82541C84.3139 3.82541 83.4309 4.86005 83.4309 6.57856V11.3998H80.6205V1.04982Z" fill="white" fill-opacity="0.5"></path><path d="M10.3985 9.84878V6.0001L0.105469 11.4001H19.2132V0.600098L10.3985 9.84878Z" fill="white" fill-opacity="0.5"></path></svg></div></div></div></div>
};

export default SwapCard;
