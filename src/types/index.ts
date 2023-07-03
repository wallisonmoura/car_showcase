import { MouseEventHandler } from "react"

export type CustomButtonProps = {
  title: string
  containerStyles?: string
  btnType?: 'button' | 'submit'
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export type SearchManuFacturerProps = {
  manuFacturer: string
  setManuFacturer: (manuFacturer: string) => void
}