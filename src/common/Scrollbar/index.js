import PerfectScrollbar from "react-perfect-scrollbar";
import React from "react";
export default function index(props) {
  if (props.showMobileMenu) {
    return <section className={props.className}>{props.children}</section>;
  } else {
    return (
      <PerfectScrollbar
        suppressScrollX
        suppressScrollY
        useBothWheelAxes
        component="section"
        onXReachEnd={() => console.log("onXReachEnd")}
        {...props}
      >
        {props.children}
      </PerfectScrollbar>
    );
  }
}
