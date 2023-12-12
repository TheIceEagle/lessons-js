import type { Platforms } from "./platform";

export type Overview = {
  id: string;
  name: string;
  platform: Platforms;
  amount: number;
  diff: number;
};
