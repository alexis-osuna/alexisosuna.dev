import React from "react";
import { Prompt } from "@/components";

export interface History {
  id: number;
  date: Date;
  command: string;
  output: React.ReactNode;
}

export interface HistoryProps {
  history: History[];
}

export const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <>
      {history.map((entry: History, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <div className="flex-shrink">
              <Prompt />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          <div className="whitespace-pre-wrap" />
          {entry.output}
        </div>
      ))}
    </>
  );
};

export default History;
