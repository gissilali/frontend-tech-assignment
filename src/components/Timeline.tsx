import React from "react";
import { TimelineEvent } from "../App";
import MilestoneBubble from "./MilestoneBubble";
import TimelineItem from "./TimelineItem";
import MilestoneMarker from "./MilestoneMarker";

import family from "../family.svg";
import debt from "../debt.svg";
import emFund from "../em-fund.svg";
import home from "../home.svg";
import holiday from "../going-holiday.svg";
import retire from "../retire.svg";

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="flex  py-72 container mx-auto">
      <TimelineItem isCurrent={true} weight={1}>
        <MilestoneMarker label="You are here" placement="bottom" />
      </TimelineItem>
      <TimelineItem weight={1}>
        <MilestoneMarker
          placement="top"
          milestoneBubble={
            <MilestoneBubble
              pointerPlacement="bottom"
              imgSrc={family}
              imgAlt="Baby's Birth"
              label="Baby's Birth"
            />
          }
        />
        <MilestoneMarker
          milestoneBubble={
            <MilestoneBubble
              pointerPlacement="top"
              imgSrc={home}
              imgAlt="Home"
              label="New Home"
            />
          }
          label="In 1 year and 9 months"
          placement="bottom"
        />
      </TimelineItem>
      <TimelineItem weight={2}>
        <MilestoneMarker
          placement="top"
          milestoneBubble={
            <MilestoneBubble
              pointerPlacement="bottom"
              imgSrc={holiday}
              imgAlt="Holiday"
              label="Holiday"
            />
          }
        />
        <MilestoneMarker label="In 3 years and 2 months" placement="bottom" />
      </TimelineItem>
      <TimelineItem weight={3}>
        <MilestoneMarker
          milestoneBubble={
            <MilestoneBubble
              pointerPlacement="top"
              imgSrc={emFund}
              imgAlt="emergency fund"
              label="Emergency Fund"
            />
          }
          label="In 4 years and 9 months"
          placement="bottom"
        />
      </TimelineItem>
      <TimelineItem lineType="dashed" weight={3}>
        <MilestoneMarker
          placement="top"
          position="center"
          milestoneBubble={
            <MilestoneBubble
              pointerPlacement="bottom"
              imgSrc={retire}
              imgAlt="retire"
              label="Retire"
            />
          }
        />

        <MilestoneMarker
          milestoneBubble={
            <MilestoneBubble
              pointerPlacement="top"
              imgSrc={debt}
              imgAlt="Debt"
              label="Debt Free"
            />
          }
          label="In 8 years and 11 months"
          placement="bottom"
        />
        <MilestoneMarker
          position="end"
          milestoneBubble={
            <MilestoneBubble
              type="secondary"
              pointerPlacement="top"
              imgSrc={family}
              imgAlt="Family"
              label="Make a contribution to my community through philantrophy"
            />
          }
          label="Ultimately"
          placement="bottom"
        />
      </TimelineItem>
    </div>
  );
}
