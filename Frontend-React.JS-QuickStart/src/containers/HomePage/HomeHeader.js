import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils";

import { changeLanguageApp } from "../../store/actions/appActions";
import { withRouter } from "react-router";

import img1 from "../../assets/img-icon1.png";
import img2 from "../../assets/img-icon2.png";
import img3 from "../../assets/img-icon3.png";
import img4 from "../../assets/img-icon4.png";
import img5 from "../../assets/img-icon5.png";
import img6 from "../../assets/img-icon6.png";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);

    //fire redux event : actions
  };
  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };

  render() {
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars icon-bars"></i>
              <div
                className="header-logo"
                onClick={() => this.returnToHome()}
              ></div>
            </div>
            <div className="center-content">
              <div className="child-center-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.speciality" />
                  </b>
                </div>
                <div className="desc">
                  <FormattedMessage id="homeheader.searchdoctor" />
                </div>
              </div>
              <div className="child-center-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.health-facility" />
                  </b>
                </div>
                <div className="desc">
                  <FormattedMessage id="homeheader.seclect-room" />
                </div>
              </div>
              <div className="child-center-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.doctor" />
                  </b>
                </div>
                <div className="desc">
                  <FormattedMessage id="homeheader.select-doctor" />
                </div>
              </div>
              <div className="child-center-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.fee" />
                  </b>
                </div>
                <div className="desc">
                  <FormattedMessage id="homeheader.check-health" />
                </div>
              </div>
            </div>

            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id="homeheader.support" />
                <span>0342925377</span>
              </div>
              <div
                className={
                  language === LANGUAGE.VI
                    ? "language-vi active "
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGE.VI)}>VN</span>
              </div>
              <div
                className={
                  language === LANGUAGE.EN
                    ? "language-en active "
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGE.EN)}>EN</span>
              </div>
            </div>
          </div>
        </div>
        {this.props.isShowBanner === true && (
          <div className="home-header-banner">
            <div className="content-up">
              <div className="title-banner">
                <FormattedMessage id="banner.title" />
              </div>
              <div className="sub-title">
                <FormattedMessage id="banner.sub-title" />
              </div>
              <div className="search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
              </div>
            </div>

            <div className="content-down">
              <div className="options">
                <div className="img-child">
                  <img src={img1} />
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.specialized-examination" />
                </div>
              </div>

              <div className="options">
                <div className="img-child">
                  <img src={img2} />
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.remote-examination" />
                </div>
              </div>

              <div className="options">
                <div className="img-child">
                  <img src={img3} />
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.general-examination" />
                </div>
              </div>

              <div className="options">
                <div className="img-child">
                  <img src={img4} />
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.medical-test" />
                </div>
              </div>

              <div className="options">
                <div className="img-child">
                  <img src={img5} />
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.mental-health" />
                </div>
              </div>

              <div className="options">
                <div className="img-child">
                  <img src={img6} />
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.dental-examination" />
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
