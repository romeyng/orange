import React, { Component } from "react";

import { Link } from "react-router-dom";
class Sidebar extends Component {
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.

  render() {
    return (
      // {/* // <!-- #Left Sidebar ==================== --> */}
      <div className="sidebar">
        <div className="sidebar-inner">
          {/* <!-- ### $Sidebar Header ### --> */}
          <div className="sidebar-logo">
            <div className="peers ai-c fxw-nw">
              <div className="peer peer-greed">
                <a className="sidebar-link td-n" href="index.html">
                  <div className="peers ai-c fxw-nw">
                    <div className="peer">
                      <div className="logo">
                        <img src="assets/static/images/cal-logo.png" alt="" />
                      </div>
                    </div>
                    <div className="peer peer-greed">
                      <h5 className="lh-1 mB-0 logo-text">CAM FUEL</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="peer">
                <div className="mobile-toggle sidebar-toggle">
                  <a href="" className="td-n">
                    <i className="ti-arrow-circle-left" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ### $Sidebar Menu ### --> */}
          <ul className="sidebar-menu scrollable pos-r">
            <li className="nav-item mT-30 active">
              <Link to="/">
                <span className="icon-holder">
                  <i className="c-blue-500 ti-ticket" />
                </span>
                <span className="title">Tickets</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/inventory">
                <span className="icon-holder">
                  <i className="c-brown-500 ti-package" />
                </span>
                <span className="title">Fuel Recon</span>
              </Link>
            </li>
           
            <li className="nav-item">
              <Link to="/rates">
                <div className="sidebar-link">
                  <span className="icon-holder">
                    <i className="c-blue-500 ti-money" />
                  </span>
                  <span className="title">Rates</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reports">
                <div className="sidebar-link">
                  <span className="icon-holder">
                    <i className="c-blue-500 ti-notepad" />
                  </span>
                  <span className="title">Reports</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/administrative">
                <div className="sidebar-link">
                  <span className="icon-holder">
                    <i className="c-blue-500 ti-settings" />
                  </span>
                  <span className="title">Admin</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
