import {
  ConfigProvider,
  Modal,
  Radio,
  Space,
  Table,
  TableProps,
  App,
} from "antd";
import { Button } from "antd/es/radio";
import { useAction } from "./hook";
import { IManProps, IroleProps } from "./props";
import { Eitd } from "./components/eitd";

export const Setting = () => {
  const { message } = App.useApp();

  const {
    roledDta,
    manData,
    handleTabs,
    tab,
    openMan,
    setOpenMan,
    isEitd,
    setIsEitd,
  } = useAction();

  const roleColumns: TableProps<IroleProps>["columns"] = [
    {
      title: "角色名稱",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "權限",
      dataIndex: "power",
      align: "center",
    },
    {
      title: "人數",
      dataIndex: "num",
      render: (num: number) => (
        <a className="text-blue-700" onClick={() => setOpenMan(true)}>
          {num}
        </a>
      ),
      align: "center",
    },
    {
      title: "狀態",
      dataIndex: "state",
      align: "center",
      render: (text: number) => {
        return text === 1 ? <div>啟用</div> : <div>禁用</div>;
      },
    },
    {
      title: "操作",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onChange={() => {
              setIsEitd(true);
            }}
          >
            編輯
          </Button>
          <Button
            onClick={() => {
              message.success("刪除成功!");
            }}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const manColumns: TableProps<IManProps>["columns"] = [
    {
      title: "序號",
      dataIndex: "order",
      align: "center",
    },
    {
      title: "名稱",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "組別",
      dataIndex: "group",
      align: "center",
    },
    {
      title: "崗位",
      dataIndex: "position",
      align: "center",
    },
  ];

  return (
    <div>
      <div>設置{isEitd && ">新增角色"}</div>
      <div className="mt-5 flex justify-between">
        <ConfigProvider
          theme={{
            components: {
              Radio: {
                buttonBg: "#E8F4F9",
                buttonColor: "#437186",
                controlOutline: "#ADD6E7",
                buttonPaddingInline: 35,
              },
            },
          }}
        >
          <Radio.Group
            onChange={handleTabs}
            value={tab}
            style={{ marginBottom: 20 }}
            defaultValue="ISTK"
            className="sttingTabs"
          >
            <Radio.Button value="ISTK">IS TK</Radio.Button>
            <Radio.Button value="HRTK">HR TK</Radio.Button>
            <Radio.Button value="RS">RS</Radio.Button>
          </Radio.Group>
        </ConfigProvider>
        {!isEitd && <Button onClick={() => setIsEitd(true)}>新增角色</Button>}
      </div>

      {isEitd ? (
        <Eitd setIsEitd={setIsEitd}></Eitd>
      ) : (
        <Table columns={roleColumns} dataSource={roledDta} bordered />
      )}

      <Modal
        open={openMan}
        width="50rem"
        footer={[
          <div className="flex justify-center" key="confirm">
            <Button
              type="primary"
              className="bg-gray-400 text-white flex justify-center w-20"
              onClick={() => {
                setOpenMan(false);
              }}
            >
              確定
            </Button>
          </div>,
        ]}
      >
        <div className="border-t mt-8 py-4">
          <div className="pb-4"> 角色名單</div>
          <Table
            scroll={{ y: 240 }}
            columns={manColumns}
            dataSource={manData}
            bordered
            pagination={false}
          />
        </div>
      </Modal>
    </div>
  );
};
