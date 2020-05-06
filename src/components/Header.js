import React from 'react'
import { Layout, Menu,  Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
export default function HeaderComponent() {
    return (
        <Layout>
        <Header className="header">
            <Row>
                <Col span={10}> <div><Link to="/">Bir Kelime Bir İşlem</Link></div></Col>
                <Col span={14} style={{textAlign:"right"}}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to="/">Anasayfa</Link></Menu.Item>
                    </Menu>
                </Col>
            </Row>
            
           
        </Header>
    </Layout>
    )
}
