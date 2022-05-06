import * as React from 'react'
import { Table, Tag, Form, Input, Button, Select } from 'antd';
import { findRhttp } from "@/http/api"
import "./who.scss"
const { Option } = Select;

interface WhoProps {

}

const getRstatus = (item: number) => {
    switch (item.toString().substr(0, 1)) {
        case "1":
            return <Tag color="#55acee">{item}</Tag>
            break;
        case "2":
            return <Tag color="#87d068">{item}</Tag>
            break;
        case "3":
            return <Tag color="#2db7f5">{item}</Tag>
            break;
        case "4":
            return <Tag color="gray">{item}</Tag>
            break;
        default:
            return <Tag color="#f50">{item}</Tag>
    }
}
const getRmethod = (item: string) => {
    switch (item) {
        case "POST":
            return <Tag color="green">{item}</Tag>
            break;
        case "GET":
            return <Tag color="purple">{item}</Tag>
            break;
        case "DELETE":
            return <Tag color="blue">{item}</Tag>
            break;
        case "PUT":
            return <Tag color="magenta">{item}</Tag>
            break;
        default:
            return <Tag color="orange">{item}</Tag>
    }
}

const columns = [
    {
        title: 'id',
        dataIndex: 'r_id',

    },
    {
        title: '操作员',
        dataIndex: 'r_name',
    },
    {
        title: '请求方式',
        render: (item: any) => (
            getRmethod(item.r_method)
        )
    },
    {
        title: '路径',
        dataIndex: 'r_url',
    },
    {
        title: '状态码',
        render: (item: any) => (
            getRstatus(item.r_status)

        )
    },
    {
        title: '权限',
        dataIndex: 'adminid',
    },
    {
        title: '时间',
        dataIndex: 'r_time',
    },

];
const method = [
    "GET", "POST", "DELETE", "PUT", "PATCH"
]
const status = [
    100, 200, 300, 400, 500
]
const Who: React.FC<WhoProps> = (): React.ReactElement => {
    const [data, setData] = React.useState([])
    const [pagination, setPagination] = React.useState({
        current: 1,
        pageSize: 10
    })
    const [loading, setLoading] = React.useState(false)
    const [condition, setCondition] = React.useState({ username: "", method: "", status: "" })

    const handleTableChange = (pagination: any, filters: any, sorter: any) => {
        console.log("🐱‍🏍 => file: who.tsx => line 97 => handleTableChange => pagination", pagination)

        fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        })
    }

    const fetch = (params: any) => {
        setLoading(true);
        console.log(params.pagination)
        console.log({ ...params.pagination, ...condition })

        findRhttp({ ...params.pagination })
            .then((res: any) => {
                console.log(res)
                setLoading(false)
                setData(res.data.data)
                setPagination({ ...params.pagination, total: res.data.count })
            })
    }
    const onFinish = (values: any) => {
        console.log('Success:', values.method);
        setCondition({
            username: values.username,
            method: values.method, status: values.status
        })
        let obj = {
            "pagination": {
                username: values.username,
                method: values.method, status: values.status
            }
        }
        fetch(obj)

    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    React.useEffect(() => {
        fetch(pagination)
    }, [])

    return (
        <>
            <div className="r_box">
                <div className="r_box_form">
                    <Form
                        name="basic"
                        wrapperCol={{ span: 18 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="操作员"
                            name="username"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="请求方式">
                            <Input.Group compact>
                                <Form.Item
                                    name={['method']}
                                >
                                    <Select placeholder="请求方式">
                                        {method.map((item: string) => {
                                            return <Option value={item} key={item}>{item}</Option>
                                        })}
                                    </Select>
                                </Form.Item>
                            </Input.Group>
                        </Form.Item>
                        <Form.Item label="状态码">
                            <Input.Group compact>
                                <Form.Item
                                    name={['status']}
                                >
                                    <Select placeholder="状态码">
                                        {status.map((item: number) => {
                                            return <Option value={item} key={item}>{item}</Option>
                                        })}
                                    </Select>
                                </Form.Item>
                            </Input.Group>
                        </Form.Item>
                        <Form.Item className='btn'>
                            <Button type="primary" htmlType="submit" >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <Table
                    columns={columns}
                    rowKey={(record: any) => record.r_id}
                    dataSource={data}
                    pagination={pagination}
                    loading={loading}
                    onChange={handleTableChange}
                />
            </div>
        </>
    )
}

export default Who