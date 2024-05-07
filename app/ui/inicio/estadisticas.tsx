export default function Estadisticas() {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">10M+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            seguidores
          </dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">100k+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            fotos tomadas
          </dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1k+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            eventos concretados
          </dd>
        </div>
      </dl>
    </div>
  );
}
