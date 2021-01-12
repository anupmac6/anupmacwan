import React from "react";
import Scrollbar from "../../common/Scrollbar";
export default function index({ showMobileMenu }) {
  return (
    <Scrollbar showMobileMenu={showMobileMenu} className="animated-section">
      <div className="page-title">
        <h2>Resume</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <div className="block-title">
              <h3>Education</h3>
            </div>

            <div className="timeline timeline-second-style clearfix">
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2016</h5>
                  <span className="item-company">Texas A&amp;M University</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Masters in Computer Science</h4>
                  <p>
                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                    dolor aliquam sodales. Phasellus sed mauris hendrerit,
                    laoreet sem in, lobortis ante.
                  </p>
                </div>
              </div>

              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2013</h5>
                  <span className="item-company">
                    Gujarat Technological University, India
                  </span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Bachelors in Computer Science</h4>
                  <p>
                    Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                    turpis iaculis, feugiat risus quis, aliquet urna. Quisque
                    fringilla mollis risus, eu pulvinar dolor.
                  </p>
                </div>
              </div>
            </div>

            <div className="white-space-50"></div>

            <div className="block-title">
              <h3>Experience</h3>
            </div>

            <div className="timeline timeline-second-style clearfix">
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2017 - Current</h5>
                  <span className="item-company">Vertiv</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Front End Engineer</h4>
                  <p>
                    Praesent dignissim sollicitudin justo, sed elementum quam
                    lacinia quis. Phasellus eleifend tristique posuere. Sed
                    vitae dui nec magna.
                  </p>
                </div>
              </div>

              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2016 - 2016</h5>
                  <span className="item-company">Texas A&amp;M University</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">
                    Application Developer &amp; Teaching Assistant
                  </h4>
                  <p>
                    Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                    vitae nulla tristique, ornare felis id, congue libero. Nam
                    volutpat euismod quam.
                  </p>
                </div>
              </div>

              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2013 - 2014</h5>
                  <span className="item-company">Asian Engineering </span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Web Developer</h4>
                  <p>
                    Duis mollis nunc quis quam viverra venenatis. Nulla nulla
                    arcu, congue vitae nunc ac, sodales ultricies diam. Nullam
                    justo leo, tincidunt sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="block-title">
              <h3>
                Front End <span>Skills</span>
              </h3>
            </div>

            <div className="skills-info skills-second-style">
              {/* <!-- Skill 1 --> */}
              <div className="skill clearfix">
                <h4>HTML 5 </h4>
                <div className="skill-value">95%</div>
              </div>
              <div className="skill-container skill-1">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 1 --> */}

              {/* <!-- Skill 2 --> */}
              <div className="skill clearfix">
                <h4>CSS 3</h4>
                <div className="skill-value">65%</div>
              </div>
              <div className="skill-container skill-2">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 2 --> */}

              {/* <!-- Skill 3 --> */}
              <div className="skill clearfix">
                <h4>JavaScript</h4>
                <div className="skill-value">80%</div>
              </div>
              <div className="skill-container skill-3">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 3 --> */}

              {/* <!-- Skill 4 --> */}
              <div className="skill clearfix">
                <h4>React.js</h4>
                <div className="skill-value">90%</div>
              </div>
              <div className="skill-container skill-4">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 4 --> */}

              {/* <!-- Skill 5 --> */}
              <div className="skill clearfix">
                <h4>Redux</h4>
                <div className="skill-value">90%</div>
              </div>
              <div className="skill-container skill-4">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 5 --> */}

              {/* <!-- Skill 6 --> */}
              <div className="skill clearfix">
                <h4>Angular 10</h4>
                <div className="skill-value">90%</div>
              </div>
              <div className="skill-container skill-4">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 6 --> */}
            </div>
            {/* <!-- End of Design Skills --> */}

            <div className="white-space-10"></div>

            {/* <!-- Coding Skills --> */}
            <div className="block-title">
              <h3>
                Back End <span>Skills</span>
              </h3>
            </div>

            <div className="skills-info skills-second-style">
              {/* <!-- Skill 7 --> */}
              <div className="skill clearfix">
                <h4>NodeJS</h4>
                <div className="skill-value">90%</div>
              </div>
              <div className="skill-container skill-4">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 7 --> */}
              {/* <!-- Skill 9--> */}
              <div className="skill clearfix">
                <h4>MongoDb</h4>
                <div className="skill-value">90%</div>
              </div>
              <div className="skill-container skill-4">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 9 --> */}
              {/* <!-- Skill 10--> */}
              <div className="skill clearfix">
                <h4>MySql</h4>
                <div className="skill-value">90%</div>
              </div>
              <div className="skill-container skill-4">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 10 --> */}
              {/* <!-- Skill 11--> */}
              <div className="skill clearfix">
                <h4>SQL Server</h4>
                <div className="skill-value">90%</div>
              </div>
              <div className="skill-container skill-4">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 11 --> */}

              {/* <!-- Skill 15--> */}
              <div className="skill clearfix">
                <h4>Socket IO</h4>
                <div className="skill-value">90%</div>
              </div>
              <div className="skill-container skill-4">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 15 --> */}
            </div>
            {/* <!-- End of Coding Skills --> */}

            {/* <!-- Coding Skills --> */}
            <div className="block-title">
              <h3>
                Mobile Application <span>Skills</span>
              </h3>
            </div>

            <div className="skills-info skills-second-style">
              {/* <!-- Skill 8 --> */}
              <div className="skill clearfix">
                <h4>React Native</h4>
                <div className="skill-value">90%</div>
              </div>
              <div className="skill-container skill-4">
                <div className="skill-percentage"></div>
              </div>
              {/* <!-- End of Skill 8 --> */}
            </div>
            {/* <!-- End of Coding Skills --> */}
            <div className="white-space-10"></div>

            {/* <!-- Knowledges --> */}
            <div className="block-title">
              <h3>Knowledges</h3>
            </div>

            <ul className="knowledges">
              <li>Email Design</li>
              <li>Print Design</li>
              <li>Firebase</li>
              <li>RabbitMQ</li>
              <li>ElasticSearch</li>
              <li>Communication</li>
              <li>Problem-Solving</li>
              <li>Flexibility</li>
            </ul>
            {/* <!-- End of Knowledges --> */}
          </div>
        </div>

        <div className="white-space-50"></div>
      </div>
    </Scrollbar>
  );
}
