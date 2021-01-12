import React from "react";
import { findIndex } from "lodash";
import { withRouter } from "react-router-dom";
function ArrowNavigation({ location, history }) {
  const routeList = ["/", "/about-me", "/resume", "/contact-me"];

  const moveRight = () => {
    const index = findIndex(routeList, (route) => location.pathname === route);
    if (index === -1) {
      history.push(routeList[0]);
    }
    if (index === routeList.length - 1) {
      history.push(routeList[0]);
    }
    history.push(routeList[index + 1]);
  };

  const moveLeft = () => {
    const index = findIndex(routeList, (route) => location.pathname === route);
    if (index === -1) {
      history.push(routeList[0]);
    }
    if (index === 0) {
      history.push(routeList[routeList.length - 1]);
    }
    history.push(routeList[index - 1]);
  };
  return (
    <div className="lmpixels-arrows-nav">
      <div className="lmpixels-arrow-right" onClick={moveRight}>
        <i className="lnr lnr-chevron-right"></i>
      </div>
      <div className="lmpixels-arrow-left" onClick={moveLeft}>
        <i className="lnr lnr-chevron-left"></i>
      </div>
    </div>
  );
}

export default withRouter(ArrowNavigation);
