import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const DropdownInput = () => {
    const [value, setValue] = useState('');

    const handleChange = (value) => {
        setValue(value);
    };

    return (
        <div  style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <div>
                公司
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placement='公司'
                    allowClear
                >
                    <Option value="bytedance">字节跳动</Option>
                    <Option value="tencent">腾讯</Option>
                    <Option value="baidu">百度</Option>
                </Select>
            </div>
            <div>
                难度
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placement='难度'
                    allowClear
                    mode="multiple"
                >
                    <Option value="easy">容易</Option>
                    <Option value="middle">中等</Option>
                    <Option value="hard">困难</Option>
                </Select>
            </div>
            <div>
                状态:
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placement='公司'
                    allowClear
                >
                    <Option value="1">已做</Option>
                    <Option value="-1">未做</Option>
                </Select>
            </div>
            <div>
                题集:
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placement='题集'
                    allowClear
                >
                    <Option value="1">⭐️</Option>
                    <Option value="2">⭐️⭐️</Option>
                    <Option value="3">⭐️⭐️⭐️</Option>
                    <Option value="4">剑指offer</Option>
                </Select>
            </div>
            <div>
                标签:
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placement='标签'
                    allowClear
                >
                    <Option value="dp">动态规划</Option>
                    <Option value="hash">哈希</Option>
                    <Option value="array">数组</Option>
                </Select>
            </div>
        </div>
    );
};

export default DropdownInput;
