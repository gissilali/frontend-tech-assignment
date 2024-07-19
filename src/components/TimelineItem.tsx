import React, { ReactNode } from "react";
import MilestoneBubble from "./MilestoneBubble";
import { cn } from "../utils";
import ArrowRightIcon from "./ArrowRightIcon";

export type TimelineItemProps = {
  children: ReactNode;
  weight?: number;
  lineType?: "solid" | "dashed";
  isCurrent?: boolean;
};

export default function TimelineItem({
  children,
  weight,
  lineType = "solid",
  isCurrent = false,
}: TimelineItemProps) {
  return (
    <div
      className={cn("flex  relative items-center space-x-2")}
      style={{
        flexGrow: weight,
      }}
    >
      {isCurrent ? (
        <div className="flex-col bg-secondary w-5 h-5 rounded-full relative justify-center flex items-center">
          <span className="w-2 h-2 block bg-primary rounded-full"></span>
        </div>
      ) : (
        <span className="w-2 h-2 block bg-secondary rounded-full"></span>
      )}
      {children}
      {lineType == "solid" ? (
        <span className="h-[2px] w-12 rounded-sm bg-white flex-1"></span>
      ) : (
        <span className="flex items-center w-12 flex-1">
          <svg className="h-[2px] flex-1" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="white"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
          </svg>
          <ArrowRightIcon />
        </span>
      )}
      <span></span>
    </div>
  );
}
