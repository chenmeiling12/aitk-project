export interface IroleProps {
  key: string;
  name: string;
  power: string;
  num: number;
  state: number;
}

export interface IManProps {
  key: string;
  order: number;
  name: string;
  group: string;
  position: string;
}

export type TabPosition = "ISTK" | "HRTK" | "RS";
