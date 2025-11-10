import type { JSX } from "react";

export type TsideBarLinks = {
    id: number;
    name: string;
    path: string;
    icon: React.ReactElement;
  };

  export type HeaderProps = {
    title?: string | React.ReactElement;
    subtitle?: string | React.ReactElement;
    icon?: JSX.Element;
  };

  export interface CardProps {
    title: string | number;
    value: number | undefined;
    icon: React.ReactElement;
    change?: {
      value: number | string;
      positive: boolean;
      note: string;
    };
  }
  
  export interface Card {
    id: number;
    icon: React.ReactElement;
    title: string;
    description: string;
    documentCount: string;
  }
  
  export interface RecentCardProps {
    title: string;
    platform: string;
    status: string;
    description: string[];
    stats: {
      comments: string;
      status: string;
    };
    updateText: string;
  }