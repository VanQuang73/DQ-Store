import {
  FacebookFilled,
  GooglePlusSquareFilled,
  LinkedinFilled,
  PhoneOutlined,
  TwitterSquareFilled,
} from '@ant-design/icons';
import iconPhoneFooter from 'assets/imgs/icon-phone-footer.png';
import registeredImg from 'assets/imgs/registered.png';
import React from 'react';
import './index.scss';
function FooterView() {
  return (
    <div className="container-fluid bg-white footer p-lr-0" id="footer">
      <p className="t-center namecontainer" style={{ color: '#888' }}>
        <span className="font-size-18px company-name">
          CÔNG TY CỔ PHẦN THƯƠNG MẠI - DỊCH VỤ DQ STORE
        </span>
      </p>
      {/* Liên hệ */}
      <div class="container info-footer">
        <div class="support">
          <div class="info-title">Hỗ trợ khách hàng</div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Thẻ ưu đãi
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Trung tâm bảo hành
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Thanh toán và giao hàng
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Dịch vụ sửa chữa và bảo trì
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Doanh nghiệp thân thiết
          </a>
        </div>
        <div class="policy">
          <div class="info-title">Chính sách Mua hàng và Bảo hành</div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Quy định chung
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Chính sách Bảo mật Thông tin
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Chính sách Vận chuyển và Lắp đặt
          </a>
          <a href="#" class="footer-link-text">
            {' '}
            Chính sách bảo hành
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Chính sách đổi trả và hoàn tiền
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Quy định giá cả và hình thức thanh toán
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Chính sách trả góp
          </a>
        </div>
        <div class="classic-info">
          <div class="info-title">Thông tin DQ Store</div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Giới thiệu
          </a>
          <a href="#" class="footer-link-text">
            {' '}
            Thông tin liên hệ
          </a>
          <a href="#" class="footer-link-text">
            {' '}
            Hệ thống Showroom
          </a>
          <a href="#" class="footer-link-text">
            {' '}
            Hỏi đáp
          </a>
          <a href="#" class="footer-link-text">
            {' '}
            Tin công nghệ
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link-text">
            Tuyển dụng
          </a>
        </div>
      </div>

      {/* Thông tin chi tiết */}
      <div className="container p-tb-32">
        <div className="footer-address footer-grid">
          <div className="contact-left">
            <strong>Hà Nội:</strong>&nbsp;Tầng 6, Số 1 Phố Thái Hà, Phường Trung
            Liệt, Quận Đống Đa, Hà Nội
            <br />
            <strong>Tp.Hồ Chí Minh:</strong>&nbsp; Tầng 11 Minh Long Tower, số
            17 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh
          </div>
          <div className="contact-middle">
            <strong>Điện&nbsp;thoại:</strong>&nbsp;1800.68.xx
            <br />
            <strong>Email:</strong>&nbsp;dq.store@gmail.com&nbsp;
            <br />
            <strong>Website:</strong>&nbsp;<a href="/">dqstore.vn</a>
          </div>
          <div className="d-flex footer-grid footer-social contact-right">
            <div className="d-flex">
              <a href="https://fb.com" target="blank">
                <FacebookFilled
                  className="p-lr-4 social-item"
                  style={{ fontSize: 36, color: '#0C86EF' }}
                />
              </a>
              <a href="https://www.linkedin.com/">
                <LinkedinFilled
                  className="p-lr-4 social-item"
                  style={{ fontSize: 36, color: '#0073B1' }}
                />
              </a>
              <a href="https://mail.google.com" target="blank">
                {' '}
                <GooglePlusSquareFilled
                  className="p-lr-4 social-item"
                  style={{ fontSize: 36, color: '#DB5247' }}
                />
              </a>

              <a href="https://twitter.com/" target="blank">
                <TwitterSquareFilled
                  className="p-lr-4 social-item"
                  style={{ fontSize: 36, color: '#55ACEF' }}
                />
              </a>
            </div>
            <div>
              <img src={registeredImg} width={175} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright &copy; Duong & Quang | All right reserved
      </div>
    </div>
  );
}

export default FooterView;
