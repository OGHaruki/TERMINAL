/**
 * A simple loading spinner component that indicates a loading state. It renders a spinning circle to provide visual feedback for loading operations.
 */

const LoadingIndicator = () => (
    <div className="flex items-center justify-center">
      <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  export default LoadingIndicator;