import React, { PureComponent } from 'react'

class Index extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <header>
          <div className="header-top">
            <div className="container d-flex justify-content-between align-items-center">
              <ul className="nav">
                <li className="nav-item"><a href="#" className="nav-link">BlackRock</a></li>
                <li className="nav-item"><a href="#" className="nav-link">iShares</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Aladdin</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Our company</a></li>
              </ul>
              <a href="#" className="nav-link">Local websites</a>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container d-flex align-items-end">
              <a className="navbar-brand" href="#"><img src="img/logo.svg" alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Our Company</a></li>
                      <li><a className="dropdown-item" href="#">Leadership</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Newsroom</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Press Releases</a></li>
                      <li><a className="dropdown-item" href="#">Media Contacts</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Insights</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Market Insights</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Investor Relations</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Stock Info</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Corporate sustainability</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Our Approach</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Careers</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Search Jobs</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa-solid fa-magnifying-glass" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end p-2" style={{ width: '280px' }}>
                      <li>
                        <form className="d-flex" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-outline-dark" type="submit"> Search </button>
                        </form>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>


        <section className="outlook-section ">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-md-6 left-col">
                <p className="sub-heading">BlackRock Investment Institute</p>
                <h1 className="outlook-heading">2025 Midyear <br></br>Global Outlook:<br></br> Getting a grip on <br></br> uncertainty
                </h1>
                <p className="lead mt-3">U.S. policy shifts and elevated uncertainty mark the evolution of the new macro
                  regime.</p>
                <div className="mt-4">
                  <a href="#" className="btn btn-light outlook-btn hover-underline-animation right">&gt; Read the Midyear Global Outlook</a>
                </div>
              </div>
              <div className="col-md-6 right-col">
                <img src="img/web-banner_1.webp" alt="Aerial view of a cargo ship on the ocean." />
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 left-info">
                <h1 className="info-heading">BlackRock completes acquisition of HPS Investment Partners</h1>
                <p className="info-paragraph">Together with HPS, we’re positioned to meet accelerating client demands
                  with integrated, best-in-class public and private solutions.</p>
                <p> ›  <a href="#" className="info-link "> Read the press release</a></p>

                <hr className="mt-5.5" />
              </div>
              <div className="col-md-4 right-info">
                <h1 className="right-info-heading">Stay current with the latest news and announcements from BlackRock.</h1>
                <p> › <a href="#" className="info-link">  Read and subscribe to BlackRock News</a> </p>

              </div>
            </div>
          </div>
        </section>

        <section className="boxes py-5">
          <div className="container">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box h-100">
                  <div className="info-box-content">
                    <p className="text-uppercase fw-bold border-bottom border-danger d-inline-block pb-1 small">
                      Investment Stewardship
                    </p>
                    <h4 className="fw-bold mt-3">
                      Explore our 2024 annual report on Investment Stewardship
                    </h4>
                    <p className="mt-3 text-muted">
                      Investment stewardship is core to our role as an asset manager and fiduciary to our clients. Read our latest annual report to learn more about BlackRock’s stewardship activities on behalf of our clients last year.
                    </p>
                  </div>
                  <a href="#" className="arrow-link ">
                    <span className="arrow-box"> &rsaquo;</span>
                    <span className="link-text hover-underline-animation left">Read our Investment Stewardship report</span>
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-box h-100">
                  <div className="info-box-content">
                    <p className="text-uppercase fw-bold border-bottom border-danger d-inline-block pb-1 small">
                      BlackRock Bulletin
                    </p>
                    <h4 className="fw-bold mt-3">Our latest views on market volatility</h4>
                    <p className="mt-3 text-muted">
                      BlackRock investment experts share insights on the fast-moving developments of U.S. trade protectionism, the global response, and what it means for the world’s financial markets.
                    </p>
                  </div>
                  <a href="#" className="arrow-link">
                    <span className="arrow-box"> &rsaquo;</span>
                    <span className="link-text hover-underline-animation left">Read the market volatility bulletin</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="larry-section py-5">
          <div className="container larry-container">
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <img src="img/larry-fink-mcta.webp" alt="larry photo" className='larry-photo' />
              </div>

              <div className="col-md-6">
                <div className="p-2">
                  <h2 className="larry-heading fw-bold mb-4">
                    Larry Fink on economic growth <br /> and prosperity
                  </h2>
                  <p className="larry-paragraph text-muted">
                    In his 2025 Chairman’s Letter to Investors, Larry Fink shares how
                    our thinking on retirement can be reshaped and how expanding access
                    to capital markets can help build a more prosperous future for more
                    people.
                  </p>
                  <a href="#" className="larry-btn fw-bold d-inline-flex align-items-center mt-4 hover-underline-animation right">
                    <span className="icon me-2 "> &rsaquo; </span>
                    <span > Read Larry Fink’s letter </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="learn-more-section text-center text-black py-4">
          <div className="container">
            <h4 className="fw-bold mb-3">Learn more</h4>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <a href="#" className="learn-link fw-bold"><i className="bi bi-chevron-right" /> About BlackRock</a>
              <a href="#" className="learn-link fw-bold"><i className="bi bi-chevron-right" /> Careers</a>
            </div>
          </div>
        </section>


        {/* Footer Section */}
        <footer className="footer-section text-white py-5">
          <div className="container">
            <div className="row text-start border-bottom pb-4 mb-4">
              <h4 className="fw-bold">Explore more</h4>
              <div className="col-md">
                <h6 className="fw-bold">About Us</h6>
                <hr />
                <ul className="list-unstyled">
                  <li>About BlackRock</li>
                  <li>Principles</li>
                  <li>Leadership</li>
                  <li>History</li>
                  <li>Contacts and Locations</li>
                </ul>
              </div>
              <div className="col-md">
                <h6 className="fw-bold">Newsroom</h6>
                <hr />
                <ul className="list-unstyled">
                  <li>Newsroom</li>
                  <li>Media Contacts</li>
                </ul>
              </div>
              <div className="col-md">
                <h6 className="fw-bold">Insights</h6>
                <hr />
                <ul className="list-unstyled">
                  <li><strong>INSIGHTS &amp; VIEWS</strong></li>
                  <li>BlackRock Investment Institute</li>
                  <li>Investment Stewardship</li>
                  <li>Our approach to sustainability</li>
                  <li>Public Policy</li>
                </ul>
              </div>
              <div className="col-md">
                <h6 className="fw-bold">Investor Relations</h6>
                <hr />
                <ul className="list-unstyled">
                  <li>Overview</li>
                  <li>Annual Reports &amp; Proxy Information</li>
                  <li>SEC Filings</li>
                  <li>Stock Information</li>
                  <li>Dividend History</li>
                  <li>Events &amp; Presentations</li>
                  <li>Corporate Governance</li>
                </ul>
              </div>
              <div className="col-md">
                <h6 className="fw-bold">Corporate sustainability</h6>
                <hr />
                <ul className="list-unstyled">
                  <li><strong>BLACKROCK SUSTAINABILITY</strong></li>
                  <li>Corporate Sustainability</li>
                  <li>Human capital</li>
                  <li>Environmental Sustainability</li>
                  <li>Ethics &amp; Integrity</li>
                  <li>Health &amp; Safety</li>
                  <li>Social Impact</li>
                </ul>
              </div>
              <div className="col-md">
                <h6 className="fw-bold">Careers</h6>
                <hr />
                <ul className="list-unstyled">
                  <li><strong>CAREERS AT BLACKROCK</strong></li>
                  <li>Search Jobs</li>
                  <li>Life at BlackRock</li>
                  <li>Benefits</li>
                  <li>Career Development</li>
                  <li>Students &amp; Graduates</li>
                  <li>Supporting Veterans</li>
                  <li>BlackRock Alumni Network</li>
                </ul>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-6">
                <h2 className="fw-bold py-4">BlackRock</h2>
                <p className="footer-desc">As a global investment manager and fiduciary to our clients, our purpose at
                  BlackRock is to help everyone experience financial well-being. Since 1999, we've been a leading
                  provider of financial technology, and our clients turn to us for the solutions they need when
                  planning for their most important goals.</p>
              </div>
              <div className="col-md-6 row">
                <div className="col-md-6">
                  <h6 className="text-danger fw-bold">CORPORATE</h6>
                  <ul className="list-unstyled">
                    <li>Fraud protection tips</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Investor relations</li>
                    <li>UK Corporate Tax Strategy</li>
                    <li>UK Gender Pay Reporting</li>
                    <li>Accessibility</li>
                    <li>Responsible Disclosure</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="text-danger fw-bold">LEGAL</h6>
                  <ul className="list-unstyled">
                    <li>Terms &amp; Conditions</li>
                    <li>Privacy Notice</li>
                    <li>Business Continuity</li>
                    <li>FINRA BrokerCheck</li>
                    <li>Best Ex &amp; Order Placement Policy</li>
                    <li>Rule 606 Disclosure</li>
                    <li>Investor Rights</li>
                    <li>Cookie Notice</li>
                    <li>Manage Cookies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>





      </>
    );
  }
}

export default Index