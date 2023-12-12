import type { Platforms } from "./platform";

export type Supporter = {
  id: string;
  user: string;
  platform: Platforms;
  amount: number;
  label: string;
  diff: number;
};
