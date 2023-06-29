import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import nhakhoa1 from "../../../../src/assets/specialty/nhakhoa1.jpg";
import nhakhoa2 from "../../../../src/assets/specialty/nhakhoa2.jpg";
import nhakhoa3 from "../../../../src/assets/specialty/nhakhoa3.jpg";
import nhakhoa4 from "../../../../src/assets/specialty/nhakhoa4.jpg";
import nhakhoa5 from "../../../../src/assets/specialty/nhakhoa5.jpg";
import nhakhoa6 from "../../../../src/assets/specialty/nhakhoa6.jpg";

class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <h3>Chuyên khoa phổ biến</h3>
            <button>Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="img">
                  <img src={nhakhoa1} />
                </div>
                <div className="desc">Nội khoa</div>
              </div>
              <div className="section-customize">
                <div className="img">
                  <img src={nhakhoa2} />
                </div>
                <div className="desc">Thần kinh</div>
              </div>
              <div className="section-customize">
                <div className="img">
                  <img src={nhakhoa3} />
                </div>
                <div className="desc">Tim mạch</div>
              </div>
              <div className="section-customize">
                <div className="img">
                  <img
                    src={nhakhoa4}
                    style={{ height: "200px", width: "300px" }}
                  />
                </div>
                <div className="desc">cột sống</div>
              </div>
              <div className="section-customize">
                <div className="img">
                  <img src={nhakhoa5} />
                </div>
                <div className="desc">y học cổ truyền</div>
              </div>
              <div className="section-customize">
                <div className="img">
                  <img src={nhakhoa6} />
                </div>
                <div className="desc">Nhi khoa</div>
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
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
