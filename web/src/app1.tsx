import { Home } from "./pages/home";
import { Router } from "./routes";

export const App = () => {
  return (
    <div>
      <Router />
      <Home />
    </div>
  );
};
