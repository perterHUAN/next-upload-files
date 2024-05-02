function ProgressIndicator({ progress }) {
  return (
    <div className="w-12 h-12 grid place-content-center rounded-full bg-blue-100 mx-auto">
      {progress}%
    </div>
  );
}

export default ProgressIndicator;
