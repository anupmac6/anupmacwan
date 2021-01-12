import React from "react";
import Scrollbar from "../../common/Scrollbar";

export default function index({ showMobileMenu }) {
  return (
    <Scrollbar showMobileMenu={showMobileMenu} className="animated-section">
      <div className="page-title">
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <p>
              Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
              elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
              justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
              hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
              condimentum dictum et vel massa. Ut in imperdiet dolor, vel
              consectetur dui.
            </p>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="info-list">
              <ul>
                <li>
                  <span className="title">Age</span>
                  <span className="value">
                    {new Date().getFullYear() - 1992}
                  </span>
                </li>

                <li>
                  <span className="title">Residence</span>
                  <span className="value">Ohio - U.S</span>
                </li>

                <li>
                  <span className="title">Address</span>
                  <span className="value">New Albany, Ohio</span>
                </li>

                <li>
                  <span className="title">e-mail</span>
                  <span className="value">anupmac6@gmail.com</span>
                </li>

                <li>
                  <span className="title">Phone</span>
                  <span className="value">+1 702 820 9514</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="white-space-50"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>
                What <span>I Do</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-store"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Web Development</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-pencil"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Node JS</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-flag"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Firebase</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-laptop-phone"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Mobile App Development</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-flag"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Database</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>

                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-flag"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Elastic</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white-space-50"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>
                Hobbies <span></span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-heart"></i>
              <h4>Gaming</h4>
              <span className="fun-fact-block-value">X-box</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-clock"></i>
              <h4>Photography</h4>
              <span className="fun-fact-block-value">Canon</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4 ">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-star"></i>
              <h4>Raspberry Pi</h4>
              <span className="fun-fact-block-value">Pi 4</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-heart"></i>
              <h4>Travelling</h4>
              <span className="fun-fact-block-value">Ocean</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 ">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-star"></i>
              <h4>Foodie</h4>
              <span className="fun-fact-block-value">Meat</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>
        </div>
      </div>
    </Scrollbar>
  );
}
