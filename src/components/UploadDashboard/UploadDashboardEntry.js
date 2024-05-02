"use client";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import { ChevronDown, ChevronUp } from "react-feather";
function UploadDashboardEntry({ entry, status }) {
  const [isExpand, setExpand] = React.useState(false);

  let progress = 0;

  if (entry.type === 1) {
    if (status !== 0) {
      const loaded = entry.progress.loaded.reduce((acc, cur) => acc + cur, 0);
      const total = entry.progress.total.reduce((acc, cur) => acc + cur, 0);
      if (total != 0) progress = ((loaded * 100) / total).toFixed(0);
    }
    return (
      <>
        <tr className="border-b-2 bg-blue-200">
          <td className="py-3 relative">
            <div
              className="absolute p-3 top-1/2 -translate-y-1/2"
              onClick={() => setExpand(!isExpand)}
            >
              {isExpand ? <ChevronUp /> : <ChevronDown />}
            </div>
            {entry.file.name}
          </td>
          <td className="py-3">文件夹</td>
          <td className="py-3">{entry.file.size}</td>
          <td className="py-3">
            {status === 0 ? (
              "未上传"
            ) : (
              <ProgressIndicator progress={progress} />
            )}
          </td>
        </tr>
        {isExpand &&
          entry.children.map((child, idx) => {
            return (
              <UploadDashboardEntry entry={child} key={idx} status={status} />
            );
          })}
      </>
    );
  }
  return (
    <tr className="border-b-2">
      <td className="py-3">{entry.file.name}</td>
      <td className="py-3">{entry.file.type}</td>
      <td className="py-3">{entry.file.size}</td>
      <td className="py-3">
        {status === 0 ? (
          "未上传"
        ) : (
          <ProgressIndicator progress={entry.progress} />
        )}
      </td>
    </tr>
  );
}
export default UploadDashboardEntry;
