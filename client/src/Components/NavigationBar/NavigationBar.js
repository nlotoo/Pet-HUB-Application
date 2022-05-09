import React, { useState } from "react"


import 'antd/dist/antd.min.css'
import './NavigationBar.css'
// import 'antd/dist/antd.css' does`t work 



import { Menu } from 'antd';
import { MailOutlined, HomeOutlined, FireOutlined, SettingOutlined, FieldTimeOutlined, LoginOutlined, LogoutOutlined, ApiOutlined } from '@ant-design/icons';

const items = [
    {
        label: 'Home page',
        key: 'home-page',
        icon: <HomeOutlined />,
    },
    {
        label: 'Book Appointment',
        key: 'appointment',
        icon: <FieldTimeOutlined />,
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


    // image site banner
    { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, icon: <FireOutlined />, },
    { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, }, { disabled: true, },
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
        </div>
    )


}


export default NavigationBar