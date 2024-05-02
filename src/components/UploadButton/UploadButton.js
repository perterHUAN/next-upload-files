import { statusToString } from "@/constants";
function UploadButton({ status, handleUpload }) {
  return (
    <div className="flex flex-row items-center justify-center">
      <button
        disabled={status === 1}
        className="select-none w-52 rounded py-2 bg-gray-50 font-semibold text-gray-500 [&:not(:disabled)]:hover:text-gray-50 [&:not(:disabled)]:hover:bg-gray-400 [&:not(:disabled)]:active:translate-y-2"
        onClick={handleUpload}
      >
        {statusToString[status]}
      </button>
    </div>
  );
}

export default UploadButton;
