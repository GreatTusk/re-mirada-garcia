const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent";

export function ProductoCarritoSkeleton() {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 ${shimmer}`}
    >
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <div className="shrink-0 md:order-1">
          <div className="h-20 w-20 rounded-2xl bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <div className="inline-flex h-5 w-5 rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="w-10 h-5 mx-2 bg-gray-200 dark:bg-gray-700" />
            <div className="inline-flex h-5 w-5 rounded-md bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="text-end md:order-4 md:w-32">
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700" />
          <div className="flex items-center gap-4">
            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700" />
            <div className="h-5 w-20 bg-red-200 dark:bg-red-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function OtrosProductosSkeleton() {

  const skeletonData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  return (
    <div className={`mt-6 grid grid-cols-3 gap-4 sm:mt-8`}>
      {skeletonData.map((_, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 ${shimmer}`}
        >
          <div className="space-y-6">
            <div className="size-40 md:h-20 md:w-20 rounded-2xl bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-4">
              <div className="h-6 w-5/6 bg-gray-200 dark:bg-gray-700" />
              <div className="h-8 w-5/6 bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-8 rounded-lg bg-gray-200 dark:bg-gray-700" />
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}