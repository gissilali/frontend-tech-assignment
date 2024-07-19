import React from "react";
import { cn } from "../utils";

export type MilestoneMarkerProps = {
  label?: string;
  milestoneBubble?: JSX.Element;
  placement: "top" | "bottom";
  position?: "center" | "start" | "end";
};

export default function MilestoneMarker({
  label,
  milestoneBubble,
  placement = "bottom",
  position = "start",
}: MilestoneMarkerProps) {
  return (
    <div className={cn("node-text", placement, position)}>
      <div
        className={cn(
          "flex flex-col justify-center items-center w-full space-y-4",
          placement,
        )}
      >
        {placement == "bottom" ? (
          <>
            <span>{label}</span>
            {milestoneBubble ? (
              <span className="h-4 block w-[2px] bg-primary-light rounded-sm"></span>
            ) : null}
            {milestoneBubble}
          </>
        ) : (
          <>
            {milestoneBubble}

            {milestoneBubble ? (
              <span className="h-4 block w-[2px] bg-primary-light rounded-sm"></span>
            ) : null}
            <span>{label}</span>
          </>
        )}
      </div>
    </div>
  );
}
