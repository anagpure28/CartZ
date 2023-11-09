import React from "react";
import CountUp from "react-countup";
import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from "antd";
const formatter = (value) => <CountUp end={value} separator="," />;
const CountUpNumber = () => (
  <Row
    gutter={16}
    style={{ padding: "20px", marginBottom: "50px" }}
  >
    <Col span={8}>
      <Statistic title="Active Users" value={56650} formatter={formatter} />
    </Col>
    <Col span={8}>
      <Statistic
        title="Account Balance (CNY)"
        value={839330}
        precision={2}
        formatter={formatter}
      />
    </Col>
    <Col span={8}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} formatter={formatter} />
    </Col>
  </Row>
);
export default CountUpNumber;
