import { Route, Routes } from "react-router-dom";
import { IChildrenProps, IRouterListProps } from "./props";
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { Person } from "@/pages/person";
import { Setting } from "@/pages/setting";
import { Classify } from "@/pages/classify";
import { AqConfig } from "@/pages/aq-config";
import { Manage } from "@/pages/manage";
import { Home } from "@/pages/home/index";
import { Login } from "@/pages/login";

export const routerList: IRouterListProps[] = [
  {
    key: "/person",
    element: <Person />,
    label: "個人中心",
    icon: <AiOutlineHome />,
  },
  {
    key: "/library",
    label: "問答庫",
    icon: <GoPerson />,
    children: [
      {
        key: "/library/classify",
        element: <Classify />,
        label: "分類配置",
      },
      {
        key: "/library/aqconfig",
        element: <AqConfig />,
        label: "問答配置",
      },
      {
        key: "/library/manage",
        element: <Manage />,
        label: "問法提示管理",
      },
    ],
  },
  {
    key: "/setting",
    element: <Setting />,
    label: "設置",
    icon: <GoPerson />,
  },
];

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Home />}>
        {routerList.map((item: IRouterListProps, index: number) => (
          <Route path={item.key} element={item.element} key={index}>
            {item.children?.map((item: IChildrenProps, index: number) => {
              return (
                <Route path={item.key} element={item.element} key={index} />
              );
            })}
          </Route>
        ))}
      </Route>
    </Routes>
  );
};
