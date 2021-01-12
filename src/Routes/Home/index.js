import React from "react";
import Scrollbar from "../../common/Scrollbar";
import Zoom from "react-reveal/Zoom";
export default function index({ showMobileMenu }) {
  return (
    <Scrollbar
      showMobileMenu={showMobileMenu}
      className="animated-section start-page"
    >
      <div className="section-content vcentered">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="title-block">
              <h2>Anup Macwan</h2>
              <div className="owl-carousel text-rotation">
                <div className="item">
                  <div className="sp-subtitle">Front End Engineer</div>
                </div>

                <div className="item">
                  <div className="sp-subtitle">Full Stack Developer</div>
                </div>
                <div className="item">
                  <div className="sp-subtitle">Node JS Developer</div>
                </div>
                <div className="item">
                  <div className="sp-subtitle">
                    Mobile Application Developer (React Native)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scrollbar>
  );
}
