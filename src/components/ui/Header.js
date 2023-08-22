export const Header = () => (
    <>
      <header classname="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href=".">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={53}
                height={32}
                className="d-block my-1"
                viewBox="0 0 52 20"
                role="img"
              >
                <title>AlgoSwap</title>
                <path
                  className="cls-1"
                  d="M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z"
                  transform="translate(-163.3 -78.6)"
                  fill="#1c1ce1"
                />
                <path
                  className="cls-2"
                  d="M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z"
                  transform="translate(-163.3 -78.6)"
                  fill="#5e5ee6"
                />
              </svg>
              <span className="fs-2">
                <strong>Algo</strong>Swap
              </span>
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto btn-sm">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href=".">
                    Home
                  </a>
                </li>
              </ul>
              <span className="navbar-text-2"> v1.0 (alpha)</span>
            </div>
          </div>
        </nav>
      </header>
      <header className="py-5">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Try AlgoSwap!</h1>
            <p>
              The AlgoSwap token-swapping snippet generator is your gateway to
              FutureFi. Simply fill in the required fields and a custom embeddable
              AlgoSwap snippet will be generated for you. The AlgoSwap
              token-swapping solution is compatible with all major web hosts and
              website-building platforms.
            </p>
            <div className="d-flex flex-column flex-sm-row">
              <a
                className="btn btn-lg btn-bd-primary mb-3 me-md-3"
                href="#launch"
                role="button"
              >
                Get started!
              </a>
              <a
                className="btn btn-lg btn-outline-secondary mb-3"
                href="#docs"
                role="button"
              >
                Learn more »
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
