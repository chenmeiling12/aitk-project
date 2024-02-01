import {
  Button,
  Checkbox,
  CheckboxProps,
  Col,
  ConfigProvider,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
} from "antd";
import { useState } from "react";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 20 },
};

const tailLayout = {
  wrapperCol: { offset: 30, span: 16 },
};

export const Eitd = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChangeCheckbox: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Row>
          <Col span={12}>
            <Form.Item name="name" label="角色名稱" style={{ width: 200 }}>
              <Input style={{ width: 250 }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="isUser" label="是否啟用">
              <Radio.Group onChange={onChange} value={value} defaultValue={1}>
                <Radio value={1}>啟用</Radio>
                <Radio value={2}>禁用</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item name="power" label="擁有權限" style={{ width: 200 }}>
              <Radio value={2}>全選</Radio>
              <div>
                <span>數據權限</span>
                <div className="p-px border">
                  <div className="border-b">
                    <span>分類權限</span>
                    <Checkbox onChange={onChangeCheckbox}>全選</Checkbox>
                  </div>
                  <div></div>
                </div>
              </div>
            </Form.Item>
          </Col>
          <Col span={8} offset={4}>
            <Form.Item name="operate" label="權限操作">
              <Radio.Group onChange={onChange} value={value} defaultValue={1}>
                <Radio value={1}>可編輯</Radio>
                <Radio value={2}>僅瀏覽</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="manList" label="人員名單" style={{ width: 200 }}>
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="bg-[#1677ff]">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
