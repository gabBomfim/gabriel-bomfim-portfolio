import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "quiet";

const variantClassName: Record<ButtonVariant, string> = {
  primary: "button button-primary",
  secondary: "button button-secondary",
  quiet: "button button-quiet",
};

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

export function Button({
  children,
  className = "",
  variant = "secondary",
  ...props
}: AnchorButtonProps) {
  return (
    <a className={`${variantClassName[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function ButtonControl({
  children,
  className = "",
  variant = "secondary",
  ...props
}: NativeButtonProps) {
  return (
    <button className={`${variantClassName[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
