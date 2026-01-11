import { ReactNode } from "react";

export type Experience = {
  logo: string;
  title: string;
  startDate: Date;
  endDate: Date | null;
  company: string;
  website: string | null;
  description: string;
  bulletPoints: string[];
  location: string;
  jobType: string;
  summary: ReactNode;
};
