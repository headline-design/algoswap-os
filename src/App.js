import React, { useState } from "react";
import { CopyBlock, github } from "react-code-blocks";
import "./App.scss";
import "./App.css";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";

const MAIN_BUTTON_ID = "algoswap-btn";
const MBCOLOR_ID = "mbcolor";
const MBWIDTH_ID = "mbwidth";
const MBTEXTCOLOR_ID = "mbtextcolor";

const defaultState = {
  assetName: "Algo",
  assetName2: "HDL",
  factor: 1000000,
  code: "",
  index: 0,
  index2: 0,
};

const snippetA = "<noscript>AlgoSwap</noscript><script>window.swapDetails = ";
const snippetB =
  '</script><link href="https://unpkg.com/algoswap@1.1.2/dist/index.css" rel="stylesheet"><div id="swap-root"></div><script src="https://unpkg.com/algoswap@1.1.2/dist/src.a2b27638.js"></script>';

const App = () => {
  const [state, setState] = useState(defaultState);
  const [myObject, setMyObject] = useState({
    assetid: 0,
    assetid2: 137594422,
    pool: "F5YT2BPHPNCLHR44ZKWJOE6Z7RMVAZSX4KIWMEBYSKGBFEF7KJJ742QYT4",
    input: false,
  });
  const [buttonStyles, setButtonStyles] = useState({
    backgroundColor: "",
    width: "",
    color: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case MBCOLOR_ID:
      case MBWIDTH_ID:
      case MBTEXTCOLOR_ID:
        setButtonStyles({ ...buttonStyles, [id.substring(2)]: value });
        break;
      case "indx":
      case "indx2":
        const index = parseInt(value);
        getZeros(index, id === "indx" ? "assetName" : "assetName2");
        setState({ ...state, [id]: index });
        setMyObject({
          ...myObject,
          [id === "indx" ? "assetid" : "assetid2"]: index,
        });
        break;
      case "nt":
        setMyObject({ ...myObject, pool: value });
        break;
      case "customize":
        setMyObject({ ...myObject, input: event.target.checked });
        break;
      default:
        break;
    }
  };

  const generate = async () => {
    let mods = "";
    Object.entries(buttonStyles).forEach(([key, value]) => {
      if (value) {
        mods += `document.getElementById("${MAIN_BUTTON_ID}").style.${key} = "${value}";`;
      }
    });

    let end = mods !== "" ? "<script>" + mods + "</script>" : "";
    let codeb = snippetA + JSON.stringify(myObject) + snippetB + end;
    setState({ ...state, code: codeb });
    var doc = document.getElementById("preview").contentWindow.document;
    doc.open();
    doc.write(codeb);
    doc.close();
  };

  const getZeros = async (asa, input) => {
    if (asa != 0) {
      let url2 = "https://algoexplorerapi.io/idx2/v2/assets/" + asa;
      console.log(url2);
      fetch(url2)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let zeros = data.asset.params.decimals;
          let valueb = 1;
          for (var i = 0; i < zeros; i++) {
            valueb = valueb + "0";
          }
          setState({
            ...state,
            [input]: data.asset.params["unit-name"],
            factor: parseInt(valueb),
          });
          console.log(state);
        })
        .catch(function () {
          console.log("Error occured  " + url2);
        });
    } else {
      setState({ ...state, assetName: "Algo", factor: 1000000 });
    }
  };

  return (
    <div className="App">
      <Header />
      <div class="card text-center">
        <div class="card-2">
          <div class="card-body-2">
            <div class="form-group row" />

            <form id="calcform1" name="calcform1" autocomplete="off">
              <div class="form-group row">
                <label for="a" class="col-sm-3 col-form-label">
                  ASA-1
                </label>
                <div class="col-sm-9">
                  <div class="input-group">
                    <input
                      id="indx"
                      onChange={handleChange}
                      type="number"
                      placeHolder="0"
                      class="form-control"
                      placeholder="0"
                    />
                    <div class="input-group-text">{" " + state.assetName}</div>
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label for="a" class="col-sm-3 col-form-label">
                  ASA-2
                </label>
                <div class="col-sm-9">
                  <div class="input-group">
                    <input
                      id="indx2"
                      onChange={handleChange}
                      type="number"
                      placeHolder="0"
                      class="form-control"
                      placeholder="137594422"
                    />
                    <div class="input-group-text">{" " + state.assetName2}</div>
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label for="c" class="col-sm-3 col-form-label">
                  Liquidity Pool
                </label>
                <div class="col-sm-9">
                  <input
                    class="form-control"
                    id="nt"
                    onChange={handleChange}
                    type="text"
                    placeHolder="F5YT2BPHPNCLHR44ZKWJOE6Z7RMVAZSX4KIWMEBYSKGBFEF7KJJ742QYT4"
                  ></input>
                </div>
              </div>

              <div class="form-group row"></div>

              <div class="form-group row">
                <header class="SnippetCardHeader github">
                  <div
                    class="tooltip-wrapper"
                    data-tooltipped=""
                    aria-describedby="tippy-tooltip-16"
                    display="inline"
                  ></div>
                  <h6 class="card-title">
                    Step 2.5: Style your AlgoSwap button
                  </h6>
                </header>
              </div>

              <div class="snoopy-css">
                <div class="form-group row">
                  <label for="anglea" class="col-sm-3 col-form-label">
                    Background Color
                  </label>
                  <div class="col-sm-9">
                    <input
                      class="form-control"
                      id="mbcolor"
                      onChange={handleChange}
                      type="text"
                      placeHolder="black, #000"
                    ></input>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="anglea" class="col-sm-3 col-form-label">
                    Button Width
                  </label>
                  <div class="col-sm-9">
                    <input
                      class="form-control"
                      id="mbwidth"
                      onChange={handleChange}
                      type="text"
                      placeHolder="large, 50%"
                    ></input>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="anglea" class="col-sm-3 col-form-label">
                    Button Text Color
                  </label>
                  <div class="col-sm-9">
                    <input
                      class="form-control"
                      id="mbtextcolor"
                      onChange={handleChange}
                      type="text"
                      placeHolder="white, #fff"
                    ></input>
                  </div>
                </div>
              </div>
              <a class="btn btn-primary btn-lg" onClick={() => generate()}>
                Generate My Code
              </a>
              <br></br>
            </form>
            <div class="form-group row">
              <header class="SnippetCardHeader github-2">
                <div
                  class="tooltip-wrapper"
                  data-tooltipped=""
                  aria-describedby="tippy-tooltip-16"
                  display="inline"
                >
                  <div class="source">
                    <a
                      target="_blank"
                      href="https://github.com/headline-design"
                      rel="nofollow"
                      class="origin underlined"
                    >
                      <div className="marge">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          class="navbar-nav-svg d-inline-block align-text-top"
                          viewBox="0 0 512 499.36"
                          role="img"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"
                          ></path>
                        </svg>
                      </div>
                      <i>origin: </i>
                      <b>headline-design</b>
                    </a>
                    <div className="BGImg source-icon BGImg-loaded">
                      <div class="BGImg-image">
                        <div class="BGImg source-icon BGImg-loaded">
                          <div class="BGImg-image">
                            <a
                              class="nav-link p-2"
                              href="https://github.com/headline-design"
                              target="_blank"
                              rel="noopener"
                            >
                              <small class="d-md-none ms-2"></small>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 class="label">github.com/headline-design</h5>
              </header>

              <div class="SnippetCode">
                <div class="SnippetCode-wrapper" align="left">
                  <CopyBlock
                    text={state.code.replaceAll("><", ">\n<")}
                    language={"html"}
                    showLineNumbers={true}
                    wrapLines
                    theme={github}
                    codeBlock
                    customStyle={{
                      height: "auto",
                      overflow: "auto",
                      align: "left",
                      borderStyle: "solid",
                      borderColor: "#e1e1e1",
                      borderWidth: "1px",
                    }}
                  />
                </div>
              </div>
            </div>
            <p class="card-text">
              Note 1: Please test your AlgoSwap button in the window below,
              prior to embedding in your website. <br></br> Note 2. MyAlgo is
              currently the only Algorand wallet supported (all wallets will be
              supported in next update).
            </p>
            <iframe
              id="preview"
              title="Preview"
              width="100%"
              height="600px"
            ></iframe>
            <div id="preview2"></div>
            <div class="form-group"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
