import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="dlabnav">
        <div className="dlabnav-scroll">
          <ul className="metismenu mm-show" id="menu">
            <li className="mm-active">
              <Link href="#">
                <i className="flaticon-025-dashboard"></i>
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="flaticon-093-waving"></i>
                <span className="nav-text">Leads</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa-solid fa-gear"></i>

                <span className="nav-text">Contacts</span>
                <span className="badge badge-xs style-1 badge-danger">New</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="flaticon-050-info"></i>
                <span className="nav-text">Accounts</span>
              </Link>
            </li>

            <li className="mm-active"> 
              <a
                className="has-arrow"
                aria-expanded="false"
                href="#"
              >
                <i className="flaticon-093-waving"></i>
                <span className="nav-text">Reports</span>
              </a>
              <ul>
                <li>
                <Link href="#">Leads Report</Link>
                </li>
                <li>
                <Link href="#">Contacts Report</Link>
                </li>
                <li>
                <Link href="#">Accounts Report</Link>
                </li>
                
              </ul>
            </li>
          </ul>
         
        </div>
      </div>
    </>
  );
};

export default SideBar;
