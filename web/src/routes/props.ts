export interface IRouterListProps {
  key: string;
  element?: JSX.Element;
  label: string;
  icon: JSX.Element;
  children?: IChildrenProps[];
}

export interface IChildrenProps {
  key: string;
  element: JSX.Element;
  label: string;
}
