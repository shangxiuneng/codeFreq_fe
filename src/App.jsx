import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import QuestionList from "./containers/qutsiont_list";
import { Input } from 'antd';
import DropdownInput from "./containers/query";
const items = [
    {
        label: '首页',
        key: 'home',
        //icon: <MailOutlined />,
    },
    {
        label: '更新',
        key: 'update',
        //icon: <AppstoreOutlined />,
    },
    {
        label: '关于',
        key: 'about',
        //icon: <SettingOutlined />,
    },
];

const App = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <div>
        <DropdownInput></DropdownInput>
        <QuestionList></QuestionList>
    </div>;

};
export default App;

