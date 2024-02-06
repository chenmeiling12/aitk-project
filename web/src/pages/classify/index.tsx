import { Button, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

export const Classify = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div>問答庫{">"}分類配置</div>
      <div className="p-6">
        <div>分類配置</div>
        <div className="flex float-left flex-wrap">
          <div className="flex items-center w-[50%]">
            <div className="w-1/6">分类名称</div>
            <Input placeholder="Basic usage" style={{ width: "50%" }} />
          </div>
          <div className="flex items-center w-[50%]">
            <div className="w-1/6">分类所属</div>
            <Select
              defaultValue="all"
              style={{ width: "50%" }}
              onChange={handleChange}
              options={[
                { value: "all", label: "全部" },
                { value: "IS TK", label: "IS TK" },
                { value: "HR TK", label: "HR TK" },
                { value: "RS", label: "RS" },
              ]}
            />
          </div>
          <div className="flex items-center w-[50%]">
            <div className="w-1/6">分类第一负责人</div>
            <Select
              defaultValue="all"
              style={{ width: 250 }}
              onChange={handleChange}
              options={[
                { value: "all", label: "全部" },
                { value: "IS TK", label: "IS TK" },
                { value: "HR TK", label: "HR TK" },
                { value: "RS", label: "RS" },
              ]}
            />
          </div>
          <div className="flex w-[50%] pt-10">
            <div className="w-32"> 分类次要负责人</div>
            <div className="flex flex-wrap w-[80%]">
              <Select
                defaultValue="all"
                style={{ width: "250px", marginRight: 20 }}
                onChange={handleChange}
                options={[
                  { value: "all", label: "全部" },
                  { value: "IS TK", label: "IS TK" },
                  { value: "HR TK", label: "HR TK" },
                  { value: "RS", label: "RS" },
                ]}
              />
              <Select
                defaultValue="all"
                style={{ width: "250px", marginRight: 20 }}
                onChange={handleChange}
                options={[
                  { value: "all", label: "全部" },
                  { value: "IS TK", label: "IS TK" },
                  { value: "HR TK", label: "HR TK" },
                  { value: "RS", label: "RS" },
                ]}
              />
              <Select
                defaultValue="all"
                style={{ width: "250px", marginRight: 20, marginTop: 40 }}
                onChange={handleChange}
                options={[
                  { value: "all", label: "全部" },
                  { value: "IS TK", label: "IS TK" },
                  { value: "HR TK", label: "HR TK" },
                  { value: "RS", label: "RS" },
                ]}
              />
            </div>
          </div>
          <div className="flex w-1/2 pt-10">
            <div className="w-1/6">分类说明</div> <TextArea rows={4} />
          </div>
          <div className="w-full flex pt-10 justify-around">
            <div className=" w-1/6 flex justify-around">
              <Button>保存配置</Button>
              <Button>取消</Button>
            </div>
            <Button type="primary" danger>
              删除分类
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
