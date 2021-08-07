export type ButtonVariantTypes = "primary" | "primary-ghost"

export interface ButtonPropTypes
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode
  variant?: ButtonVariantTypes
  isActive?: boolean
}

export type StyledButtonPropTypes = {
  isActive?: boolean
}
