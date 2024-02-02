import { routerList } from "@/routes";
import { IChildrenProps, IRouterListProps } from "@/routes/props";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { useAction } from "./hook";

export const Menu = () => {
  const { showMenu, setShowMenu, navigate, pathname } = useAction();

  return (
    <div>
      {routerList.map((item: IRouterListProps, index: number) => (
        <div key={index} className="text-sm cursor-pointer">
          <div
            className={`flex items-center justify-between p-2.5 hover:bg-blue-100
            ${
              pathname === item.key &&
              `bg-[#E6F7FF] text-[#1785FC] ont-medium border-r-2 border-[#1785FC]`
            }
            ${
              pathname.substring(0, 8) === item.key.substring(0, 8) &&
              `text-[#1785FC] font-medium`
            }
            `}
            onClick={() => {
              navigate(item.key);
            }}
          >
            <div className="flex items-center">
              <span className="mr-2 text-base">{item.icon}</span>
              <span>{item.label}</span>
            </div>

            {item.children && (
              <div className="text-xl" onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <BiChevronUp /> : <BiChevronDown />}
              </div>
            )}
          </div>

          {showMenu && (
            <div className="bg-[#F7F7F7]">
              {item.children?.map((item: IChildrenProps, index: number) => (
                <div
                  key={index}
                  className={`pl-6 p-2.5 hover:bg-blue-100 cursor-pointer ${
                    pathname === item.key &&
                    `bg-[#E6F7FF] text-[#1785FC] font-medium border-r-2 border-[#1785FC]`
                  }`}
                  onClick={() => {
                    navigate(item.key);
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
