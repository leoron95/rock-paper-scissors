export const ScoreBoard = ({ score }) => {
  return (
    <section className="pt-8 px-[34px]">
      <section className="flex flex-row items-center justify-between pl-5 pr-2.5 py-3 outline-[3px] outline rounded-lg outline-header-outline">
        <ul className="text-xl font-semibold leading-4 uppercase list-none">
          <li>Rock</li>
          <li>Paper</li>
          <li>Scissors</li>
        </ul>

        <div className="bg-white rounded-md ">
          <div className="flex flex-col items-center justify-center px-5 pb-4">
            <div className="mt-2 text-xs font-bold tracking-widest uppercase text-score">
              Score
            </div>
            <div className="text-[40px] leading-8 font-bold text-dark">
              {score}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
