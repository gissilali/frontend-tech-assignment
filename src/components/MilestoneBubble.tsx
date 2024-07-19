import React from "react";
import { cn } from "../utils";

export interface MilestoneBubbleProps {
  imgSrc: string;
  imgAlt: string;
  label: string;
  pointerPlacement: "top" | "bottom" | "top-end" | "bottom-end";
  type?: "primary" | "secondary";
}

export default function MilestoneBubble({
  imgSrc,
  imgAlt,
  label,
  pointerPlacement = "top",
  type = "primary",
}: MilestoneBubbleProps) {
  return (
    <div
      className={cn("rounded-lg relative bubble p-2 ", pointerPlacement, type)}
      style={{
        width: "130px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="rounded overflow-hidden">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="py-4">
        <p className="font-sans text-white text-center font-base">{label}</p>
      </div>
    </div>
  );
}
