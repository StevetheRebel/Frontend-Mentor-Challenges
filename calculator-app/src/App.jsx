import React, { useEffect, useState } from "react";

function App() {
  const year = new Date().getFullYear();
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [overwrite, setOverwrite] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(1);

  useEffect(() => {
    document.documentElement.className = `theme-${currentTheme}`;
  }, [currentTheme]);

  const handleThemeChange = (themeNumber) => {
    setCurrentTheme(themeNumber);
  };

  const key = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];

  const handleNumberInput = (number) => {
    if (overwrite) {
      setCurrentValue(number);
      setOverwrite(false);
    } else {
      setCurrentValue(`${currentValue}${number}`);
    }
  };

  const handleDecimal = () => {
    if (overwrite) {
      setCurrentValue("0.");
      setOverwrite(false);
      return;
    }

    if (!currentValue.includes(".")) {
      setCurrentValue(`${currentValue}.`);
    }
  };

  const handleOperation = (op) => {
    if (currentValue === "0" && op === "-") {
      setCurrentValue("-");
      setOverwrite(false);
      return;
    }

    const value = parseFloat(currentValue);

    if (previousValue == null) {
      setPreviousValue(value);
      setOperation(op);
    } else if (previousValue == null) {
      setOperation(op);
    } else if (operation) {
      if (!overwrite) {
        const result = calculate();
        setPreviousValue(result);
        setCurrentValue(String(result));
      }
      setOperation(op);
    }

    setOverwrite(true);
  };

  const calculate = () => {
    const current = parseFloat(currentValue);
    const prev = parseFloat(previousValue);

    if (isNaN(prev)) return current;

    switch (operation) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "x":
        return prev * current;
      case "/":
        return prev / current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation == null) return;

    const result = calculate();
    setCurrentValue(String(result));
    setPreviousValue(null);
    setOperation(null);
    setOverwrite(true);
  };

  const handleReset = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperation(null);
    setOverwrite(true);
  };

  const handleDelete = () => {
    if (overwrite) return;

    if (currentValue.length === 1) {
      setCurrentValue("0");
      setOverwrite(true);
    } else {
      setCurrentValue(currentValue.slice(0, -1));
    }
  };

  const handleButtonClick = (value) => {
    if (value >= "0" && value <= "9") {
      handleNumberInput(value);
    } else if (value === ".") {
      handleDecimal();
    } else if (["+", "-", "x", "/"].includes(value)) {
      handleOperation(value);
    } else if (value === "=") {
      handleEquals();
    } else if (value === "RESET") {
      handleReset();
    } else if (value === "DEL") {
      handleDelete();
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex flex-col">
      {/* Spacer that grows to push content center */}
      <div className="flex-grow flex items-center justify-center p-2 [@media(min-width:360px)]:items-start md:items-center md:h-[70dvh]  ">
        {/* app container */}
        <div className=" h-full w-full flex flex-col gap-2 [@media(min-width:360px)]:gap-6 [@media(min-width:360px)]:mt-4 [@media(min-width:400px)]:mt-8 [@media(min-width:400px)]:gap-8 md:w-[60%] md:justify-center lg:!mt-0 lg:w-[40%] lg:max-w-[430px]  ">
          {/* header */}
          <header className="flex justify-between items-center w-full ">
            <h1 className="h1-Text text-[var(--text-main)] ">calc</h1>
            {/* theme toggle container */}
            <div className="flex items-end gap-2 ">
              <p className="uppercase  font-bold tracking-widest text-[var(--text-main)] pb-1 text-[10px] [@media(min-width:400px)]:text-sm ">
                theme
              </p>
              <div className="">
                <div className="flex text-[10px] justify-around text-[var(--text-main)] ">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>{" "}
                </div>
                <div
                  className="w-full bg-[var(--bg-toggle)] rounded-full flex flex-grow items-center justify-around gap-1 p-1 [@media(min-width:400px)]:px-2 hover:cursor-pointer "
                  onClick={() => {
                    const nextTheme = currentTheme === 3 ? 1 : currentTheme + 1;
                    handleThemeChange(nextTheme);
                  }}
                >
                  {[1, 2, 3].map((themeNumber, index) => (
                    <div
                      key={index}
                      className={`h-5 aspect-square rounded-full [@media(min-width:400px)]:h-4 ${
                        currentTheme === themeNumber
                          ? "bg-[var(--key-accent-bg)]"
                          : ""
                      } `}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleThemeChange(themeNumber);
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Display */}
          <div className="w-full h-16 [@media(min-width:360px)]:h-32 bg-[var(--bg-screen)] rounded-xl [@media(min-width:400px)]:h-44 lg:!h-32 text-[var(--text-main)] px-2 py-1 [@media(min-width:360px)]:px-4 [@media(min-width:360px)]:py-2 [@media(min-width:400px)]:p-6  ">
            <div className="text-[var(--text-main)] text-left text-base [@media(min-width:360px)]:text-3xl [@media(min-width:400px)]:text-5xl  ">
              {previousValue} {operation}{" "}
            </div>
            <div className="text-[var(--text-main)] text-right text-2xl [@media(min-width:360px)]:text-5xl [@media(min-width:400px)]:text-7xl ">
              {currentValue}
            </div>
          </div>

          {/* keys container */}
          <div className="bg-[var(--bg-screen)]/50 py-4 rounded-lg flex flex-col gap-1 [@media(min-width:360px)]:px-2 md:!p-6 md:gap-4 lg:!gap-4 ">
            {/* container 1 */}
            <div className="grid grid-cols-4 gap-3 px-2 md:gap-4">
              {key.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(item)}
                  className={`${
                    item === "DEL"
                      ? "bg-[var(--key-bg)] shadow-[0_4px_0_var(--key-shadow)]"
                      : "bg-[var(--key-light-bg)] shadow-[0_4px_0_var(--key-light-shadow)]"
                  } px-2 py-1 rounded font-bold [@media(min-width:360px)]:py-2 text-base [@media(min-width:360px)]:text-lg [@media(min-width:400px)]:text-xl hover:cursor-pointer ${
                    currentTheme == 1
                      ? "text-[var(--text-button)]"
                      : "text-[var(--text-main)] "
                  } `}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* container 2 */}
            <div className="grid grid-cols-2 gap-3 px-2 mt-2 md:gap-4">
              {["RESET", "="].map((label, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(label)}
                  className={`${
                    label === "RESET"
                      ? "bg-[var(--key-bg)] shadow-[0_4px_0_var(--key-shadow)] text-[var(--text-button)]"
                      : "bg-[var(--key-accent-bg)] shadow-[0_4px_0_var(--key-accent-shadow)]  "
                  } px-4 py-3 rounded text-[var(--text-button)] font-bold tracking-widest text-base [@media(min-width:360px)]:py-4 [@media(min-width:400px)]:text-xl hover:cursor-pointer `}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* app footer */}
      <footer className="w-full h-12 bg-[var(--bg-screen)] flex items-center">
        <p className="w-full text-sm px-4 text-center text-[var(--text-main)]">
          Challenge by{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            Frontend Mentor
          </a>{" "}
          Copyrights &copy;{year}{" "}
          <a
            href="https://github.com/StevetheRebel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rebel
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
