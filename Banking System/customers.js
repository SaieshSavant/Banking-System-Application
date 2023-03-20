let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText );
  
  function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
  
    if (enterAmount > myAccountBalance - 5000) {
      alert(`Insufficient Balance.
      Maintain a Minimum Balence of 5000`);
    } else if (enterAmount > 25000) {
      alert("Maximum Transaction Amount Exceeded.");
    } else {
      var findUserBankAccount = enterName + "Balance";
      var finalAmount =
        parseInt(document.getElementById(findUserBankAccount).innerHTML) +
        enterAmount;
      myAccountBalance =
        parseInt(document.getElementById("myAccountBalance").innerText) -
        enterAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance;
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(` Transaction Successful!!
      Rs${enterAmount} is sent to ${enterName}'s Bank account.`);
  
    }
  }


