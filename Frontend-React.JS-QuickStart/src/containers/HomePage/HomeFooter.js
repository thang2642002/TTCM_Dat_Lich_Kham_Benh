import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/logo.svg.svg";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <div className="container">
          <div className="row">
            <div className="introduce col-lg-4">
              <div className="logo">
                <img src={logo} />
              </div>

              <div className="general-introduction">
                <span>Công ty Cổ phần Công nghệ BookingCare</span>
                <p className="address">
                  Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận
                  Cầu Giấy, Thành phố Hà Nội, Việt Nam
                </p>
                <p> ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</p>
              </div>
            </div>
            <div className="information col-lg-4">
              <ul>
                <li>
                  <a href="#">Liên hệ hợp tác</a>
                </li>
                <li>
                  <a href="#">Sức khỏe doanh nghiệp</a>
                </li>
                <li>
                  <a href="#">Tuyển dụng</a>
                </li>
                <li>
                  <a href="#">Điều khoản sử dụng</a>
                </li>
                <li>
                  <a href="#">Chính sách Bảo mật</a>
                </li>
                <li>
                  <a href="#">Quy trình hỗ trợ giải quyết khiếu nại</a>
                </li>
              </ul>
            </div>
            <div className="support col-lg-4">
              <div className="support-address">
                <span>Trụ sở tại Hà Nội</span>
                <p>
                  Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận
                  Cầu Giấy, Thành phố Hà Nội, Việt Nam
                </p>
              </div>
              <div className="support-address">
                <span>Văn phòng tại TP Hồ Chí Minh</span>
                <p>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
              </div>
              <div className="support-address">
                <span>Hỗ trợ khách hàng</span>
                <p>support@bookingcare.vn (7h30 - 18h)</p>
              </div>
              <div className="support-address">
                <span>Hotline</span>
                <p>
                  <span className="phonenumber">024-7301-2468</span> (7h30 -
                  18h)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="end-footer">
          <span>&copy; 2023 BookingCare.com</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
