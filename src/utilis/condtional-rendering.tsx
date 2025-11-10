import React, {type  ReactNode } from "react";

interface CaseProps {
  children: ReactNode;
  condition: boolean;
}

export const Switch = ({ children }: { children: ReactNode }) => {
  let matchChild: ReactNode | null = null;
  let defaultCase: ReactNode | null = null;

  React.Children.forEach(children, (child) => {
    if (!matchChild && React.isValidElement(child) && child.type === Case) {
      const { condition } = child.props as CaseProps;
      const conditionResult = Boolean(condition);
      if (conditionResult) {
        matchChild = child;
      }
    } else if (
      !defaultCase &&
      React.isValidElement(child) &&
      child.type === Default
    ) {
      defaultCase = child;
    }
  });

  return matchChild ?? defaultCase ?? null;
};

export const Case: React.FC<CaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const Default = ({ children }: { children: ReactNode }) => {
  return children;
};
