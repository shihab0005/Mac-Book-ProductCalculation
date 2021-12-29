// function MemoryCost(amount) {
//     // const memoryCost = document.getElementById('Ex-memory-cost');
//     // const memoryAmount = memoryCost.innerText;
//     // memoryCost.innerText = amount;

// }
// function SsdCost(amount) {
//     // const ssdCost = document.getElementById('Ex-ssd-cost');
//     // const ssdAmount = parseInt(amount);
//     // ssdCost.innerText = ssdAmount;

// }

// function delivaryCost(amount) {
//     // const paidDelivary = document.getElementById('Delivary-cost');
//     // const paidDelivaryamount = parseInt(amount);
//     // paidDelivary.innerText = paidDelivaryamount;

// }
document.getElementById('btn-16gb').addEventListener('click', function () {

    // const memory16gb = MemoryCost(180);

    const memory16gb = document.getElementById('Ex-memory-cost');
    const memory16bbAMount = 180;
    memory16gb.innerText = memory16bbAMount;


    // const memory16Amount = parseInt(memory16Text);

    // const previous = document.getElementById('sub-total');
    // const previousTotalText = previous.innerText;
    // const previousTotal = parseInt(previousTotalText);
    // previous.innerText = previousTotal;

    const totalCost = document.getElementById('total-cost');
    const totalCostAMount = parseInt(totalCost.innerText)
    const total = totalCostAMount + memory16bbAMount;
    totalCost.innerText = total;



});
document.getElementById('btn-8gb').addEventListener('click', function () {

    // MemoryCost(0);
    const memory8gb = document.getElementById('Ex-memory-cost');
    const memory8bbAMount = 0;
    memory8gb.innerText = memory8bbAMount;


    // const memory16Amount = parseInt(memory16Text);

    // const previous = document.getElementById('sub-total');
    // const previousTotalText = previous.innerText;
    // const previousTotal = parseInt(previousTotalText);
    // previous.innerText = previousTotal;

    const totalCost = document.getElementById('total-cost');
    const totalCostAMount = parseInt(totalCost.innerText)
    const total = totalCostAMount + memory8bbAMount;
    totalCost.innerText = totalCostAMount;





});

document.getElementById('ssd-256gb').addEventListener('click', function () {


    const ssd256gb = document.getElementById('Ex-ssd-cost');
    const ssd256gbAMount = 0;
    ssd256gb.innerText = ssd256gbAMount;


    // const memory16Amount = parseInt(memory16Text);

    // const previous = document.getElementById('sub-total');
    // const previousTotalText = previous.innerText;
    // const previousTotal = parseInt(previousTotalText);

    const totalCost = document.getElementById('total-cost');
    const totalCostAMount = parseInt(totalCost.innerText)
    const total = totalCostAMount + ssd256gbAMount;
    totalCost.innerText = totalCostAMount;
});
document.getElementById('ssd-512gb').addEventListener('click', function () {

    const ssd512gb = document.getElementById('Ex-ssd-cost');
    const ssd512gbAMount = 100;
    ssd512gb.innerText = ssd512gbAMount;


    // const memory16Amount = parseInt(memory16Text);

    // const previous = document.getElementById('sub-total');
    // const previousTotalText = previous.innerText;
    // const previousTotal = parseInt(previousTotalText);

    const totalCost = document.getElementById('total-cost');
    const totalCostAMount = parseInt(totalCost.innerText)
    const total = totalCostAMount + ssd512gbAMount;
    totalCost.innerText = total;
});
document.getElementById('ssd-1td').addEventListener('click', function () {

    const ssd1tdgb = document.getElementById('Ex-ssd-cost');
    const ssd1tdgbAMount = 180;
    ssd1tdgb.innerText = ssd1tdgbAMount;


    // const memory16Amount = parseInt(memory16Text);

    // const previous = document.getElementById('sub-total');
    // const previousTotalText = previous.innerText;
    // const previousTotal = parseInt(previousTotalText);

    const totalCost = document.getElementById('total-cost');
    const total = ssd1tdgbAMount + previousTotal;
    totalCost.innerText = total;
});

document.getElementById('free-delivary').addEventListener('click', function () {

    const delivaryCost = document.getElementById('Delivary-cost');
    const delivaryCostAMount = 0;
    delivaryCost.innerText = delivaryCostAMount;


    // const memory16Amount = parseInt(memory16Text);

    const previous = document.getElementById('sub-total');
    const previousTotalText = previous.innerText;
    const previousTotal = parseInt(previousTotalText);

    const totalCost = document.getElementById('total-cost');
    const total = delivaryCostAMount + previousTotal;
    totalCost.innerText = total;
});
document.getElementById('paid-delivary').addEventListener('click', function () {

    const delivaryPaidCost = document.getElementById('Delivary-cost');
    const delivaryCostAMount = 20;
    delivaryPaidCost.innerText = delivaryCostAMount;


    // const memory16Amount = parseInt(memory16Text);

    const previous = document.getElementById('sub-total');
    const previousTotalText = previous.innerText;
    const previousTotal = parseInt(previousTotalText);

    const totalCost = document.getElementById('total-cost');
    const total = delivaryCostAMount + previousTotal;
    totalCost.innerText = total;
});

// function totalCost() {
//     const totalCostAmount = document.getElementById('total-cost');
//     const totalCostValue = parseInt(totalCostAmount.innerText);
//     const memoryCostTotal = MemoryCost(180) + totalCostValue;
//     totalCostAmount.innerText = memoryCostTotal;
// }

// function calculateTotal() {

//     const phonetotal = getInputValue('phone') * 1219;
//     const caseTotal = getInputValue('case') * 59;
//     const subTotal = phonetotal + caseTotal;
//     const tax = subTotal / 10;
//     const total = subTotal + tax;
//     //update in sub total&tax and total value
//     document.getElementById('sub-total').innerText = subTotal;
//     document.getElementById('tax-amount').innerText = tax;
//     document.getElementById('total').innerText = total;


// }