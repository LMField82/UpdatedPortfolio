import React from 'react';

function Footer() {
    return (
<div className="container">
        <div className="row footer fixed-bottom">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 Lindsay Field</p>
          </div>

          <div className="col-md-2 col-sm-6 col-xs-12 footer-icons">
            <ul className="social-icons fticon">
              <li><a className="github" href="https://github.com/LMField82"><i className="fa fa-github fa-2x"></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/in/lindsay-field-24496b119/"><i className="fa fa-linkedin fa-2x"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Footer;
