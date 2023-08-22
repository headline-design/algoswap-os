import React, { useState, useEffect } from "react";
import algosdk from "algosdk";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import Pipeline from "@pipeline-ui-2/pipeline/index";

window.swapDetails = {
  assetid: 0,
  assetid2: 137594422,
  pool: "4QDLMVQORYVMBABY2EXGIVK53TBJWURS4PH2OC2TMOGKSZVMTOA6XHHZE4",
};

export default function AlgoSwap() {
  // Define state
  const [state, setState] = useState({
    update: false,
    asaIndVis: "none",
    myTransactions: ["1"],
    tableVis: false,
    balance: "",
    asaNumbVis: "none",
    asa: "Algorand",
    asaNumb: 0,
    txID: "",
    amount: 1,
    note: "",
    recipient: "",
    con_status_text: "Status: Not Connected",
    address: "",
    isOpen: false,
    completed: false,
    shhh: true,
    stateZeros: 1000000,
    stateAmount: 0,
    assetName: "Algo",
    hide: false,
    timer: 5,
    loading: true,
  });
  const [slippage, setSlippage] = useState(0.05);
  const [lsig, setLsig] = useState(undefined);
  const [asset_name, setAsset_name] = useState("");
  const [asset_name2, setAsset_name2] = useState("");
  const [validator_app_id, setValidator_app_id] = useState(552635992); // MAINNET_VALIDATOR_APP_ID
  const [liquidity_asset_id, setLiquidity_asset_id] = useState(359370898);
  const [asset_id, setAsset_id] = useState(window.swapDetails.assetid);
  const [asset_id2, setAsset_id2] = useState(window.swapDetails.assetid2);
  const [user_address, setUser_address] = useState(
    "C5E5W3BERJALL2ZH4YB3TAP7ZSJH2PJUPDHLGF74YE6DBMQ62AA47IXGNQ"
  );
  const [pool, setPool] = useState(window.swapDetails.pool);
  const [zerosIN, setZerosIN] = useState(1000000);
  const [zerosOut, setZerosOut] = useState(1000000);
  const [inputIsAlgo, setInputIsAlgo] = useState(true);
  const [asset_out_amount, setAsset_out_amount] = useState(0);
  const [quote, setQuote] = useState("");
  const [slipValue, setSlipValue] = useState("");

  let [details, setDetails] = useState({
    index: parseInt(31566704),
    amount: 0,
    note: "",
    recipient: "K3NSXYMHPRCK7PMYT3QUQXUGPZJ4MKWJXW2HJRYPVMQUMKJAOJEIEO4HK4",
    input: true,
  });
  const [swapDetails] = useState({
    assetid: 0,
    assetid2: 137594422,
    pool: "4QDLMVQORYVMBABY2EXGIVK53TBJWURS4PH2OC2TMOGKSZVMTOA6XHHZE4",
  });
  let [index, setIndex] = useState(details.index);
  let [amount, setAmount] = useState(details.amount);
  let [note, setNote] = useState(details.note);
  let [recipient, setRecipient] = useState(details.recipient);
  // Initialization logic

  useEffect(() => {
    if (window.details !== undefined) {
      setIndex(parseInt(window.details.index));
      setAmount(window.details.amount);
      setNote(window.details.note);
      setRecipient(window.details.recipient);
    } else {
      window.details = {
        index: parseInt(31566704),
        amount: 0,
        note: "",
        recipient: "K3NSXYMHPRCK7PMYT3QUQXUGPZJ4MKWJXW2HJRYPVMQUMKJAOJEIEO4HK4",
        input: true,
      };
      setAmount(window.details.amount);
      setIndex(window.details.index);
      setNote(window.details.note);
      setRecipient(
        "K3NSXYMHPRCK7PMYT3QUQXUGPZJ4MKWJXW2HJRYPVMQUMKJAOJEIEO4HK4"
      ); // Default address is set to HDL seed address. Please update recipient to your address before deploying.//
    }

    // TODO: Add logic for showDate and other initialization here
  }, []);

  function convertInput() {
    let iamount = 1000000;
    if (index !== 0) {
      if (window.details.input === true) {
        amount = amount * iamount;
      }
      Object.assign(state, { stateAmount: amount / iamount });
      document.getElementById("snoopy2").innerText =
        "" + state.stateAmount + " " + state.assetName;
    } else {
      if (window.details.input === true) {
        amount = amount * 1000000;
      }
      Object.assign(state, { stateAmount: amount / 1000000 });
      document.getElementById("snoopy2").innerText =
        "" + state.stateAmount + " " + state.assetName;
    }
  }

  const [date, setDate] = useState("");

  function close() {
    Object.assign({ isOpen: false });
    document.getElementById("firstdiv").style.display = "none";
    document.getElementById("firstdiv").className = "modal fade";
    document.getElementById("sure").style.display = "block";
    document.getElementById("shhh").style.display = "block";
    document.getElementById("tablevis").style.display = "none";
    document.getElementById("sendscreen").style.display = "none";
  }

  async function connect() {
    await connect2().then(() => {
      document.getElementById("sure").style.display = "none";
      document.getElementById("shhh").style.display = "none";
      document.getElementById("tablevis").style.display = "block";
      document.getElementById("sendscreen").style.display = "block";
      document.getElementById("snoopy").innerText =
        "" + state.address.slice(0, 20) + "...";
    });
  }

  function send() {
    if (Pipeline.pipeConnector === "WalletConnect") {
      alert(
        "Close this alert, then sign the transaction in your offical Algorand wallet app."
      );
    }
    Pipeline.send(recipient, amount, note, state.address, index).then(
      (data) => {
        if (data !== undefined) {
          Object.assign(state, { txID: data });
          document.getElementById("sendscreen").style.display = "none";
          document.getElementById("algoflex3").style.display = "block";
          document.getElementById("algolink").href =
            "https://algoexplorer.io/tx/" + state.txID;
        } else {
          alert("transaction cancelled");
        }
      }
    );
  }

  function setOpen() {
    document.getElementById("firstdiv").style.display = "block";
    document.getElementById("firstdiv").className = "modal fade show";
  }

  function switchConnector(event) {
    Pipeline.pipeConnector = event.target.value;
    console.log(Pipeline.pipeConnector);
  }

  /*if (window.details.input !== false) {
  document.getElementById("inputAmount").innerHTML = '<input id="amountInputter" class="form-control" type="number" value="0"/>'
  document.getElementById("amountInputter").onChange = inputChanged
}*/

  function inputChanged() {
    amount = document.getElementById("amountInputter").value;
    convertInput();
  }

  function showDate() {
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    setDate(m + "/" + d + "/" + y);
  }

  showDate();

  //if (window.details.input === true) {document.getElementById ("inputAmount").style.display = "block"}

  //begin logicsig code

  const definition = {
    bytecode:
      "BCAIAQCBgICAgICAgPABgICAgICAgIDwAQMEBQYlJA1EMQkyAxJEMRUyAxJEMSAyAxJEMgQiDUQzAQAxABJEMwEQIQcSRDMBGIGCgICAgICAgPABEkQzARkiEjMBGyEEEhA3ARoAgAlib290c3RyYXASEEAAXDMBGSMSRDMBG4ECEjcBGgCABHN3YXASEEACOzMBGyISRDcBGgCABG1pbnQSQAE7NwEaAIAEYnVybhJAAZg3ARoAgAZyZWRlZW0SQAJbNwEaAIAEZmVlcxJAAnkAIQYhBSQjEk0yBBJENwEaARclEjcBGgIXJBIQRDMCADEAEkQzAhAhBBJEMwIhIxJEMwIiIxwSRDMCIyEHEkQzAiQjEkQzAiWACFRNUE9PTDExEkQzAiZRAA+AD1RpbnltYW5Qb29sMS4xIBJEMwIngBNodHRwczovL3RpbnltYW4ub3JnEkQzAikyAxJEMwIqMgMSRDMCKzIDEkQzAiwyAxJEMwMAMQASRDMDECEFEkQzAxElEkQzAxQxABJEMwMSIxJEJCMTQAAQMwEBMwIBCDMDAQg1AUIBsTMEADEAEkQzBBAhBRJEMwQRJBJEMwQUMQASRDMEEiMSRDMBATMCAQgzAwEIMwQBCDUBQgF8MgQhBhJENwEcATEAE0Q3ARwBMwQUEkQzAgAxABNEMwIUMQASRDMDADMCABJEMwIRJRJEMwMUMwMHMwMQIhJNMQASRDMDESMzAxAiEk0kEkQzBAAxABJEMwQUMwIAEkQzAQEzBAEINQFCAREyBCEGEkQ3ARwBMQATRDcBHAEzAhQSRDMDFDMDBzMDECISTTcBHAESRDMCADEAEkQzAhQzBAASRDMCESUSRDMDADEAEkQzAxQzAwczAxAiEk0zBAASRDMDESMzAxAiEk0kEkQzBAAxABNEMwQUMQASRDMBATMCAQgzAwEINQFCAJAyBCEFEkQ3ARwBMQATRDMCADcBHAESRDMCADEAE0QzAwAxABJEMwIUMwIHMwIQIhJNMQASRDMDFDMDBzMDECISTTMCABJEMwEBMwMBCDUBQgA+MgQhBBJENwEcATEAE0QzAhQzAgczAhAiEk03ARwBEkQzAQEzAgEINQFCABIyBCEEEkQzAQEzAgEINQFCAAAzAAAxABNEMwAHMQASRDMACDQBD0M=",
    address: "ABUKAXTANWR6K6ZYV75DWJEPVWWOU6SFUVRI6QHO44E4SIDLHBTD2CZ64A",
    size: 881,
    variables: [
      {
        name: "TMPL_ASSET_ID_2",
        type: "int",
        index: 5,
        length: 10,
      },
      {
        name: "TMPL_ASSET_ID_1",
        type: "int",
        index: 15,
        length: 10,
      },
      {
        name: "TMPL_VALIDATOR_APP_ID",
        type: "int",
        index: 74,
        length: 10,
      },
    ],
    source:
      "https://github.com/tinymanorg/tinyman-contracts-v1/tree/13acadd1a619d0fcafadd6f6c489a906bf347484/contracts/pool_logicsig.teal.tmpl",
  };

  function get_program(variables) {
    //Return a byte array to be used in LogicSig.

    let template = definition["bytecode"];

    let template_bytes = [..._base64ToArrayBuffer(template)];

    let offset = 0;
    let i = 2;
    definition["variables"].forEach((v) => {
      let value = variables[i];
      let start = v["index"] - offset;
      let value_encoded = encode_varint(value);
      let value_encoded_len = value_encoded.length;
      let diff = v["length"] - value_encoded_len;
      offset += diff;
      template_bytes.splice(start, v["length"], ...value_encoded);
      i--;
    });

    return template_bytes;
  }

  function encode_varint(number) {
    let buf = [];
    while (true) {
      let towrite = number & 127;
      number >>= 7;
      if (number) {
        buf.push(towrite | 128);
      } else {
        buf.push(towrite);
        break;
      }
    }
    console.log(buf);
    return buf;
  }

  function get_pool_logicsig(validator_app_id, asset1_id, asset2_id) {
    let assets = [asset1_id, asset2_id];
    let asset_id_1 = Math.max(...assets);
    let asset_id_2 = Math.min(...assets);
    let program_bytes = get_program([validator_app_id, asset_id_1, asset_id_2]);
    console.log(program_bytes);
    return program_bytes;
  }

  //get_pool_logicsig(350338509,0,31566704)
  //end logicsig code

  //begin swap code

  const myAlgoWallet = new MyAlgoConnect();

  const algodClient = new algosdk.Algodv2(
    "",
    "https://api.algoexplorer.io/",
    ""
  );

  async function is_opted_in() {
    let optedIn = false;
    try {
      let account_info = await algodClient
        .accountInformation(user_address)
        .do();
      console.log(account_info);
      account_info["apps-local-state"].forEach((item) => {
        if (item["id"] == validator_app_id) {
          optedIn = true;
        }
      });
    } catch (error) {
      console.log(error);
      return false;
    }
    return optedIn;
  }

  is_opted_in().then((data) => {
    if (!data) {
      console.log("Account not opted into app...");
    } else {
      console.log(user_address + " is opted in");
    }
  });

  async function getPoolInfo(paddress) {
    try {
      let account_info = await algodClient.accountInformation(paddress).do();
      console.log(account_info);
      liquidity_asset_id = account_info["created-assets"][0].index;
      let app_state = account_info["apps-local-state"][0]["key-value"];
      console.log(app_state);

      let appObject = {};
      app_state.forEach((item) => {
        let key = item.key;
        let value = item.value;
        appObject[key] = value;
      });

      console.log(appObject);
      let reserve1 = appObject["czE="].uint;
      let reserve2 = appObject["czI="].uint;
      if (inputIsAlgo === false) {
        let r1 = reserve1;
        reserve1 = reserve2;
        reserve2 = r1;
      }
      let quote = fixedInQuote(amount, reserve1, reserve2);
      console.log(quote);
      return quote;
    } catch (error) {
      console.log(error);
    }
  }

  function fixedInQuote(asset_in_amount, output_supply, input_supply) {
    let amount_out =
      (asset_in_amount * 997 * output_supply) /
      (input_supply * 1000 + asset_in_amount * 997);
    asset_out_amount = amount_out;
    return amount_out;
  }

  async function prepare_swap_transactions() {
    const SuggestedParams = await algodClient.getTransactionParams().do();
    console.log(SuggestedParams);
    console.log(user_address + " " + pool);

    let noAlgo = false;

    let appCallAssetArray = [asset_id, liquidity_asset_id];

    if (asset_id !== 0 && asset_id2 !== 0) {
      noAlgo = true;
      appCallAssetArray = [asset_id, asset_id2, liquidity_asset_id];
    } else
      appCallAssetArray =
        asset_id === 0
          ? [asset_id2, liquidity_asset_id]
          : [asset_id, liquidity_asset_id];

    let txns = [
      algosdk.makePaymentTxnWithSuggestedParams(
        user_address,
        pool,
        2000,
        undefined,
        toUintArray("fee"),
        SuggestedParams
      ),
      algosdk.makeApplicationNoOpTxn(
        pool,
        SuggestedParams,
        validator_app_id,
        [toUintArray("swap"), toUintArray("fi")],
        [user_address],
        undefined,
        appCallAssetArray
      ),
      !inputIsAlgo
        ? algosdk.makeAssetTransferTxnWithSuggestedParams(
            user_address,
            pool,
            undefined,
            undefined,
            parseInt(amount + amount * slippage),
            undefined,
            asset_id,
            SuggestedParams
          )
        : algosdk.makePaymentTxnWithSuggestedParams(
            user_address,
            pool,
            parseInt(amount + amount * slippage),
            undefined,
            undefined,
            SuggestedParams
          ),
      inputIsAlgo || noAlgo
        ? algosdk.makeAssetTransferTxnWithSuggestedParams(
            pool,
            user_address,
            undefined,
            undefined,
            parseInt(asset_out_amount - asset_out_amount * slippage),
            undefined,
            asset_id2,
            SuggestedParams
          )
        : algosdk.makePaymentTxnWithSuggestedParams(
            pool,
            user_address,
            parseInt(asset_out_amount - asset_out_amount * slippage),
            undefined,
            undefined,
            SuggestedParams
          ),
    ];

    txns = algosdk.assignGroupID(txns);

    console.log(txns);

    return txns;
  }

  function toUintArray(input) {
    return Uint8Array.from(
      Array.from(input).map((letter) => letter.charCodeAt(0))
    );
  }

  function prepareSig() {
    let bytecode2 = get_pool_logicsig(validator_app_id, asset_id, asset_id2);
    console.log(bytecode2);
    console.log("Attempting to make logic sig");
    lsig = algosdk.makeLogicSig(bytecode2);
  }

  function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes;
  }

  const handleChange = () => {
    setQuote("");

    let slipElement = document.getElementById("slip");
    if (!slipElement) {
      console.error("Element with ID 'slip' not found");
      return;
    }

    let slipPercent = slipElement.value / 100;
    setSlippage(slipPercent);

    if (asset_id === 0) {
      setInputIsAlgo(true);
    } else {
      setInputIsAlgo(false);
    }

    getZeros(asset_id, true).then(() => {
      getZeros(asset_id2, false).then(() => {
        getPoolInfo(pool).then((data) => {
          let end = asset_name2;
          setQuote(
            " " + ((data / zerosOut) * (1 - slippage)).toFixed(2) + " " + end
          );
        });
      });
    });
  };

  async function getZeros(displayRef, index) {
    let iamount = 1000000;
    let assetName = "Algo";
    if (index !== 0) {
      let url2 = `https://algoexplorerapi.io/idx2/v2/assets/${index}`;
      console.log(url2);

      try {
        const response = await fetch(url2);
        const data = await response.json();
        console.log(data);

        let zeros = data.asset.params.decimals;
        let value = "1";
        for (let i = 0; i < zeros; i++) {
          value = value + "0";
        }
        iamount = parseInt(value);
        assetName = data.asset.params["unit-name"];
        const asaname = index === 0 ? "" : index;
        assetName = assetName + " - " + asaname;
      } catch (e) {
        console.log("Error occurred  " + url2);
      }
    } else {
      const asaname = index === 0 ? "" : index;
      assetName = asaname + " " + "Algo";
    }

    if (displayRef.current) {
      displayRef.current.innerText = assetName + " " + iamount;
    }
  }

  getZeros(asset_id, true);
  getZeros(asset_id2, false);
  //prepareSig();
  handleChange();

  var txid = "";

  function changeAmount() {

    amount = parseInt(document.getElementById("amount").value * zerosIN);
    handleChange();
  }

  function swap() {
    prepareSig();
    txid = "";
    prepare_swap_transactions().then((txns) => {
      let mySigned = [txns[0], txns[2]];
      myAlgoWallet
        .signTransaction(mySigned.map((txn) => txn.toByte()))
        .then((data) => {
          txns[0] = data[0].blob;
          txns[2] = data[1].blob;
          txns[1] = algosdk.signLogicSigTransaction(txns[1], lsig).blob;
          txns[3] = algosdk.signLogicSigTransaction(txns[3], lsig).blob;
          console.log(txns);
          try {
            algodClient
              .sendRawTransaction(txns)
              .do()
              .then((response) => {
                document.getElementById("sendscreen").style.display = "block";
                document.getElementById("algoflex3").style.display = "block";
                document.getElementById("tablevis").style.display = "none";
                document.getElementById("algolink").href =
                  "https://algoexplorer.io/tx/" + response.txId;
              });
          } catch (error) {
            console.log(error);
          }
        });
    });
  }
  async function connect2() {
    myAlgoWallet.connect().then((data) => {
      user_address = data[0].address;
      document.getElementById("snoopy").innerText = user_address;
    });
    //const addresses = accounts.map(account => account.address);
  }

  return (
    <>
      <div className="modal-backdrop fade show" />
      <div className="modal-dialog">
        <div className="modal-content-2">
          <div className="modal-header">
            <div className="real-modal-title">
              <h5 className="modal-title" id="exampleModalLiveLabel" />
              <h5 className="algoswap-btn" href="/" aria-label="AlgoSwap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={28}
                  className="d-block my-1"
                  viewBox="-3 0 48 21"
                  role="img"
                >
                  <title>AlgoSwap</title>
                  <path
                    className="ap-lg"
                    d="M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z"
                    transform="translate(-163.3 -78.6)"
                    fill="currentColor"
                  />
                  <path
                    className="ap-md"
                    d="M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z"
                    transform="translate(-163.3 -78.6)"
                    fill="currentColor"
                  />
                </svg>
                <span className="fs-5">
                  <strong>Algo</strong>Swap
                </span>
              </h5>
            </div>
            <button
              id="div-close"
              onClick={() => close()}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div p="{0}">
            <div className="higher-header-container" />
            <div className="modal-body" id="sure" p="{4}" pb="{1}" mb="{3}">
              <h3 id="messagioHeadagio">Confirm Action</h3>
              <p id="messagio">Select wallet, then click "Connect"</p>
            </div>
            <div className="flexy" px="{1}">
              <div className="algo-flex" align="center">
                <div id="shhh">
                  <div className="modal-footer">
                    <div className="dropdown">
                      <select
                        className="form-select form-select-lg"
                        aria-label=".form-select-lg example"
                        id="walletswitch"
                        onChange={() => switchConnector()}
                      >
                        <option>myAlgoWallet</option>
                        <option disabled="">WalletConnect</option>
                        <option disabled="">AlgoSigner</option>
                      </select>
                    </div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      id="div-close-2"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                    <button
                      onClick={() => connect()}
                      id="algobutton"
                      type="button"
                      className="btn btn-primary"
                    >
                      Connect
                    </button>
                  </div>
                  <div className="modal-footer-cr">
                    <div className="footer-link-ink">2021 HEADLINE INC.</div>
                    <div>
                      Powered by{" "}
                      <a
                        className="footer-link"
                        href="https://www.pipeline-ui.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PIPELINE-UI
                      </a>
                      <a
                        className="footer-link-2"
                        href="mailto:contact@headline-inc.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ' document.getElementById("swap-root").innerHTML = '
        <div align="center">
          <div className="algoswap-box">
            <button
              className=" btn btn-primary btn-lg d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
              id="algoswap-btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => setOpen()}
              href="/"
              aria-label="Bootstrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={30}
                className="d-block my-1"
                viewBox="-4 0 48 21"
                role="img"
              >
                <title>AlgoSwap</title>
                <path
                  className="ap-lg"
                  d="M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z"
                  transform="translate(-163.3 -78.6)"
                  fill="currentColor"
                />
                <path
                  className="ap-md"
                  d="M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z"
                  transform="translate(-163.3 -78.6)"
                  fill="currentColor"
                />
              </svg>
              <span className="fs-5">
                <strong>Algo</strong>Swap
              </span>
            </button>
            ' + '
          </div>
          <div id="firstdiv" style={{ display: "none" }} className="modal fade">
            ' + screen2 + '
            <div id="sendscreen" style={{ display: "none" }}>
              <div
                id="tablevis"
                className="modal-body"
                style={{ display: "none" }}
              >
                <h3 id="messagioHeadagio">Complete Swap</h3>
                <p id="messagio">Please sign &amp; send swap transactions</p>
                <div className="bd-callout my-0">
                  <div className="toast-header">
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="#4550e6">
                        {" "}
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                      </rect>
                    </svg>
                    <strong className="me-auto">TXN Summary</strong>
                    <snoopy-small small="">
                      <p id="date" />
                    </snoopy-small>
                  </div>
                  <div className="snoopy-box-boxed">
                    <strong>My Address:&nbsp;</strong>
                    <p id="snoopy" />
                  </div>
                  <div className="snoopy-box-2">
                    <div className="snoops">
                      <div id="inputAmount" style={{ display: "none" }} />
                      <div id="inputs" align="right">
                        <div className="snoops-2">
                          <label className="form-label">Input Asset ID:</label>
                          <p id="input-readonly">0</p>
                        </div>
                        <div className="snoops-2">
                          <label className="form-label">Output Asset ID:</label>
                          <p id="output-readonly">0</p>
                        </div>
                        <div className="snoops-2">
                          <label className="form-label">Amount:</label>
                          <input
                            id="amount"
                            className="form-control"
                            type="number"
                            defaultValue={1}
                            onChange={() => changeAmount()}
                          />
                        </div>
                        <br />
                        <div className="snoops-2">
                          <label className="form-label">Slippage:</label>
                        </div>
                        <div className="slidecontainer">
                          <div className="slippage-2">
                            <input
                              value={slipValue}
                              onChange={handleChange}
                              className="slider"
                              type="range"
                              min={1}
                              defaultValue={5}
                              max={50}
                            />

                            <label className="form-label-1" id="slipview">
                              0.05
                            </label>
                          </div>
                        </div>
                        <br />
                        <div className="snoops-2">
                          <h6 className="snoopy-6">Quote:</h6>
                          <p id="quote" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div p="{0}">
                  <div className="higher-header-container" />
                  <div className="flexy" px="{1}">
                    <div className="algo-flex" align="center">
                      <div id="shhh">
                        <div className="modal-footer">
                          <button
                            id="swapbutton"
                            onClick={() => swap()}
                            className="w-100 py-2 mb-2 btn btn-primary rounded-4"
                          >
                            Swap
                          </button>
                          <button
                            type="button"
                            className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4"
                            data-bs-dismiss="modal"
                            id="div-close-3"
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="modal-footer-cr">
                          <div className="footer-link-ink">
                            2021 HEADLINE INC.
                          </div>
                          <div>
                            Powered by{" "}
                            <a
                              className="footer-link"
                              href="https://www.pipeline-ui.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              PIPELINE-UI
                            </a>
                            <a
                              className="footer-link-2"
                              href="mailto:contact@headline-inc.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="algoflex3" style={{ display: "none" }}>
                <div p="{0}">
                  <div className="higher-header-container" />
                  <div
                    className="modal-body"
                    id="sure"
                    p="{4}"
                    pb="{1}"
                    mb="{3}"
                  >
                    <h3 id="messagioHeadagio">Transaction Away!</h3>
                    <p id="messagio">
                      Would you like to track your swap transactions?
                    </p>
                  </div>
                  <div className="flexy" px="{1}">
                    <div className="algo-flex" align="center">
                      <div id="shhh">
                        <div className="modal-footer">
                          <div
                            className="w-100 alert alert-primary d-flex align-items-center"
                            role="alert"
                          >
                            <svg
                              className="bi flex-shrink-0 me-2"
                              width={24}
                              height={24}
                              role="img"
                              aria-label="Success:"
                            >
                              <use xlinkHref="#check-circle-fill" />
                            </svg>
                            <div className="le-flash" my="{3}" variant="info">
                              <div className="snoopy-box-4">
                                <p className="text-progress">
                                  Check progress on
                                </p>
                                <a id="algolink" className="algoexplorer">
                                  {" "}
                                  AlgoExplorer
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                      </div>
                    </div>
                    <p>
                      To redeem excess amounts, visit{" "}
                      <a href="https://app.tinyman.org/#/redeem-excess-amounts">
                        Tinyman
                      </a>
                    </p>
                    <div className="modal-footer-cr">
                      <div className="footer-link-ink">2021 HEADLINE INC.</div>
                      <div>
                        Powered by{" "}
                        <a
                          className="footer-link"
                          href="https://www.pipeline-ui.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PIPELINE-UI
                        </a>
                        <a
                          className="footer-link-2"
                          href="mailto:contact@headline-inc.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer primary" />
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </symbol>
        <symbol
          id="exclamation-triangle-fill"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>
    </>
  );
}
