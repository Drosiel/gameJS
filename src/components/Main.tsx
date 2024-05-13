/* eslint-disable @typescript-eslint/no-explicit-any */
interface IMain {
  starGame1: any
  starGame2: any
}

export const Main = ({ starGame1, starGame2 }: IMain) => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full">
      <div className="flex flex-col gap-2">
        <button
          className="py-2 px-8 bg-amber-700 hover:bg-amber-500 rounded text-xl font-bold text-cyan-900"
          onClick={starGame1}
        >
          Найди пару
        </button>
        <button
          className="py-2 px-8 bg-amber-700 hover:bg-amber-500 rounded text-xl font-bold text-cyan-900"
          onClick={starGame2}
        >
          Корзина
        </button>
      </div>
    </div>
  )
}
