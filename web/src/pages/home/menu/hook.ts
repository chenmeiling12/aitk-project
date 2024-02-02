import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useAction = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const pathname = useLocation().pathname;

  useEffect(() => {
    pathname.substring(0, 9) === "/library/" && setShowMenu(true);
  }, [pathname]);

  return {
    showMenu,
    setShowMenu,
    navigate,
    pathname,
  };
};
