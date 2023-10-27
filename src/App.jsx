import { useEffect } from "react";
import { useState } from "react";
import { ScoreBoard } from "./components/ScoreBoard";
import { Rules } from "./components/Rules";
import { ChoiceButton } from "./components/ChoiceButton";

function App() {
  const [userSelection, setUserSelection] = useState(undefined);
  const [computerSelection, setComputerSelection] = useState(undefined);
  const [score, setScore] = useState(12);
  const [winner, setWinner] = useState(false);

  const handleSelection = (selection) => {
    setUserSelection(selection);
  };

  const choices = ["paper", "rock", "scissors"];

  const winnerText =
    userSelection === computerSelection
      ? "draw"
      : winner
      ? "you win"
      : "you lose";

  const pickRandomChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const handleReset = () => {
    setComputerSelection(undefined);
    setUserSelection(undefined);
    setWinner(false);
  };

  const checkWinner = () => {
    const computerChoice = pickRandomChoice();
    setComputerSelection(computerChoice);

    if (userSelection === computerChoice) return;

    if (
      (userSelection === "paper" && computerChoice === "rock") ||
      (userSelection === "rock" && computerChoice === "scissors") ||
      (userSelection === "scissors" && computerChoice === "paper")
    ) {
      setScore((prev) => prev + 1);
      setWinner(true);
    } else {
      if (score > 0) {
        setScore((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    if (userSelection !== undefined) {
      setTimeout(() => {
        checkWinner();
      }, 1000);
    }
  }, [userSelection]);

  console.log("User: ", userSelection);
  console.log("Computer: ", computerSelection);
  console.log("Score: ", score);
  console.log(winner);

  return (
    <>
      <main className="min-h-screen text-white bg-gradient-radial from-[#1f3756] to-[#141539] font-barlow-semi-condensed ">
        <ScoreBoard score={score} />

        <section className="flex flex-col h-full mt-[105px]">
          {userSelection !== undefined ? (
            <section className="flex flex-col justify-center gap-[70px] mx-5 ">
              <div className="flex flex-row items-center gap-10">
                <div className="flex flex-col items-center justify-between w-full h-full gap-7">
                  <ChoiceButton choice={userSelection} selection={true} />
                  <h2 className="tracking-widest uppercase text-md">
                    you picked
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-between w-full h-full gap-7">
                  {computerSelection ? (
                    <ChoiceButton choice={computerSelection} selection={true} />
                  ) : (
                    <div className="bg-white rounded-full px-11 py-11"></div>
                  )}
                  <h2 className="tracking-widest uppercase text-md">
                    the house picked
                  </h2>
                </div>
              </div>

              <section className="flex flex-col items-center justify-center gap-5">
                {computerSelection && (
                  <h2 className="text-6xl font-bold tracking-tight text-white uppercase">
                    {winnerText}
                  </h2>
                )}
                <button
                  onClick={handleReset}
                  className="items-center px-16 py-2.5 text-lg font-bold tracking-wider uppercase bg-white rounded-md text-dark"
                >
                  play again
                </button>
              </section>
            </section>
          ) : (
            <section className="relative flex justify-center">
              <img
                src="/images/bg-triangle.svg"
                className="absolute px-20 py-14"
              />

              <div className="z-10 flex flex-col gap-6 ">
                <div className="flex flex-row gap-14">
                  <ChoiceButton
                    choice={"paper"}
                    handleSelection={handleSelection}
                  />
                  <ChoiceButton
                    choice={"scissors"}
                    handleSelection={handleSelection}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <ChoiceButton
                    choice={"rock"}
                    handleSelection={handleSelection}
                  />
                </div>
              </div>
            </section>
          )}
          <Rules />
        </section>
      </main>
    </>
  );
}

export default App;
