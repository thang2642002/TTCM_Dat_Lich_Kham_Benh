import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import coso1 from "../../../assets/MedicalFacility/coso1.jpg";
import coso2 from "../../../assets/MedicalFacility/coso2.jpg";
import coso3 from "../../../assets/MedicalFacility/coso3.jpg";
import coso4 from "../../../assets/MedicalFacility/coso4.jpg";
import coso5 from "../../../assets/MedicalFacility/coso5.jpg";
import coso6 from "../../../assets/MedicalFacility/coso6.png";
class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <h3>Cơ sở uy tế nổi bật</h3>
            <button>Xem thêm</button>
          </div>

          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="img">
                  <img src={coso1} />
                </div>
                <div className="desc">Bệnh viện hữu nghị Việt Đức</div>
              </div>
              <div className="section-customize">
                <div className="img">
                  <img src={coso2} />
                </div>
                <div className="desc">Bệnh viện chợ rẫy</div>
              </div>
              <div className="section-customize">
                <div className="img">
                  <img src={coso3} />
                </div>
                <div className="desc">Phòng khám bệnh đại học y dược</div>
              </div>
              <div className="section-customize">
                <div className="img">
                  <img src={coso4} />
                </div>
                <div className="desc">Bệnh viện trung ương quân đội 108</div>
              </div>
              <div className="section-customize">
                <div className="img">
                  <img src={coso5} />
                </div>
                <div className="desc">Bệnh viện Ung bướu Hưng Việt</div>
              </div>
              <div className="section-customize">
                <div className="img">
                  <img src={coso6} />
                </div>
                <div className="desc">Hệ thống y tế Thu Cúc TCI</div>
              </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
