import {
  useState,
  useEffect,
  FC,
  ReactElement,
  MouseEventHandler,
} from "react";

import "./index.scss";
import { findId, findAll } from "../../http/api";
import {
  Table,
  Button,
  Space,
  Tag,
  Popconfirm,
  message,
  Drawer,
  Form,
  Input
} from "antd";
const { Search } = Input;
interface IndexProps {
  // onClick ?:event: MouseEvent<HTMLDivElement>||undefined,
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  name: string | number | (string | number)[];
  value?: any
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
  gender?: string;

}

const Index: FC<IndexProps> = ({ onClick, children }): ReactElement => {
  const [fields, setFields] = useState<IndexProps[]>([]);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [valueS, setValueS] = useState("")
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  })
  const [loading, setloading] = useState(false)


  useEffect(() => {
    getList();
  }, []);

  const showDrawer = ({ name, gender }: IndexProps) => {
    setVisible(true);
    setFields([
      { name: ["username"], value: name },
      { name: ["password"], value: gender },
    ]);
  };

  const onClose = () => {
    //..
    setVisible(false);
  };
  const onFinish = (values: any) => {
    //..
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    //..
    console.log("Failed:", errorInfo);
  };
  const confirm = (e: Event): void => {
    //..
    console.log("🐱‍🏍 => file: index.tsx => line 19 => confirm => e", e);
    message.success("Click on Yes", 1);
  };

  const showEdit = (type: any) => {
    //..
    setVisible(true);
    console.log(type);
    console.log("🐱‍🏍 => file: index.tsx => line 51 => showEdit => type", type);
  };
  const onSelectChange = (selectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const onSearch = () => {
    console.log("onSearch")
    console.log(valueS)
    if (valueS !== "") {
      console.log(true)
    }
    return
  }
  const getV = (e: any) => {
    console.log(e.target.value)
    setValueS(e.target.value)
  }



  const getList = () => {
    // findAll().then((res: any) => {
    //   console.log(res.data)
    //   setData(res.data)
    // })
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: i,
        name: `Edward King ${i}`,
        gender: `London, Park Lane no. ${i}`,
      });
    }
    setData([...data])
    // setData([
    //   {
    //     id: 1,
    //     name: "zs",
    //     gender: "ss",
    //   },
    //   {
    //     id: 2,
    //     name: "李四",
    //     gender: "李si1",
    //   },
    // ]);
  };
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
  const fetch = (params: any) => {
    setloading(true)

    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: i,
        name: `Edward King ${i}`,
        gender: `London, Park Lane no. ${i}`,
      });
    }
    setData([...data])
    setloading(false)
    setPagination({
      ...params.pagination,
      total: 100,
      // 200 is mock data, you should read it from server
      // total: data.totalCount,
    })
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      tags: ["nice", "developer"],
    },
    {
      title: "Age",
      dataIndex: "gender",
      tags: ["nice", "developer"],
    },
    {
      title: "Address",
      dataIndex: "avatar",
      tags: ["nice", "developer"],
    },
    {
      title: "Action",
      key: "action",
      render: (item: any) => (
        <Space size="middle">
          <a onClick={showDrawer.bind(this, item)}>编辑</a>
          <Popconfirm
            title="确定删除?"
            onConfirm={confirm.bind(this, item.id)}
            okText="Yes"
            cancelText="No"
          >
            <a href="#" style={{ color: "red" }}>
              删除
            </a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="all">
      <div className="btn">
        <Search placeholder="input search loading with enterButton"
          // value={valueS}
          onChange={getV}
          loading={false}
          onSearch={onSearch}
          enterButton />
        <Button type="primary" danger>
          批量删除
        </Button>
        <Button onClick={showEdit.bind(this, "add")}>添加用户</Button>
      </div>
      {/* 表格 */}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        rowKey={(res: any) => res.id}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
      {/* 表单 */}
      <Drawer
        title="编辑信息"
        placement={"right"}
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>撤销</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <Form
          name="basic"
          fields={fields}
          labelCol={{ span: 8 }}
          labelAlign="left"
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            labelAlign="left"
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input style={{ marginLeft: "-60px" }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password style={{ marginLeft: "-60px" }} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Index;
