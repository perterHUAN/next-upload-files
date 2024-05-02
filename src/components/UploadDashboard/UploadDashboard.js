import UploadDashboardEntry from "./UploadDashboardEntry";
import { HardDrive } from "react-feather";

function UploadDashboard({uploadFileList, status}) {
  return (
    <>
      <table className="table-fixed w-full text-center mt-10">
        <thead>
          <tr className="border-b-2">
            <td className="py-3 bg-gray-50">文件名</td>
            <td className="py-3 bg-gray-50">类型</td>
            <td className="py-3 bg-gray-50">大小</td>
            <td className="py-3 bg-gray-50">状态</td>
          </tr>
        </thead>
        <tbody>
          {uploadFileList.map((file, idx) => {
            return (
              <UploadDashboardEntry entry={file} key={idx} status={status} />
            );
          })}
        </tbody>
      </table>
      {uploadFileList.length === 0 && (
        <div className="border-2 border-dashed border-t-0 h-52 flex flex-col items-center justify-center">
          <HardDrive />
          <p>暂无文件可上传</p>
        </div>
      )}
      <p className="mt-4">
        <span className="text-green-600 px-3 py-2 bg-gray-50 rounded font-semibold mr-2">
          已上传{" "}
          {uploadFileList.reduce(
            (pre, cur) => pre + (cur.progress == 100 ? 1 : 0),
            0
          )}
        </span>
        <span className="text-gray-500 px-3 py-2 bg-gray-50 rounded font-semibold mr-2">
          总数量 {uploadFileList.length}
        </span>
      </p>
    </>
  );
}

export default UploadDashboard;
