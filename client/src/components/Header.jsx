import React, { Component } from 'react'
import { Layout, Affix, Button, Menu } from 'antd'
import {
	MailOutlined,
	AppstoreOutlined,
  SettingOutlined,
  PictureOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Content, Footer } = Layout;

export default class MainHeader extends Component {
	render() {
		return (
			<div className='Header-Container'>
				<Header className='Site-Header' style={{ position: 'fixed', width: '100%' }}>
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="horizontal" className="Site-Header-Menu" defaultSelectedKeys={['2']} getPopupContainer={node => node.parentNode}>
            {/*getPopupContainer submenu scroll bug https://github.com/ant-design/ant-design/issues/10145*/}
            <Menu.Item key="1" className='Header-Menu-Item'>nav 1</Menu.Item>
            <Menu.Item key="2" className='Header-Menu-Item'>nav 2</Menu.Item>
            <Menu.Item key="3" className='Header-Menu-Item'>nav 3</Menu.Item>
            <SubMenu
              icon={<SettingOutlined />}
              title='Projects'
              className='Header-Menu-Item'
            >
              <Menu.ItemGroup title='Item 1'>
                <Menu.Item key='setting:1'>Option 1</Menu.Item>
                <Menu.Item key='setting:2'>Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title='Item 2'>
                <Menu.Item key='setting:3'>Option 3</Menu.Item>
                <Menu.Item key='setting:4'>Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              icon={<PictureOutlined />}
              title='Photos'
              className='Header-Menu-Item'
            >
              <Menu.Item key='photo:1'>Option 1</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
			</div>
		)
	}
}
