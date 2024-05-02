"use client";
import React from "react";
import DragUpload from "@/components/DragUpload";
import ClickSelectUpload from "@/components/ClickSelectUpload";
import UploadButton from "@/components/UploadButton";
import UploadDashboard from "@/components/UploadDashboard";
import { uploadProcess } from "@/utils";
export default function Home() {
  const [uploadFileList, setUploadFileList] = React.useState([]);
  const [status, setStatus] = React.useState(0); // 0: 未上传  1: 上传中 2:上传完成

  function handleUpload() {
    if (uploadFileList.length === 0) return;
    setStatus(1);
    uploadProcess(uploadFileList, setUploadFileList, setStatus);
  }
  return (
    <main className="p-4">
      <DragUpload setUploadFileList={setUploadFileList} />
      <ClickSelectUpload setUploadFileList={setUploadFileList} />
      <UploadDashboard uploadFileList={uploadFileList} status={status} />
      <UploadButton
        status={status}
        setStatus={setStatus}
        handleUpload={handleUpload}
      />
    </main>
  );
}
