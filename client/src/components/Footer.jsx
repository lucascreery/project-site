import React, { Component } from 'react'
import { Layout, Button, Row, Col, Divider } from 'antd'
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from '@ant-design/icons'

const { Footer } = Layout

class MainFooter extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    // this.getTestData();
    // this.populateMenuItems()
  }

  render() {
    return (
      <div className='Footer-Container'>
        <Divider />
        <Footer className="Footer-Component">
          <Row justify='space-between' gutter={[0,0]}>
            <Col xs={10} sm={12} md={15} lg={20} xl={20}>Lucas Creery</Col>
            <Col>
            <a href="http://github.com/lucascreery">
              <Button type="text" icon={<LinkedinOutlined />}></Button>
            </a>
            </Col>
            <Col>
            <a href="http://www.linkedin.com/in/lucas-creery">
              <Button type="text" icon={<GithubOutlined />}></Button>
            </a>
            </Col>
            <Col>
            <a href="https://www.instagram.com/lucas_creery/">
              <Button type="text" icon={<InstagramOutlined />}></Button>
            </a>
            </Col>
          </Row>
        </Footer>
      </div>
    )
  }
}

export default MainFooter
