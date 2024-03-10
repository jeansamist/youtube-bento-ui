import { cn } from "@/lib/utils";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

export type GhostButtonProps = {
  icon: ReactNode;
  label: string;
  actived?: boolean;
};

export const GhostButton: FunctionComponent<GhostButtonProps> = ({
  icon,
  actived = false,
  label,
}) => {
  return (
    <Link
      href={"#"}
      className={cn(
        "p-2 text-sm font-medium flex items-center gap-2 rounded-lg",
        actived
          ? "bg-dark"
          : "transition-colors bg-transparent hover:bg-accent-hovevered"
      )}
    >
      {icon}
      {label}
    </Link>
  );
};
