export const Footer = () => (
    <>
      <div className="jumbotron jumbotron-2" id="docs">
        {" "}
        <div className="card-header-2 card-body" background="transparent">
          <h2 border-bottom="">AlgoSwap FAQ</h2>
        </div>
        <div className="card-body">
          <h4 id="scrollspyHeading1">What is AlgoSwap?</h4>
          <p>
            AlgoSwap is an embeddable DEX (decentralized exchange) from HEADLINE
            INC. With one snippet of code, anyone can add a custom Algorand DEX to
            their javascript-supported website. The AlgoSwap button specifically
            supports swapping Algorand ASA tokens that have active TinyMan
            liquidity pools. Unlike other white-label DEX alternatives, with
            AlgoPay there are no gatekeepers, iframes, or routing.
          </p>
          <p>
            {" "}
            HEADLINE makes blockchain “barriers-to-entry” a thing of the past.
            With AlgoSwap, we give you the keys to truly unlock Algorand’s
            potential. Now you can provide your clients, supporters, and customers
            with serious on-chain capabilities without leaving the comfort and
            privacy of your own website.
          </p>
          <h4 id="scrollspyHeading2">What are the AlgoSwap use-cases?</h4>
          <p>
            First, let’s define AlgoSwap. AlgoSwap is technically a micro-DEX.
            This ASA decentralized exchange supports swapping one token for
            another. It does not support staking or other macro DEX utilities.
            AlgoSwap also requires that the admin (you) set the tokens to be
            swapped and set the liquidity pool address in advance.
          </p>
          <p> Choosing a limited feature set was essential for a few reasons:</p>
          <li>
            Providing an unencumbered user experience was paramount. With added
            features comes complexity, and users can quickly become overwhelmed.
          </li>
          <li>
            AlgoSwap is essentially an add-on to our larger AlgoPay payments
            solution. This means that we built it with some specific use-cases in
            mind. Specifically, we designed AlgoSwap to work well for non-profits,
            startups, and small businesses/e-commerce platforms that would
            typically not have access to advanced tools that are essential for
            creating/maintaining blockchain competitive advantage.
          </li>
          <p />
          <h4 id="scrollspyHeading2">Is AlgoSwap safe to use?</h4>
          <p>
            There are many types of risks inherent in blockchain transactions. Bad
            smart contracts, phishing, and general hacking. Scams at the
            project/founder level commonly referred to as a “rug-pull” are also a
            major risk. Additionally, there are also ecosystem risks such as
            volatility and new government regulations that can also present unique
            problems. There are many other risks inherent in blockchain usage, but
            for the sake of brevity, let’s look at risks that may relate to
            transactions.
          </p>
          <p>
            It’s important to note that AlgoSwap does not use any custom smart
            contracts. Many times when you hear about blockchain hacks that result
            in millions of dollars in theft, it is usually the result of smart
            contracts with security flaws. Because AlgoSwap has no custom smart
            contracts, that concern can be alleviated.
          </p>
          <p>
            AlgoSwap, on a stripped-down level, is like a universal remote
            control. It can be programmed to interact with different devices or
            blockchain protocols. Specifically, AlgoSwap is programmed to interact
            with standard Algorand wallets such as MyAlgo, and the AMM smart
            contracts from TinyMan. Before any transaction is sent to the
            blockchain it must be signed. During the signing process, every user
            has the ability to verify the transactions and sign. AlgoSwap does not
            handle signing at all, that occurs entirely within one of the standard
            Algorand wallets.
          </p>
          <p>
            AlgoSwap does have some inherent risks. There are some dangers to
            using any token/blockchain Dapps. But because AlgoSwaps is engineered
            specifically to work with top-tier Algorand projects, we can take
            advantage of the security provided at the smart contract level and at
            the wallet signing level.
          </p>
          <p>
            Disclaimer: THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY
            KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
            LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
            OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
            WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </p>
          <h4 id="scrollspyHeading2">Why did HEADLINE make AlgoSwap?</h4>
          <p>
            HEADLINE INC is involved with nearly every aspect of the Algorand
            Ecosystem. We have a social network -{" "}
            <a href="https://forum.ax/">FORUM</a>, a developer toolkit -{" "}
            <a href="https://www.pipeline-ui.com/">PIPELINE-UI</a>, an NFT series
            - AlgoAstros, an AI application -{" "}
            <a href="https://www.libra-network.com/bias-barometer/">
              Libra Network
            </a>
            , and a payment solution -{" "}
            <a href="https://www.algopay.finance/">AlgoPay</a>. Some products we
            build for revenue, others specifically to support Algorand Ecosystem
            growth. We also love innovation, and it’s absolutely thrilling to be
            at the forefront of the web 3.0 revolution. We built AlgoSwap as a
            free tool to support the Algorand Ecosystem.
          </p>
          <p>
            People often ask why we don’t monetize certain innovative Dapps like
            AlgoPay and AlgoSwap. The reason is really quite simple. The value
            proposition with HEADLINE is that our major revenue-generating
            products will produce returns with a multiple far greater than any max
            potential revenue generated from free tools we share with the Algorand
            Community. Cheers!
          </p>
        </div>
      </div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="https://www.headline-inc.com"
            className="me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg
              className="bi"
              width={30}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 20"
              role="img"
            >
              <title>AlgoSwap</title>
              <path
                className="cls-1"
                d="M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z"
                transform="translate(-163.3 -78.6)"
              />
              <path
                className="cls-2"
                d="M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z"
                transform="translate(-163.3 -78.6)"
              />
            </svg>
          </a>
          <span className="text-muted">© 2021 HEADLINE INC</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="https://twitter.com/headline_crypto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://www.reddit.com/r/HEADLINECrypto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-reddit"
                viewBox="0 0 16 16"
              >
                <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://t.me/headliners">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
