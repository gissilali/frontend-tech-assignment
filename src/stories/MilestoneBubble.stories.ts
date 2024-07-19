import type { Meta, StoryObj } from "@storybook/react";
import MilestoneBubble from "../components/MilestoneBubble";
import family from "../../src/family.svg";

const component: Meta<typeof MilestoneBubble> = {
  title: "Timeline/Milestone Bubble",
  component: MilestoneBubble,
  parameters: {
    layout: "centered",
  },
};

export default component;
type Story = StoryObj<typeof MilestoneBubble>;

export const WithPointerOnTop: Story = {
  args: {
    imgAlt: "Image Alt",
    imgSrc: family,
    label: "Label",
    pointerPlacement: "top",
  },
};

export const WithPointerAtBottom: Story = {
  args: {
    imgAlt: "Image Alt",
    imgSrc: family,
    label: "Label",
    pointerPlacement: "bottom",
  },
};

export const TypePrimary: Story = {
  args: {
    imgAlt: "Image Alt",
    imgSrc: family,
    label: "Label",
    pointerPlacement: "bottom",
    type: "primary"
  },
};

export const TypeSecondary: Story = {
  args: {
    imgAlt: "Image Alt",
    imgSrc: family,
    label: "Label",
    pointerPlacement: "bottom",
    type: "secondary"
  },
};