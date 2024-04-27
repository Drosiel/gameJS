/* eslint-disable @typescript-eslint/no-explicit-any */
interface IMain {
  starGame: any;
}

export const Main = ({ starGame }: IMain) => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full">
      <div className="flex">
        <button
          className="py-2 px-8 bg-amber-700 hover:bg-amber-500 rounded text-xl font-bold text-cyan-900"
          onClick={starGame}
        >
          СТАРТ
        </button>
      </div>
    </div>
  );
};
