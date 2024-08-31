export type FontSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export function isFontSize(arg: string): boolean {
  switch (arg) {
    case "xs":
    case "sm":
    case "md":
    case "lg":
    case "xl":
    case "xxl":
      return true;
    default: 
      return false;
  }
}

