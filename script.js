// get the apply button
const applyButton = document.getElementById("apply-btn");
applyButton.addEventListener("click", function () {
  // get the initialPrice
  const initialPriceText = document.getElementById("price").innerText;
  const initialPriceValue = parseFloat(initialPriceText);
  //   console.log(initialPriceValue);
  //   calculate the discount
  const discountAmount = (initialPriceValue * 30) / 100;
  // console.log(discountAmount);
  const needToPay = initialPriceValue - discountAmount;
  // console.log(needToPay);
  // get the newPrice
  const newPrice = document.getElementById("newPrice");

  // get the input field
  const inputField = document.getElementById("input-voucher");
  const inputFieldValue = inputField.value;
  inputField.value = "";
  // console.log(inputFieldValue);
  if (inputFieldValue == "DOM") {
    newPriceValue = newPrice.innerText;
    newPrice.innerText = needToPay;
    // saved price
    const savedPriceText = document.getElementById("savedPrice");
    savedPriceText.innerText = initialPriceValue - needToPay;
    // console.log("Discount will applied");
    const lineThrouhged = document.getElementById("line-throughed");
    lineThrouhged.classList.add("line-through");
  } else {
    newPrice.innerText = initialPriceValue;
    //   console.log("No Discount will applied");
  }
});
