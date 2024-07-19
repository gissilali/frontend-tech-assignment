import React from "react";
import family from "./family.svg";
import MilestoneBubble from "./components/MilestoneBubble";
import Timeline from "./components/Timeline";

export interface TimelineEvent {
  imageSrc: string;
  imageAlt: string;
  label: string;
}

function App() {
  const timelineEvents: TimelineEvent[] = [];

  return (
    <main className="bg-primary h-screen">
      <Timeline events={timelineEvents} />
    </main>
  );
}

export default App;
