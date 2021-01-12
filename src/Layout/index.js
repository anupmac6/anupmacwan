import React, { Fragment, useEffect, useState } from "react";

import ArrowNavigation from "./ArrowNavigation";
import Header from "./Header";
import Menu from "./Header/Menu";
import MobileNavigation from "./MobileNavigation";
import Resume from "./Header/Resume";
import Social from "./Header/Social";
import background from "../images/main_bg.png";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default function Layout({ children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(
    window.innerWidth < 1025
  );

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      if (window.innerWidth < 1025) {
        setShowMobileMenu(true);
      } else {
        setShowMobileMenu(false);
      }
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
  return (
    <Fragment>
      <div
        className="lm-animated-bg"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="page">
        <div className="page-content">
          <Header showMobileMenu={showMobileMenu}>
            <Menu />
            <Social />
            <Resume />
            <div className="copyrights">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </Header>

          <MobileNavigation
            showMobileMenu={showMobileMenu}
            toggle={() =>
              setShowMobileMenu((prevState) => {
                return !prevState;
              })
            }
          />

          <ArrowNavigation />

          <div className="content-area">
            <div className="animated-sections">
              {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                  showMobileMenu: showMobileMenu,
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
