import { Button } from "@mui/material"


interface ButtonProps{
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  type?: "button" | "submit" | "reset";
  color?: "primary" | "success" | "warning" | "info" | "error";
  size: "small" | "medium" | "large";
  onClick?: ()=> void;
}

export default function CustomButton (props: ButtonProps){
  const {
    children,
    type = "button",
    size = "small",
    variant = "contained",
    color = "primary",
    onClick,
    ...rest
  } = props
  return(
    <Button type={type} size={size} variant={variant} onClick={onClick} color={color} {...rest}>
    {children}
  </Button>
  )
} 