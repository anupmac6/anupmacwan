import "react-toastify/dist/ReactToastify.css";

import React, { Component, useState } from "react";
import { Timestamp, firestore } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";

import Collection from "../../collections";
import Scrollbar from "../../common/Scrollbar";

export default class Contact extends Component {
  state = { name: "", email: "", subject: "", message: "" };
  handleSubmit = async (event) => {
    const { name, email, subject, message } = this.state;
    event.preventDefault();
    try {
      await firestore
        .collection(Collection.ENQUIRES)
        .add({ name, email, subject, message, date: Timestamp.now() });

      this.setState({ name: "", email: "", subject: "", message: "" }, () => {
        toast.success(`Thank you! I'll get back to you soon.`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    } catch (error) {
      toast.error("Try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    // eslint-disable-next-line
  };
  render() {
    const { showMobileMenu } = this.props;
    const { name, email, subject, message } = this.state;
    return (
      <Scrollbar showMobileMenu={showMobileMenu} className="animated-section">
        <div className="page-title">
          <h2>Contact</h2>
        </div>

        <div className="section-content">
          <div className="row">
            {/* <!-- Contact Info --> */}
            <div className="col-xs-12 col-sm-4">
              <div className="lm-info-block gray-default">
                <i className="lnr lnr-map-marker"></i>
                <h4>Columbus, Ohio</h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">
                <i className="lnr lnr-phone-handset"></i>
                <h4>
                  <a href="tel:702-802-9514">702-802-9514</a>
                </h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">
                <i className="lnr lnr-envelope"></i>
                <h4>
                  <a href="mailto:anupmac6@gmail.com">anupmac6@gmail.com</a>
                </h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">
                <i className="lnr lnr-checkmark-circle"></i>
                <h4>Hire Me</h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>
            </div>
            {/* <!-- End of Contact Info --> */}

            {/* <!-- Contact Form --> */}
            <div className="col-xs-12 col-sm-8">
              <div className="block-title">
                <h3>
                  How Can I <span>Help You?</span>
                </h3>
              </div>

              <form className="contact-form" onSubmit={this.handleSubmit}>
                <div className="messages"></div>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <div className="controls two-columns">
                  <div className="fields clearfix">
                    <div className="left-column">
                      <div
                        className={
                          name
                            ? "form-group form-group-with-icon form-group-focus"
                            : "form-group form-group-with-icon"
                        }
                      >
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder=""
                          required="required"
                          data-error="Name is required."
                          value={name}
                          onChange={(e) => {
                            this.setState({ name: e.target.value });
                          }}
                        />
                        <label>Full Name</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div
                        className={
                          email
                            ? "form-group form-group-with-icon form-group-focus"
                            : "form-group form-group-with-icon"
                        }
                      >
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder=""
                          required="required"
                          data-error="Valid email is required."
                          value={email}
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                        <label>Email Address</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div
                        className={
                          subject
                            ? "form-group form-group-with-icon form-group-focus"
                            : "form-group form-group-with-icon"
                        }
                      >
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder=""
                          required="required"
                          data-error="Subject is required."
                          value={subject}
                          onChange={(e) => {
                            this.setState({ subject: e.target.value });
                          }}
                        />
                        <label>Subject</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="right-column">
                      <div
                        className={
                          message
                            ? "form-group form-group-with-icon form-group-focus"
                            : "form-group form-group-with-icon"
                        }
                      >
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder=""
                          rows="7"
                          required="required"
                          data-error="Please, leave me a message."
                          value={message}
                          onChange={(e) => {
                            this.setState({ message: e.target.value });
                          }}
                        ></textarea>
                        <label>Message</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="button btn-send"
                    value="Send message"
                  />
                </div>
              </form>
            </div>
            {/* <!-- End of Contact Form --> */}
          </div>
        </div>
      </Scrollbar>
    );
  }
}
