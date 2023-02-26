const ledInput = document.getElementById("led-input");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  const handleButtonClick = () => {
    const ledCount = Number(ledInput.value);
    const buttonValue = Number(button.dataset.value);
    const totalWattage = ledCount * buttonValue;
    let message = "";

    if (ledCount <= 0) {
      result.innerText = "";
      return;
    }

    const powerCapacity = [30, 70, 100, 150, 200, 300, 400, 500];
    for (let i = 0; i < powerCapacity.length; i++) {
      if (totalWattage > powerCapacity[i] * 0.7) {
        message = `${powerCapacity[i + 1]}W 짜리 파워기를 챙기세요.`;
      } else {
        message = `${powerCapacity[i]}W 짜리 파워기를 챙기세요.`;
        break;
      }
    }

    const calculation = `${ledCount}개의 LED * ${buttonValue}W = ${totalWattage}W`;
    result.innerHTML = `${calculation}<br>${message}`;
  };

  button.addEventListener("click", handleButtonClick);
  button.addEventListener("touchstart", handleButtonClick);
});

ledInput.addEventListener("input", () => {
  result.innerText = "";
});
