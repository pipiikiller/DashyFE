import { UserOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import Meta from "antd/es/card/Meta";

export function UserDetailPage() {
  return (
    <div
      className="userDetailsContent"
      style={{
        //   display: "flex",
        //   justifyContent: "flex-start",
        paddingLeft: 30,
        paddingTop: 30,
      }}
    >
      <Row gutter={8}>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Jessica Snow" description="6e15549477283" />
          </Card>
        </Col>
        <Col span={16}>
          <Card title="Client Details" bordered={false}>
            <Row>
              <Col span={8}> Username</Col>
              <Col span={8}> Email</Col>
              <Col span={8}> DOB</Col>
              <Col span={8}> DOB</Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

{
  /* <Space direction="vertical">
        <Card
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div>Test1</div>
          <div>Test2</div>
          {/* <Space direction="horizontal">
            <UserOutlined />
            <small>Username:</small>
          </Space>
          <Typography.Text>Win</Typography.Text>
          <Space direction="horizontal">
            <small>Email:</small>
          </Space>
          <Typography.Text>Win@WinLtd.com</Typography.Text> */
}
//   </Card>
//   <Card>
//     <Space direction="horizontal">
//       <small>Email</small>
//     </Space>
//     <Typography.Text>Win@WinLtd.com</Typography.Text>
//   </Card>

//   <Card>
//     <Space direction="horizontal">
//       <small>DOB</small>
//     </Space>
//     <Typography.Text>14/11/1973</Typography.Text>
//   </Card>
// </Space> */}
