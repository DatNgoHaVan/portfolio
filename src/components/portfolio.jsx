import React from "react";
import Flip from 'react-reveal/Flip';

import reportDesigner from '../img/web-report-designer.png'
import queryBuilder from '../img/query-builder.png'
import financial from '../img/financial.jpg'
import subscription from '../img/subscription.png'

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Work</h3>
                {/* <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p> */}
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <Flip right cascade>
              <div className="col-md-4">
                <div className="work-box">
                  <div className="work-img">
                    <img src={reportDesigner} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Report Designer Tool</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJs Typescript SCSS Redux
                          </span>
                        </div>
                        <span>
                          A web application for building real-time reporting, dynamic analytics, and  operations management for factories.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <div className="work-img">
                    <img src={queryBuilder} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Query Builder Tool</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJs Typescript SCSS Redux
                          </span>
                        </div>
                        <span>
                          A web application for building real-time connection to database, query command, and data management for factories.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <div className="work-img">
                    <img src={financial} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Financial Service Management</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS Redux Bootstrap
                          </span>
                        </div>
                        <span className="w-ctegory">
                          A web application for management financial service like: Life Insurance, Financial Asset, Investment, etc.
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <div className="work-img">
                    <img src={subscription} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Manage Subscription Platform</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS Redux Bootstrap
                          </span>
                        </div>
                        <span className="w-ctegory">
                          A web application for management Subscriptions, Request and serving Marketing Online.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Flip>

          </div>
        </div>
      </section >
    );
  }
}

export default Portfolio;
