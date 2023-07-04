import { MouseEventHandler } from "react";

export type CarProps = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export type CarState = CarProps[] & { message?: string };

export type SearchBarProps = {
  setManuFacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

export type FilterProps = {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export type CarCardProps = {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export type CustomButtonProps = {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export type OptionProps = {
  title: string;
  value: string;
}

export type CustomFilterProps<T> = {
  options: OptionProps[];
  setFilter: (selected: T) => void;
}

export type ShowMoreProps = {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

export type SearchManuFacturerProps = {
  selected: string;
  setSelected: (selected: string) => void;
}