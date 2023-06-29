import React, { Component } from "react";
import { connect } from "react-redux";
import "./OutStandingDoctor.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { LANGUAGE } from "../../../utils";
import { withRouter } from "react-router";

class OutStandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctors: [],
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.toptopDoctorsRedux !== this.props.toptopDoctorsRedux) {
      this.setState({
        arrDoctors: this.props.toptopDoctorsRedux,
      });
    }
  }

  componentDidMount() {
    this.props.loadTopDoctors();
  }

  handleViewDetailDoctor = (doctor) => {
    console.log("check view infor: ", doctor);
    this.props.history.push(`/detail-doctor/${doctor.id}`);
  };
  render() {
    let arrDoctors = this.state.arrDoctors;
    let { language } = this.props;
    // arrDoctors = arrDoctors
    //   .concat(arrDoctors)
    //   .concat(arrDoctors)
    //   .concat(arrDoctors);

    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <h3>
              <FormattedMessage id="homepage.outstanding-doctor" />
            </h3>
            <button>
              <FormattedMessage id="homepage.more-infor" />
            </button>
          </div>

          <div className="section-body">
            <Slider {...this.props.settings}>
              {arrDoctors &&
                arrDoctors.length > 0 &&
                arrDoctors.map((item, index) => {
                  let imageBase64 = "";
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, "base64").toString(
                      "binary"
                    );
                  }
                  let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName} `;
                  let nameVi = `${item.positionData.valueVi}, ${item.lastName}  ${item.firstName}`;
                  return (
                    <div
                      className="section-customize boder-outstanding-doctor"
                      key={index}
                      onClick={() => this.handleViewDetailDoctor(item)}
                    >
                      <div className="img-section-outstanding-doctor">
                        <img src={imageBase64} />
                      </div>
                      <div className="position text-center">
                        <div className="desc">
                          {language === LANGUAGE.VI ? nameVi : nameEn}
                        </div>
                        <div className="desc-2">Bệnh gan</div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    toptopDoctorsRedux: state.admin.topDoctors,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor)
);
