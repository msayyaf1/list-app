const ErrorMessage = ({ error }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="text-red-600 text-center bg-white/80 backdrop-blur-sm p-6 rounded-lg">
        <p className="text-xl">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
