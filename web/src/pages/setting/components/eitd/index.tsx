import { Button, Checkbox, Col, Form, Input, Modal, Radio, Row } from "antd";
import { FiSearch } from "react-icons/fi";
import { PlusOutlined } from "@ant-design/icons";
import { useAction } from "./hook";

export const Eitd = ({ setIsEitd }: { setIsEitd: (bool: boolean) => void }) => {
  const [form] = Form.useForm();

  const {
    isUser,
    onIsUse,
    isLook,
    onIsLook,
    onFinish,
    CheckboxGroup,
    plainOptions,
    checkedList,
    checkAll,
    onClassifyPower,
    onCheckAll,
    addMan,
    setAddMan,
  } = useAction();

  return (
    <div>
      <Form form={form} name="eitd" onFinish={onFinish}>
        <Row>
          <Col span={12}>
            <Form.Item name="name" label="角色名稱" style={{ width: 200 }}>
              <Input style={{ width: 250 }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="isUser" label="是否啟用">
              <Radio.Group onChange={onIsUse} value={isUser}>
                <Radio value={1}>啟用</Radio>
                <Radio value={2}>禁用</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item name="power" label="擁有權限">
              <div>
                <Radio value={1}>全選</Radio>
                <div className="flex">
                  <div className="pt-2">
                    <div className="w-16 mr-5">數據權限</div>
                  </div>
                  <div className="p-2 border">
                    <div className="border-b-2 w-48">
                      <span className="mr-4">分類權限</span>
                      <Checkbox onChange={onCheckAll} checked={checkAll}>
                        全選
                      </Checkbox>
                    </div>
                    <div className="w-64">
                      <CheckboxGroup
                        options={plainOptions}
                        value={checkedList}
                        onChange={onClassifyPower}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Form.Item>
          </Col>
          <Col span={8} offset={8}>
            <Form.Item name="operate" label="權限操作">
              <Radio.Group onChange={onIsLook} value={isLook}>
                <Radio value={1}>可編輯</Radio>
                <Radio value={2}>僅瀏覽</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="manList" label="人員名單" style={{ width: 200 }}>
          <div className="flex">
            <div className="border mr-4">
              <div className="pt-1 pl-2 pb-6 pr-24">
                <div>ABC.D</div>
                <div>XIAOSHUAI.C</div>
                <div>XIAOMEI.H</div>
              </div>
            </div>
            <button
              style={{
                border: "0.1rem solid #ddd",
                padding: "0.2rem 0.8rem",
                height: "3rem",
                fontSize: "1.5rem",
              }}
              onClick={() => {
                setAddMan(true);
              }}
            >
              <PlusOutlined />
            </button>
          </div>
        </Form.Item>

        <Form.Item>
          <Row>
            <Col span={4} offset={8}>
              <Button htmlType="submit">保存</Button>
            </Col>
            <Col span={6} offset={1}>
              <Button
                htmlType="button"
                className="bg-gray-400 text-white"
                onClick={() => setIsEitd(false)}
              >
                取消
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>

      <Modal
        open={addMan}
        footer={[
          <div className="flex justify-center" key="confirm">
            <Button
              className="flex justify-center w-20 m-10"
              onClick={() => {
                setAddMan(false);
              }}
            >
              確定
            </Button>
            <Button
              className="bg-gray-400 text-white flex justify-center w-20 m-10"
              onClick={() => {
                setAddMan(false);
              }}
            >
              取消
            </Button>
          </div>,
        ]}
      >
        <div className="border-t mt-8 py-4">
          <div className="pb-4"> 添加人員</div>
          <div className="flex items-center">
            <Input placeholder="add man" />
            <FiSearch className="text-2xl" />
          </div>
          <div className="border mt-4 p-4 max-h-60 min-h-48">
            <Checkbox>ABC.D</Checkbox>
          </div>
        </div>
      </Modal>
    </div>
  );
};
