import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { FunctionComponent, PropsWithChildren } from "react";

export type SidebarProps = PropsWithChildren<{ className?: string }>;

export const Sidebar: FunctionComponent<SidebarProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("col-span-3 bg-accent rounded-xl p-4", className)}>
      <ScrollArea className="w-full h-full">
        <div className="space-y-2">{children}</div>
      </ScrollArea>
    </div>
  );
};
