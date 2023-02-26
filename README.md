<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>파워기 계산기</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="LEDCalcGP.css" />
  </head>
  <body>
    <div class="container">
      <h1>파워기 계산기</h1>
      <input type="number" id="led-input" placeholder="LED 갯수를 입력하세요" />
      <div class="buttons">
        <button class="button" data-value="0.24">줄엘이디</button>
        <button class="button" data-value="0.24">PCB</button>
        <button class="button" data-value="0.48">미니</button>
        <button class="button" data-value="0.48">미들2구</button>
        <button class="button" data-value="0.72">3구</button>
      </div>
      <p id="result"></p>
    </div>
    <script src="LEDCalcGP.js"></script>
  </body>
</html>
