import { Checkbox, CheckboxProps, GetProp, RadioChangeEvent } from "antd";
import { useState } from "react";

export const useAction = () => {
  const [isUser, setIsUser] = useState(1);

  const onIsUse = (e: RadioChangeEvent) => {
    console.log("是否啟用", e.target.value);
    setIsUser(e.target.value);
  };

  const [isLook, setIsLook] = useState(1);

  const onIsLook = (e: RadioChangeEvent) => {
    console.log("權限操作", e.target.value);
    setIsLook(e.target.value);
  };

  const onFinish = (values: any) => {
    console.log(values);
    console.log("保存");
  };

  type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

  const CheckboxGroup = Checkbox.Group;

  const plainOptions = ["雲桌面", "網路", "SPA", "LMS", "選項5", "選項6"];

  const defaultCheckedList = ["雲桌面", "網路"];

  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;

  const onClassifyPower = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    console.log("分類權限：" + list);
  };

  const onCheckAll: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    console.log("銓選");
  };

  const [addMan, setAddMan] = useState(false);

  return {
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
  };
};
