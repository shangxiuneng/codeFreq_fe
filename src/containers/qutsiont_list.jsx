import React, {useEffect, useState} from 'react';
import { Space, Table, Tag } from 'antd';
import axios from "axios";


const columns = [
    {
        title: '状态',
        dataIndex: 'status',
        key:'status'
    },
    {
        title: '题目名称',
        dataIndex: 'question_name',
        key:'question_name',
    },
    {
        title: '难度',
        dataIndex: 'difficult',
        key:'difficult',
    },
    {
        title: '最近考察时间',
        dataIndex: 'last_review',
        key:'last_review',
    },
    {
        title: '频度',
        dataIndex: 'freq',
        key:'freq',
    },
    {
        title: '掌握度',
        dataIndex: "mastery",
        key:'mastery',
    },
    {
        title: '标签',
        dataIndex: 'tags',
        key:'tags'
    },
];

const QuestionList = () => {

    const [data, setData] = useState([]);

    // 发送http请求 从后端获取相应的数据 并支持翻页
    useEffect(() => {
        axios.get('http://127.0.0.1:8888/question_list?page=1&size=20')
            .then(response => {

                // const fetchedData = response.data.map((item, index) => {
                //     return {
                //         question_name:item.title,
                //         key: index.toString() // 为每个数据项添加唯一的key
                //     }
                // });

                const fetchedData = response.data.data.list.map((item,index) => {
                    return {
                        question_name:item.front_question_id.toString() + "." + item.title ,
                        difficult:item.difficulty.toString(),
                        last_review:item.last_reviewed_at,
                        freq:item.freq,
                        tags:item.tags,
                        key:index.toString(),
                    }
                })

                // 更新表格的数据
                setData(fetchedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return <Table columns={columns} dataSource={data} />;
}
export default QuestionList;