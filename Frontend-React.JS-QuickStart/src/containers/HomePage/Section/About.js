import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about">Truyền thông nói gì về BookingCare</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="90%"
              height="321px"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Nhiều nghiên cứu chỉ ra rằng những phúc lợi liên quan đến sức khỏe
              là thứ được nhiều người lao động coi trọng nhất. Việc đầu tư vào
              chăm sóc sức khỏe cho nhân viên có thể cải thiện lợi thế cạnh
              tranh của doanh nghiệp về nhân sự.
            </p>
            <p>
              Việc đầu tư vào chăm sóc sức khỏe cho nhân viên giúp doanh nghiệp
              cải thiện lợi thế cạnh tranh của doanh nghiệp về nhân sự, bao gồm
              gia tăng mong muốn gắn bó và hiệu suất làm việc của nhân viên,
              đồng thời quảng bá hình ảnh doanh nghiệp trong mắt những ứng viên
              tiềm năng.
            </p>
            <p>
              Chăm sóc sức khỏe nguồn nhân lực cần quan tâm tới cả thể chất và
              tinh thần cho nhân viên. Điều này không chỉ thể hiện trách nhiệm,
              sự quan tâm của doanh nghiệp mà còn góp phần vì sự phát triển của
              công ty bởi nhân viên khỏe, công ty mạnh. Nhằm đáp ứng yêu cầu
              riêng của từng doanh nghiệp, BookingCare ra mắt dịch vụ gói khám
              sức khỏe doanh nghiệp hỗ trợ các công ty chăm sóc sức khỏe nhân
              viên của mình.
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
