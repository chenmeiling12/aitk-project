import { routerList } from "@/routes";
import {
  Breadcrumb,
  Button,
  Input,
  Select,
  Space,
  Table,
  TableProps,
} from "antd";
import { useNavigate } from "react-router-dom";

export interface IManProps {
  key: string;
  order: number;
  name: string;
  num: number;
  belong: string;
  man: string;
  state: number;
}
export const Library = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const navigate = useNavigate();

  const manData: IManProps[] = [
    {
      key: "1",
      order: 1,
      name: "新人培訓",
      num: 9,
      belong: "HR TK",
      man: "ABC.D",
      state: 1,
    },
    {
      key: "2",
      order: 2,
      name: "雲桌面",
      num: 3,
      belong: "IS TK",
      man: "CREAM.Y",
      state: 2,
    },
    {
      key: "3",
      order: 3,
      name: "財務類問題",
      num: 0,
      belong: "HR TK",
      man: "CHEESE.S",
      state: 2,
    },
  ];
  const manColumns: TableProps<IManProps>["columns"] = [
    {
      title: "編號",
      dataIndex: "order",
      align: "center",
    },
    {
      title: "分類名稱",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "問題數",
      dataIndex: "num",
      align: "center",
    },
    {
      title: "分類所屬",
      dataIndex: "belong",
      align: "center",
    },
    {
      title: "負責人",
      dataIndex: "man",
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
            onClick={() => {
              console.log("分類配置");
              navigate("/library/classify");
            }}
          >
            分類配置
          </Button>
          <Button
            onClick={() => {
              console.log("詳情");
              // message.success("刪除成功!");
            }}
          >
            詳情
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div>问答库</div>
      <div className="p-11">
        <div className="flex justify-between">
          <div>
            <Input placeholder="請輸入關鍵詞搜索" style={{ width: "12rem" }} />
            <Button className="mx-6">查詢</Button>
          </div>
          <div className="flex">
            <div className="mx-6">
              狀態：
              <Select
                defaultValue="all"
                style={{ width: "5rem" }}
                onChange={handleChange}
                options={[
                  { value: "all", label: "全部" },
                  { value: 1, label: "啟用" },
                  { value: 2, label: "禁用" },
                ]}
              />
            </div>
            <div className="mx-6">
              分類所屬：
              <Select
                defaultValue="all"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "all", label: "全部" },
                  { value: "IS TK", label: "IS TK" },
                  { value: "HR TK", label: "HR TK" },
                  { value: "RS", label: "RS" },
                ]}
              />
            </div>

            <Button type="primary" className="mx-6 bg-[#1677ff]">
              新增分類
            </Button>
          </div>
        </div>
        <Table
          columns={manColumns}
          dataSource={manData}
          bordered
          className="mt-10"
        />
      </div>
    </div>
  );
};
