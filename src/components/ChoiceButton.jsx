import React from "react";

export const ChoiceButton = ({ choice, handleSelection, selection }) => {
  const style =
    choice === "paper"
      ? "from-[#4865f4] to-[#5671f5]"
      : choice === "rock"
      ? "from-[#dc2e4e] to-[#dd405d]"
      : choice === "scissors"
      ? "from-[#ec9e0e] to-[#eca922]"
      : "";

  const Selection = ({ choice }) => {
    return (
      <div className={`z-10 bg-gradient-to-r ${style} rounded-full p-4`}>
        <span className="block p-6 bg-white rounded-full shadow-inner shadow-header-outline">
          <img
            src={`/images/icon-${choice}.svg`}
            alt=""
            className="w-12 h-12 rounded-full "
          />
        </span>
      </div>
    );
  };
  return (
    <>
      {selection ? (
        <Selection choice={choice} />
      ) : (
        <button
          onClick={() => handleSelection(choice)}
          className={`z-10 bg-gradient-to-r ${style} rounded-full p-4`}
        >
          <span className="block p-6 bg-white rounded-full shadow-inner shadow-header-outline">
            <img
              src={`/images/icon-${choice}.svg`}
              alt=""
              className="w-12 h-12 rounded-full "
            />
          </span>
        </button>
      )}
    </>
  );
};
