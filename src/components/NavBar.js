import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
  <nav className="navbar navbar-default navbar-static-top">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">Company</Link>
      </div>
      <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
              <ul className="nav in" id="side-menu">
                  <li>
                      <Link to="/" className="active">
                          <i className="fa fa-dashboard fa-fw"></i> Departments
                      </Link>
                  </li>
                  <li>
                      <Link to="/employees" className="active">
                          <i className="fa fa-group"></i> Employees
                      </Link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
)
