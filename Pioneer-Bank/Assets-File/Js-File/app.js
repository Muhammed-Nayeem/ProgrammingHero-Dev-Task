//Login Button Event Handler:
const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", function () {
  const loginArea = document.getElementById("login-form-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-div");
  transactionArea.style.display = "block";
});

//Deposit Button Event Handler:
const depositButton = document.getElementById("depositButton");
depositButton.addEventListener("click", function () {
  const depositNumber = getInputNumbers("depositAmount");

  //Updated Current Deposit Amount By Calling Function:
  updatedSpanText("currentDeposit", depositNumber);
  //Updated Total Balance By Calling Function:
  updatedSpanText("currentBalance", depositNumber);

  //Again set empty input field after adding value:
  document.getElementById("depositAmount").value = "";
});

//Withdraw Button Event Handler:
const withdrawButton = document.getElementById("withdrawButton");
withdrawButton.addEventListener("click", function () {
  const withdrawNumber = getInputNumbers("withdrawAmount");

  //Updated withdraw Amount By Calling Function:
  updatedSpanText("currentWithdraw", withdrawNumber);
  //Updated withdraw Balance By Calling Function:
  updatedSpanText("currentBalance", -1 * withdrawNumber);

  //Again set empty input field after adding value:
  document.getElementById("withdrawAmount").value = "";
});

//Common Function For Common Codes:
function getInputNumbers(id) {
  const amount = document.getElementById(id).value;
  const number = parseFloat(amount);
  return number;
}

//Common Function For Common Codes:
function updatedSpanText(id, number) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalBalance = currentNumber + number;
  document.getElementById(id).innerText = totalBalance;
}
