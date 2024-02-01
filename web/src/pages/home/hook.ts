import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const useAction = () => {
  const navigate = useNavigate();

  const pathname = useLocation().pathname;

  const [menuInformation, setMenuInformation] = useState<{
    openKeys: string[];
    selectedKeys: string[];
  }>({
    openKeys: [pathname],
    selectedKeys: [pathname],
  });

  return { navigate, menuInformation, setMenuInformation };
};
