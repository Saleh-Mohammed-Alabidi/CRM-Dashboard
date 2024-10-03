import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/public/assets/css/default.css";
import "@/public/assets/css/default.date.css";
const NavHeader = () => {
  return (
    <>
      <div className="nav-header">
        <Link href="#" className="brand-logo">
          <Image
            src="/assets/images/CRM.webp"
            width="60"
            height="60"
            alt="CRM"
          />
        </Link>

        <div className="nav-control">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <h1 className="dashboard_bar">CRM Dashboard</h1>
                <div className="nav-item d-flex align-items-center">
                  <form>
                    <div className="input-group search-area">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <span className="input-group-text">
                        <button type="button" className="btn">
                          <i className="flaticon-381-search-2"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown notification_dropdown">
                  <div className="nav-link bell dlab-theme-mode p-0">
                    <i id="icon-light" className="fas fa-sun"></i>
                    <i id="icon-dark" className="fas fa-moon"></i>
                  </div>
                </li>

                <li className="nav-item dropdown notification_dropdown">
                  <div
                    className="nav-link"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g data-name="Layer 2" transform="translate(-2 -2)">
                        <path
                          id="Path_20"
                          data-name="Path 20"
                          d="M22.571,15.8V13.066a8.5,8.5,0,0,0-7.714-8.455V2.857a.857.857,0,0,0-1.714,0V4.611a8.5,8.5,0,0,0-7.714,8.455V15.8A4.293,4.293,0,0,0,2,20a2.574,2.574,0,0,0,2.571,2.571H9.8a4.286,4.286,0,0,0,8.4,0h5.23A2.574,2.574,0,0,0,26,20,4.293,4.293,0,0,0,22.571,15.8ZM7.143,13.066a6.789,6.789,0,0,1,6.78-6.78h.154a6.789,6.789,0,0,1,6.78,6.78v2.649H7.143ZM14,24.286a2.567,2.567,0,0,1-2.413-1.714h4.827A2.567,2.567,0,0,1,14,24.286Zm9.429-3.429H4.571A.858.858,0,0,1,3.714,20a2.574,2.574,0,0,1,2.571-2.571H21.714A2.574,2.574,0,0,1,24.286,20a.858.858,0,0,1-.857.857Z"
                        ></path>
                      </g>
                    </svg>
                    <span className="badge light text-white bg-primary rounded-circle">
                      1
                    </span>
                  </div>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div
                      id="DZ_W_Notification1"
                      className="widget-media dlab-scroll p-3"
                    >
                      <ul className="timeline">
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2">
                              <Image
                                alt="image"
                                width="50"
                                src="/assets/images/CRM.webp"
                                height="50"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Test Notify</h6>
                              <small className="d-block">
                                2 OCT 2024 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown notification_dropdown">
                  <div className="nav-link">
                    <svg
                      fill="#000000"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1000px"
                      height="1000px"
                      viewBox="0 0 610.398 610.398"
                      name="datepicker"
                      className="datepicker-default calendarIcon"
                      id="datepicker"
                    >
                      <g>
                        <g>
                          <path
                            d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052
			c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553
			V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"
                          />
                          <path
                            d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992
			h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"
                          />
                          <path
                            d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117
			V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818
			c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764
			V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"
                          />
                          <path
                            d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017
			c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"
                          />
                          <path
                            d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017
			c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"
                          />
                          <path
                            d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017
			c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"
                          />
                          <path
                            d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017
			c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"
                          />
                          <path
                            d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032
			c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"
                          />
                          <path
                            d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032
			c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"
                          />
                          <path
                            d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032
			c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"
                          />
                          <path
                            d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032
			c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </li>

                <li className="nav-item dropdown header-profile">
                  <div
                    className="nav-link"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <Image
                      alt="Profile"
                      width="50"
                      height="50"
                      src="/assets/images/user-thumbnail.webp"
                    />
                  </div>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link href="#" className="dropdown-item ai-icon">
                      <svg
                        id="icon-user2"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span className="ms-2">Profile </span>
                    </Link>

                    <Link href="#" className="dropdown-item ai-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-danger"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      <span className="ms-2">Logout </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
