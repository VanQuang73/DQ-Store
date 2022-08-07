import { BackTop, Col, Row } from 'antd';
import Filter from 'components/Filter';
import RelatedProduct from 'containers/ProductDetailPage/RelatedProduct';
import React from 'react';
import AllProduct from './AllProduct';
import DiscountList from './DiscountList';
import FamousBrand from './FamousBrand';
import './index.scss';
import Banner from './Banner';

function HomePage() {
  // kéo về đầu trang
  document.querySelector('body').scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  return (
    <div className="Home">
      {/* Carousel cho Banner */}
      <div className="pos-relative">
        <Banner />
        <div className="filter-wrapper trans-center container w-100 h-80">
          <Filter />
        </div>
      </div>

      <Row className="container">
        {/* Danh sách sản phẩm khuyến mãi */}
        <Col className="m-tb-32" span={24}>
          <DiscountList />
        </Col>

        <Col span={24} className="adv box-sha-home bor-rad-8 m-b-32">
          <a href="https://www.apple.com/watch/" target="blank">
            <img
              className="adv-img w-100 bor-rad-8"
              src="https://res.cloudinary.com/dgeblvtrm/image/upload/v1659811655/DQ%20Store/ads/applewatch_da606u.jpg"
            />
          </a>
        </Col>

        {/* Thương hiệu nổi bật */}
        <Col span={24} className="m-b-32 bg-white box-sha-home bor-rad-8">
          <FamousBrand />
        </Col>

        {/* Sản phẩm bán chạy */}
        <Col span={24} className="m-b-32 hot-products box-sha-home bor-rad-8">
          <RelatedProduct title="Sản phẩm bán chạy" type={0} />
        </Col>

        <Col span={24} className="adv box-sha-home bor-rad-8 m-b-32">
          <a href="https://rog.asus.com/vn/" target="blank">
            <img
              className="adv-img w-100 bor-rad-8"
              src="https://res.cloudinary.com/dgeblvtrm/image/upload/v1659811655/DQ%20Store/ads/asus_lrs1un.jpg"
            />
          </a>
        </Col>

        {/* Tổng hợp sản phẩm */}
        <Col span={24} className="m-b-32 bg-white box-sha-home bor-rad-8">
          <AllProduct />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
