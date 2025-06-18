import { Video } from "lucide-react";

export default function NoResultsPlaceholder() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center px-4 text-center">
      <Video size={50}/>
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        No videos found
      </h2>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-xs">
        Try selecting a different category or check back later.
      </p>
    </div>
  );
}
