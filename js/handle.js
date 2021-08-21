//buying memory
document.getElementById('memory-16').addEventListener('click', function () {

    const extra = document.getElementById('extra-memory-cost');
    const extraParse = 180;
    document.getElementById('extra-memory-cost').innerText = extraParse;
    calculateTotal();
})

document.getElementById('memory-8').addEventListener('click', function () {
    const cost8 = 0;
    document.getElementById('extra-memory-cost').innerText = cost8;
    calculateTotal();
})

//buying Storage

document.getElementById('storage-256').addEventListener('click', function () {
    const cost256 = 0;
    document.getElementById('extra-storage-cost').innerText = cost256;
    calculateTotal();
})

document.getElementById('storage-512').addEventListener('click', function () {
    const cost512 = 100;
    document.getElementById('extra-storage-cost').innerText = cost512;
    calculateTotal();
})

document.getElementById('storage-1TB').addEventListener('click', function () {
    const cost1TB = 180;
    document.getElementById('extra-storage-cost').innerText = cost1TB;
    calculateTotal();
})


//shipping cost

document.getElementById('free-delivery').addEventListener('click', function () {
    const freecost = 0;
    document.getElementById('delivery-cost').innerText = freecost;
    calculateTotal();
})

document.getElementById('costly-delivery').addEventListener('click', function () {
    const halka_cost = 20;
    document.getElementById('delivery-cost').innerText = halka_cost;

    const totalcost = document.getElementById('delivery-cost');
    calculateTotal();

})


//function for calculating total
//calculate total

function calculateTotal() {
    const bestTotal = document.getElementById('best-price');
    const newbestTotal = parseInt(bestTotal.innerText);

    const extramemory = document.getElementById('extra-memory-cost');
    const newextramemory = parseInt(extramemory.innerText);

    const extrastorage = document.getElementById('extra-storage-cost');
    const newextrastorage = parseInt(extrastorage.innerText);

    const deliverycost = document.getElementById('delivery-cost');
    const newdeliverycost = parseInt(deliverycost.innerText);

    const total = newbestTotal + newextramemory + newextrastorage + newdeliverycost;

    document.getElementById('total-cost').innerText = total;
    document.getElementById('grand-total').innerText = total;
}

//bonus part 
//promo

document.getElementById('submit').addEventListener('click', function () {
    const promoField = document.getElementById('promo-code');
    const promo = promoField.value;

    if (promo == 'stevekaku') {
        const getTotal = document.getElementById('grand-total').innerText;
        let newTotal = parseInt(getTotal);
        newTotal = newTotal - (newTotal * 0.20);
        document.getElementById('grand-total').innerText = newTotal;
        promoField.value = "";
        const button = document.getElementById('submit');
        button.disabled = true;
    }
})

