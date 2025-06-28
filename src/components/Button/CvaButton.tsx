import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
// import CustomLoader from '@/components/server/Loder/circleLoader';
import { cn } from "@/utils/cva";
import CustomLoader from "../server_com/CustomLoader";

export type IButtonIntentTypes = "primary" | null | undefined;

// primary btn
// edit btn
// delete btn
/**
 * Represents the button variants for the CvaButton component.
 */
const buttonVariants = cva("flex gap-[4px] items-center ", {
  /**
   * Represents the variants for the intent of the button.
   */
  variants: {
    intent: {
      /**
       * Represents the primary intent variant of the button.
       */
      primary: [
        "bg-white",
        "rounded-[10px]",
        "w-full",
        "text-[#2B2B2B]",
        "text-[16px]",
        "font-[600]",
        "hover:bg-[black]",
        "hover:text-white",
        "transition-colors",
        "duration-300",
        "ease-in-out",
        "hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]",
        "hover:shadow-lg",
        "hover:scale-[1.02]",
        "hover:border-[1px]",
        "hover:border-[#747474]",
        "hover:font-[700]",
        "text-center",
        "flex",
        "justify-center",
      ],
      secondary: [
        "bg-black",
        "rounded-[10px]",
        "w-full",
        "text-[#FFFFFF]",
        "text-[16px]",
        "font-[600]",
        "hover:bg-[white]",
        "hover:text-black",
        "transition-colors",
        "duration-300",
        "ease-in-out",
        "hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]",
        "hover:shadow-lg",
        "hover:scale-[1.02]",
        "border-[1px]",
        "border-[#747474]",
        "hover:font-[700]",
        "text-center",
        "flex",
        "justify-center",
      ],
      backButton: ["bg-transparent", "hover:scale-105", "active:scale-95"],
    },
    size: {
      small: ["px-[12px]", "py-[4px]"],
      medium: ["px-[18px]", "py-[18px]"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: " " }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  handleClick?: () => void;
  disabled?: boolean;
  showIcon?: boolean;
  isLoading?: boolean;
}

// Define CvaButton component
const CvaButton: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  handleClick,
  disabled = false,
  type = "button",
  // showIcon = false,
  isLoading = false,
  ...props
}) => (
  <button
    disabled={isLoading || disabled}
    onClick={handleClick}
    type={type}
    className={cn(
      `${
        disabled || isLoading
          ? "!bg-[gray] cursor-not-allowed flex justify-center gap-[12px]"
          : "cursor-pointer"
      }`,
      buttonVariants({ intent, size, className })
    )}
    {...props}
  >
    {/* {showIcon && getIntentIcon(intent)} */}
    {props.children}
    <CustomLoader isLoading={isLoading} />
  </button>
);

CvaButton.displayName = "Button";

export { CvaButton, buttonVariants };
