import { useState } from "react";

export const Rules = () => {
  const [isOpenRules, setIsOpenRules] = useState(false);
  return (
    <>
      <section className="flex flex-row justify-center">
        <button
          onClick={() => setIsOpenRules(true)}
          className="px-10 py-2 font-semibold tracking-widest uppercase border rounded-lg text-md"
        >
          Rules
        </button>
      </section>
      {isOpenRules && (
        <section className="absolute top-0 z-10 flex flex-col items-center justify-between w-full min-h-screen gap-2 py-20 bg-white">
          <h2 className="text-4xl font-bold uppercase text-dark">Rules</h2>

          <img src="/images/image-rules.svg" alt="" className="" />

          <button onClick={() => setIsOpenRules(false)}>
            <img src="/images/icon-close.svg" alt="" />
          </button>
        </section>
      )}
    </>
  );
};
