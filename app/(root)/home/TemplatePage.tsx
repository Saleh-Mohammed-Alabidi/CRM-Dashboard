import React from "react";

const TemplatePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="row shapreter-row">
                <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                  <div className="static-icon">
                    <span>
                      <i className="fas fa-eye"></i>
                    </span>
                    <h3 className="count mb-0">94</h3>
                    <p className="mb-0">Profile Viewed</p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                  <div className="static-icon">
                    <span>
                      <i className="far fa-comments"></i>
                    </span>
                    <h3 className="count mb-0">261</h3>
                    <p className="mb-0">Unread Messages</p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                  <div className="static-icon">
                    <span>
                      <i className="fas fa-suitcase"></i>
                    </span>
                    <h3 className="count mb-0">874</h3>
                    <p className="mb-0">Application Sent</p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                  <div className="static-icon">
                    <span>
                      <i className="fas fa-suitcase"></i>
                    </span>
                    <h3 className="count mb-0">25</h3>
                    <p className="mb-0">App. Answered</p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                  <div className="static-icon">
                    <span>
                      <i className="fas fa-calendar"></i>
                    </span>
                    <h3 className="count mb-0">221</h3>
                    <p className="mb-0">Interviewed</p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                  <div className="static-icon">
                    <span>
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    <h3 className="count mb-0">4</h3>
                    <p className="mb-0">Hired</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title mb-0">Profile Stregth</h4>
            </div>
            <div className="card-body pt-3">
              <div className="row align-items-center">
                <div className="col-xl-6 col-sm-6">
                  <div className="progress default-progress">
                    <div
                      className="progress-bar  bg-vigit progress-animated"
                      style={{ width: "90%", height: "8px" }}
                      role="progressbar"
                    >
                      <span className="sr-only">90% Complete</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
                    <span className="font-w500">Figma</span>
                    <h6 className="mb-0">90%</h6>
                  </div>
                  <div className="progress default-progress">
                    <div
                      className="progress-bar bg-contact progress-animated"
                      style={{ width: "68%", height: "8px" }}
                      role="progressbar"
                    >
                      <span className="sr-only">45% Complete</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
                    <span className="font-w500">Adobe XD</span>
                    <h6 className="mb-0">68%</h6>
                  </div>
                  <div className="progress default-progress">
                    <div
                      className="progress-bar bg-follow progress-animated"
                      style={{ width: "85%", height: "8px" }}
                      role="progressbar"
                    >
                      <span className="sr-only">85% Complete</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end mt-2 justify-content-between">
                    <span className="font-w500">Photoshop</span>
                    <h6 className="mb-0">85%</h6>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div id="pieChart3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header border-0 flex-wrap pb-0 align-items-start">
              <h4 className="card-title mb-2">Your Network Summary</h4>
              <div className="width160">
                <div className="d-flex align-items-center">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                  >
                    <rect width="13" height="13" fill="#f73a0b"></rect>
                  </svg>
                  Following
                  <h5 className="ms-auto mb-0">239</h5>
                </div>
                <div className="mt-1 d-flex align-items-center">
                  <span>
                    <svg
                      className="me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                    >
                      <rect width="13" height="13" fill="#01111c"></rect>
                    </svg>
                    Followers
                  </span>
                  <h5 className="ms-auto mb-0">824</h5>
                </div>
              </div>
            </div>
            <div className="card-body pt-0 pb-0 ps-sm-3 ps-0">
              <div id="chartBar" className="chartBar"></div>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="card " id="user-activity">
            <div className="card-header border-0 pb-0 flex-wrap">
              <h4 className="card-title mb-0">Vacany Stats</h4>
              <div className="mt-3 mt-sm-0">
                <ul className="nav nav-tabs vacany-tabs style-1" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-bs-toggle="tab"
                      data-series="Daily"
                      href="#Daily"
                      role="tab"
                    >
                      Daily
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-bs-toggle="tab"
                      data-series="Weekly"
                      href="#Weekly"
                      role="tab"
                    >
                      Weekly
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-series="Monthly"
                      href="#Monthly"
                      role="tab"
                    >
                      Monthly
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body pt-3 px-sm-3 px-0 pb-1">
              <div className="pb-sm-4 mb-3 d-flex flex-wrap px-3">
                <div className="d-flex align-items-center">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                  >
                    <rect width="13" height="13" rx="6.5" fill="#35c556"></rect>
                  </svg>
                  <span className="text-dark fs-13 font-w500">
                    Application Sent
                  </span>
                </div>
                <div className="application d-flex align-items-center">
                  <svg
                    className="me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                  >
                    <rect width="13" height="13" rx="6.5" fill="#3f4cfe"></rect>
                  </svg>
                  <span className="text-dark fs-13 font-w500">Interviews</span>
                </div>
                <div className="application d-flex align-items-center">
                  <svg
                    className="me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                  >
                    <rect width="13" height="13" rx="6.5" fill="#f34040"></rect>
                  </svg>
                  <span className="text-dark fs-13 font-w500">Rejected</span>
                </div>
              </div>
              <div className="">
                <div id="vacancyChart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card" id="user-activity1">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title mb-0">Chart</h4>
              <ul className="nav nav-tabs style-1 chart-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link "
                    data-bs-toggle="tab"
                    data-series="Daily"
                    href="#Daily1"
                    role="tab"
                  >
                    Daily
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    data-bs-toggle="tab"
                    data-series="Weekly"
                    href="#Weekly1"
                    role="tab"
                  >
                    Weekly
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-series="Monthly"
                    href="#Monthly1"
                    role="tab"
                  >
                    Monthly
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body ps-sm-3 ps-0 pb-2">
              <div className="d-sm-flex d-block mb-3 mx-3">
                <div className="d-flex align-items-center me-5 mb-sm-0 mb-2">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                  >
                    <rect width="13" height="13" fill="#f73a0b"></rect>
                  </svg>
                  <label className="form-label mb-0 me-4">Delivered</label>
                  <h6 className="mb-0 me-1">239</h6>
                  <span className="text-success fs-13 font-w500">+0.4%</span>
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                  >
                    <rect width="13" height="13" fill="#6e6e6e"></rect>
                  </svg>
                  <label className="form-label mb-0 me-4">Expense</label>
                  <h6 className="mb-0 me-1">$8,345</h6>
                </div>
              </div>
              <div>
                <div id="activity1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header border-0">
              <h4 className="card-title mb-1">Featured Companies</h4>
              <div className="dropdown">
                <a
                  href="#"
                  className="btn-link"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                      stroke="var(--text)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                      stroke="var(--text)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                      stroke="var(--text)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Delete
                  </a>
                  <a className="dropdown-item" href="#">
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <div
              className="card-body pt-0 loadmore-content dlab-scroll height370 pb-0"
              id="scroll-y"
            >
              <div className="row list-grid-area" id="FeaturedCompaniesContent">
                <div className="col-xl-6 col-sm-6">
                  <div className="d-flex align-items-center list-item-bx">
                    <div className="icon-img-bx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="71"
                        height="71"
                        viewBox="0 0 71 71"
                      >
                        <g transform="translate(-457 -443)">
                          <rect
                            width="71"
                            height="71"
                            rx="12"
                            transform="translate(457 443)"
                            fill="#c5c5c5"
                          ></rect>
                          <g transform="translate(457 443)">
                            <rect
                              data-name="placeholder"
                              width="71"
                              height="71"
                              rx="12"
                              fill="#2769ee"
                            ></rect>
                            <circle
                              data-name="Ellipse 12"
                              cx="18"
                              cy="18"
                              r="18"
                              transform="translate(15 20)"
                              fill="#fff"
                            ></circle>
                            <circle
                              data-name="Ellipse 11"
                              cx="11"
                              cy="11"
                              r="11"
                              transform="translate(36 15)"
                              fill="#ffe70c"
                              style={{
                                mixBlendMode: "multiply",
                                isolation: "isolate",
                              }}
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ms-3 featured">
                      <h5 className="mb-1">Kleon Team</h5>
                      <span>Desgin Team Agency</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div className="d-flex align-items-center list-item-bx">
                    <div className="icon-img-bx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="71"
                        height="71"
                        viewBox="0 0 71 71"
                      >
                        <g transform="translate(-457 -443)">
                          <rect
                            width="71"
                            height="71"
                            rx="12"
                            transform="translate(457 443)"
                            fill="#c5c5c5"
                          ></rect>
                          <g transform="translate(457 443)">
                            <rect
                              data-name="placeholder"
                              width="71"
                              height="71"
                              rx="12"
                              fill="#7630d2"
                            ></rect>
                            <circle
                              data-name="Ellipse 12"
                              cx="18"
                              cy="18"
                              r="18"
                              transform="translate(15 20)"
                              fill="#fff"
                            ></circle>
                            <circle
                              data-name="Ellipse 11"
                              cx="11"
                              cy="11"
                              r="11"
                              transform="translate(36 15)"
                              fill="#ffe70c"
                              style={{
                                mixBlendMode: "multiply",
                                isolation: "isolate",
                              }}
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ms-3 featured">
                      <h5 className="mb-1">Ziro Studios Inc.</h5>
                      <span>Desgin Team Agency</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6  col-sm-6">
                  <div className="d-flex align-items-center list-item-bx">
                    <div className="icon-img-bx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="71"
                        height="71"
                        viewBox="0 0 71 71"
                      >
                        <g transform="translate(-457 -443)">
                          <rect
                            width="71"
                            height="71"
                            rx="12"
                            transform="translate(457 443)"
                            fill="#c5c5c5"
                          ></rect>
                          <g transform="translate(457 443)">
                            <rect
                              data-name="placeholder"
                              width="71"
                              height="71"
                              rx="12"
                              fill="#b848ef"
                            ></rect>
                            <circle
                              data-name="Ellipse 12"
                              cx="18"
                              cy="18"
                              r="18"
                              transform="translate(15 20)"
                              fill="#fff"
                            ></circle>
                            <circle
                              data-name="Ellipse 11"
                              cx="11"
                              cy="11"
                              r="11"
                              transform="translate(36 15)"
                              fill="#ffe70c"
                              style={{
                                mixBlendMode: "multiply",
                                isolation: "isolate",
                              }}
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ms-3 featured">
                      <h5 className="mb-1">Qerza</h5>
                      <span>Desgin Team Agency</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div className="d-flex align-items-center list-item-bx">
                    <div className="icon-img-bx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="71"
                        height="71"
                        viewBox="0 0 71 71"
                      >
                        <g transform="translate(-457 -443)">
                          <rect
                            width="71"
                            height="71"
                            rx="12"
                            transform="translate(457 443)"
                            fill="#c5c5c5"
                          ></rect>
                          <g transform="translate(457 443)">
                            <rect
                              data-name="placeholder"
                              width="71"
                              height="71"
                              rx="12"
                              fill="#7e1d74"
                            ></rect>
                            <circle
                              data-name="Ellipse 12"
                              cx="18"
                              cy="18"
                              r="18"
                              transform="translate(15 20)"
                              fill="#fff"
                            ></circle>
                            <circle
                              data-name="Ellipse 11"
                              cx="11"
                              cy="11"
                              r="11"
                              transform="translate(36 15)"
                              fill="#ffe70c"
                              style={{
                                mixBlendMode: "multiply",
                                isolation: "isolate",
                              }}
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ms-3 featured">
                      <h5 className="mb-1">Kripton Studios</h5>
                      <span>Desgin Team Agency</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div className="d-flex align-items-center list-item-bx">
                    <div className="icon-img-bx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="71"
                        height="71"
                        viewBox="0 0 71 71"
                      >
                        <g transform="translate(-457 -443)">
                          <rect
                            width="71"
                            height="71"
                            rx="12"
                            transform="translate(457 443)"
                            fill="#c5c5c5"
                          ></rect>
                          <g transform="translate(457 443)">
                            <rect
                              data-name="placeholder"
                              width="71"
                              height="71"
                              rx="12"
                              fill="#0411c2"
                            ></rect>
                            <circle
                              data-name="Ellipse 12"
                              cx="18"
                              cy="18"
                              r="18"
                              transform="translate(15 20)"
                              fill="#fff"
                            ></circle>
                            <circle
                              data-name="Ellipse 11"
                              cx="11"
                              cy="11"
                              r="11"
                              transform="translate(36 15)"
                              fill="#ffe70c"
                              style={{
                                mixBlendMode: "multiply",
                                isolation: "isolate",
                              }}
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ms-3 featured">
                      <h5 className="mb-1">Omah Ku Inc.</h5>
                      <span>Desgin Team Agency</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div className="d-flex align-items-center list-item-bx">
                    <div className="icon-img-bx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="71"
                        height="71"
                        viewBox="0 0 71 71"
                      >
                        <g transform="translate(-457 -443)">
                          <rect
                            width="71"
                            height="71"
                            rx="12"
                            transform="translate(457 443)"
                            fill="#c5c5c5"
                          ></rect>
                          <g transform="translate(457 443)">
                            <rect
                              data-name="placeholder"
                              width="71"
                              height="71"
                              rx="12"
                              fill="#378a82"
                            ></rect>
                            <circle
                              data-name="Ellipse 12"
                              cx="18"
                              cy="18"
                              r="18"
                              transform="translate(15 20)"
                              fill="#fff"
                            ></circle>
                            <circle
                              data-name="Ellipse 11"
                              cx="11"
                              cy="11"
                              r="11"
                              transform="translate(36 15)"
                              fill="#ffe70c"
                              style={{
                                mixBlendMode: "multiply",
                                isolation: "isolate",
                              }}
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ms-3 featured">
                      <h5 className="mb-1">Ventic</h5>
                      <span>Desgin Team Agency</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div className="d-flex align-items-center list-item-bx">
                    <div className="icon-img-bx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="71"
                        height="71"
                        viewBox="0 0 71 71"
                      >
                        <g transform="translate(-457 -443)">
                          <rect
                            width="71"
                            height="71"
                            rx="12"
                            transform="translate(457 443)"
                            fill="#c5c5c5"
                          ></rect>
                          <g transform="translate(457 443)">
                            <rect
                              data-name="placeholder"
                              width="71"
                              height="71"
                              rx="12"
                              fill="#175baa"
                            ></rect>
                            <circle
                              data-name="Ellipse 12"
                              cx="18"
                              cy="18"
                              r="18"
                              transform="translate(15 20)"
                              fill="#fff"
                            ></circle>
                            <circle
                              data-name="Ellipse 11"
                              cx="11"
                              cy="11"
                              r="11"
                              transform="translate(36 15)"
                              fill="#ffe70c"
                              style={{
                                mixBlendMode: "multiply",
                                isolation: "isolate",
                              }}
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ms-3 featured">
                      <h5 className="mb-1">Sakola</h5>
                      <span>Desgin Team Agency</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div className="d-flex align-items-center list-item-bx">
                    <div className="icon-img-bx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="71"
                        height="71"
                        viewBox="0 0 71 71"
                      >
                        <g transform="translate(-457 -443)">
                          <rect
                            width="71"
                            height="71"
                            rx="12"
                            transform="translate(457 443)"
                            fill="#c5c5c5"
                          ></rect>
                          <g transform="translate(457 443)">
                            <rect
                              data-name="placeholder"
                              width="71"
                              height="71"
                              rx="12"
                              fill="#eeb927"
                            ></rect>
                            <circle
                              data-name="Ellipse 12"
                              cx="18"
                              cy="18"
                              r="18"
                              transform="translate(15 20)"
                              fill="#fff"
                            ></circle>
                            <circle
                              data-name="Ellipse 11"
                              cx="11"
                              cy="11"
                              r="11"
                              transform="translate(36 15)"
                              fill="#ffe70c"
                              style={{
                                mixBlendMode: "multiply",
                                isolation: "isolate",
                              }}
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ms-3 featured">
                      <h5 className="mb-1">Uena Foods</h5>
                      <span>Desgin Team Agency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer border-0 m-auto">
              <a
                href="#"
                className="btn btn-outline-primary m-auto dlab-load-more"
                id="FeaturedCompanies"
                rel="ajax/featuredcompanies.html"
              >
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
