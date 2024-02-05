import { Router } from "@/routes";
import { App as AppWrapper } from "antd";

export const App = () => {
  return (
    <AppWrapper>
      <Router />
    </AppWrapper>
  );
};
