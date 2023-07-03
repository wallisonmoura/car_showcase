import { MouseEventHandler } from "react"

export type CustomButtonProps = {
  title: string
  containerStyles?: string
  textStyles?: string
  btnType?: 'button' | 'submit'
  handleClick?: MouseEventHandler<HTMLButtonElement>
  rightIcon?: string
  isDisabled?: boolean
}

export type SearchManuFacturerProps = {
  manuFacturer: string
  setManuFacturer: (manuFacturer: string) => void
}

export type CarProps = {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}