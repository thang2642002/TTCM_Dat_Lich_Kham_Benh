import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import camnang from "../../../../src/assets/handbook/camnang.png";

class HandBook extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className="section-share section-handbook">
        <div className="section-container">
          <div className="section-header">
            <h3>Cẩm nang</h3>
            <button>Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...settings}>
              <div className="section-customize  section-handbook">
                <div className="img">
                  <img src={camnang} />
                </div>
                <div className="desc desc-handbook">
                  Review Kích thích từ trường (TMS) trị trầm cảm tại Trung tâm Y
                  khoa Vạn Hạnh
                </div>
              </div>
              <div className="section-customize section-handbook">
                <div className="img">
                  <img src={camnang} />
                </div>
                <div className="desc desc-handbook">
                  5 Prestigious porcelain dental crown addresses in Ho Chi Minh
                  City
                </div>
              </div>
              <div className="section-customize section-handbook">
                <div className="img">
                  <img src={camnang} />
                </div>
                <div className="desc desc-handbook">
                  Review Nha khoa Hoa Hồng Phương Đông: Tại sao thu hút khách
                  hàng nước ngoài, Việt kiều?{" "}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
