import React, { useState, useEffect } from "react";
import styles from "./Apply.module.scss";
import {
  Row,
  Button,
  Space,
  Input,
  Divider,
  Radio,
  Table,
  Modal,
  Form,
  Select,
  DatePicker,
  message,
} from "antd";
import type { RadioChangeEvent } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import type { RootState } from "../../store";
import _ from "lodash";
import "dayjs/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import dayjs from "dayjs";

interface FormInfos {
  approvername: string;
  note: string;
  reason: string;
  time: [string, string];
}

const approverTypes = [
  { label: "全部", value: "全部" },
  { label: "待审批", value: "待审批" },
  { label: "已通过", value: "已通过" },
  { label: "未通过", value: "未通过" },
];
const defaultType = approverTypes[0].value;

export default function Apply() {
  const [approverType, setApproverType] = useState(defaultType);
  const [searchWord, setSearchWord] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const usersInfos = useSelector((state: RootState) => state.users.infos);

  const dispatch = useAppDispatch();

  const approverTypeChange = (ev: RadioChangeEvent) => {
    setApproverType(ev.target.value);
  };
  const searchWordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(ev.target.value);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    handleReset();
  };
  const onFinish = (values: FormInfos) => {
    values.time[0] = dayjs(values.time[0]).format("YYYY-MM-DD hh:mm:ss");
    values.time[1] = dayjs(values.time[1]).format("YYYY-MM-DD hh:mm:ss");
    const applyList = {
      ...values,
      applicantid: usersInfos._id as string,
      applicantname: usersInfos.name as string,
      approverid:
        Array.isArray(usersInfos.approver) &&
        usersInfos.approver.find((item) => item.name === values.approvername)
          ._id,
    };
  };
  const onFinishFailed = ({ values }: { values: FormInfos }) => {
    console.log("Failed:", values);
  };
  const handleReset = () => {
    form.resetFields();
  };
  return (
    <div>
      <Row className={styles["apply-title"]} justify="space-between">
        <Button type="primary" onClick={showModal}>
          添加审批
        </Button>
        <Space>
          <Input
            placeholder="请输入搜索关键词"
            value={searchWord}
            onChange={searchWordChange}
          />
          <Button type="primary" icon={<SearchOutlined />}>
            搜索
          </Button>
          <Divider style={{ borderLeftColor: "#dcdfe6" }} type="vertical" />
          <Radio.Group
            options={approverTypes}
            optionType="button"
            buttonStyle="solid"
            value={approverType}
            onChange={approverTypeChange}
          />
        </Space>
      </Row>
      <Table
        rowKey="_id"
        className={styles["apply-table"]}
        bordered
        size="small"
        pagination={{ defaultPageSize: 5 }}
      />
      <Modal
        title="添加审批"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles["apply-form"]}
          form={form}
        >
          <Form.Item
            label="审批人"
            name="approvername"
            rules={[{ required: true, message: "请选择审批人" }]}
          >
            <Select placeholder="请选择审批人" allowClear>
              {Array.isArray(usersInfos.approver) &&
                usersInfos.approver.map((item) => (
                  <Select.Option key={item._id} value={item.name}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="审批事由"
            name="reason"
            rules={[{ required: true, message: "请选择审批事由" }]}
          >
            <Select placeholder="请选择审批事由" allowClear>
              <Select.Option value="年假">年假</Select.Option>
              <Select.Option value="事假">事假</Select.Option>
              <Select.Option value="病假">病假</Select.Option>
              <Select.Option value="外出">外出</Select.Option>
              <Select.Option value="补签卡">补签卡</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="时间"
            name="time"
            rules={[{ required: true, message: "请选择审批时间" }]}
          >
            <DatePicker.RangePicker showTime locale={locale} />
          </Form.Item>
          <Form.Item
            label="备注"
            name="note"
            rules={[{ required: true, message: "请输入备注" }]}
          >
            <Input.TextArea rows={4} placeholder="请输入备注" />
          </Form.Item>
          <Row justify="end">
            <Space>
              <Button onClick={handleReset}>重置</Button>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Space>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}
