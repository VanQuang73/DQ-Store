import { Col, Row } from 'antd';
import React from 'react';
import './index.scss';

// fn: hiển thị danh sách thương hiệu
function showBrandList(list) {
  return list.map((item, index) => (
    <Col span={12} md={6} key={index}>
      <div className="brand-item t-center">
        <a href={item.link} target="blank">
          <img className="bor-rad-8" width="100%" src={item.src} alt="Photo" />
        </a>
        <h4 className="font-size-18px">{item.title}</h4>
        <span className="font-size-16px">{item.desc}</span>
      </div>
    </Col>
  ));
}

// danh sách thương hiệu
const list = [
  {
    link: 'https://www.asus.com/',
    src:
      'https://res.cloudinary.com/dgeblvtrm/image/upload/v1659810889/DQ%20Store/Brand/asus_k4yray.webp',
    title: 'ASUS',
    desc: 'Đậm chất Gaming',
  },
  {
    link: 'https://www8.hp.com/us/en/home.html',
    src:
      'https://res.cloudinary.com/dgeblvtrm/image/upload/v1659810890/DQ%20Store/Brand/hp_ksygep.webp',
    title: 'HP',
    desc: 'Laptop cho doanh nhân',
  },
  {
    link: 'https://www.lenovo.com/vn/vn/',
    src:
      'https://res.cloudinary.com/dgeblvtrm/image/upload/v1659810890/DQ%20Store/Brand/lenovo_pkf4od.webp',
    title: 'LENOVO',
    desc: 'Siêu ưu đãi cùng với LENOVO',
  },
  {
    link: 'https://www.microsoft.com/',
    src:
      'https://res.cloudinary.com/dgeblvtrm/image/upload/v1659810890/DQ%20Store/Brand/MS_k1dq7g.webp',
    title: 'Microsoft',
    desc: 'Sản phẩm siêu chất lượng',
  },
];

// rendering ...
function FamousBrand() {
  return (
    <div className="p-16 Famous-Brand">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2 className="font-weight-700">Thương hiệu nổi bật</h2>
          <div className="underline-title"></div>
        </Col>
        {showBrandList(list)}
      </Row>
    </div>
  );
}

export default FamousBrand;
