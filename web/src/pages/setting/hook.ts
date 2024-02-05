import { RadioChangeEvent } from "antd";
import { IManProps, IroleProps, TabPosition } from "./props";
import { useState } from "react";

export const useAction = () => {
  const roledDta: IroleProps[] = [
    {
      key: "1",
      name: "ADMINISTRATOR",
      power: "ALL",
      num: 3,
      state: 1,
    },
    {
      key: "2",
      name: "ASSISTANT",
      power: "8",
      num: 15,
      state: 1,
    },
    {
      key: "3",
      name: "SVIP",
      power: "9",
      num: 6,
      state: 2,
    },
  ];

  const manData: IManProps[] = [
    {
      key: "1",
      order: 1,
      name: "ABC.D",
      group: "CS",
      position: "中級助理",
    },
    {
      key: "2",
      order: 2,
      name: "XIOASHUAI.C",
      group: "OP",
      position: "高級文員",
    },
    {
      key: "3",
      order: 3,
      name: "XIAOMEI.H",
      group: "OP",
      position: "初級文員",
    },
  ];

  const [tab, setTab] = useState<TabPosition>("ISTK");

  const handleTabs = (e: RadioChangeEvent) => {
    setTab(e.target.value);
  };

  const [openMan, setOpenMan] = useState(false);

  const [isEitd, setIsEitd] = useState(false);

  return {
    roledDta,
    manData,
    handleTabs,
    tab,
    openMan,
    setOpenMan,
    isEitd,
    setIsEitd,
  };
};
