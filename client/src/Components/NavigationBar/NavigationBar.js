import React, { useState } from "react"


import 'antd/dist/antd.min.css'
import './NavigationBar.css'
// import 'antd/dist/antd.css' does`t work 



import { Menu } from 'antd';
import { MailOutlined, HomeOutlined, SettingOutlined, FieldTimeOutlined, LoginOutlined, LogoutOutlined, ApiOutlined } from '@ant-design/icons';

const items = [
    {
        label: 'Home page',
        key: 'home-page',
        icon: <HomeOutlined />,
    },
    {
        label: 'About us',
        key: 'setings',
        icon: <SettingOutlined />,
    },
    {
        label: 'Contact us',
        key: 'mail',
        icon: <MailOutlined />,
    },

    {
        label: 'Book Appointment',
        key: 'appointment',
        icon: <FieldTimeOutlined />,
    },

    {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {
        label: 'Login',
        key: 'login',
        icon: <LoginOutlined />,
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: <LogoutOutlined />,
    },
    {
        label: 'Sign in',
        key: 'Sign-in',
        icon: <ApiOutlined />,
    },

];

const itemsMenuThree = [{
    label: 'Home page',
    key: 'home-page',
    icon: <HomeOutlined />,
},
{
    label: 'About us',
    key: 'setings',
    icon: <SettingOutlined />,
},
{
    label: 'Contact us',
    key: 'mail',
    icon: <MailOutlined />,
},

{
    label: 'Book Appointment',
    key: 'appointment',
    icon: <FieldTimeOutlined />,
},];


const itemsMenuTwo = [
    {
        label: 'Login',
        key: 'login',
        icon: <LoginOutlined />,
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: <LogoutOutlined />,
    },
    {
        label: 'Sign in',
        key: 'Sign-in',
        icon: <ApiOutlined />,
    },
];

const NavigationBar = () => {

    const [current, setCurrent] = useState();

    const onClick = (e) => {
        console.log('clicked ', e);
        setCurrent(e.key);
    };

    return (

        <div className="navigation-bar">
            <div className="menuOne">
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
            </div>
            <div className="dvete" style={{ display: 'inline-flex' }}>
                <div className="menuThree">
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={itemsMenuThree} />;
                </div>
                <div className="menuTwo">
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={itemsMenuTwo} />;
                </div>


            </div>
        </div>
    )


}


export default NavigationBar