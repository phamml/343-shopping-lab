/* define your functions here */
function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(item, total) {
    const { 
        product: {title, filename, price}, 
        quantity 
    } = item;

    const row = 
        `<tr>
            <td><img src="images/${filename}"></td>
            <td>${title}</td>
            <td>${quantity}</td>
            <td>$${price.toFixed(2)}</td>
            <td>$${total.toFixed(2)}</td>
        </tr>`;
    
    document.write(row);
}

function outputTotalRow(tax, sub_total) {
    let grand_total = tax + sub_total;
    const row = 
        `<tr class="totals">
            <td colspan="4">Subtotal</td>
            <td>$${sub_total.toFixed(2)}</td>
        </tr>
        <tr class="totals">
            <td colspan="4">Tax</td>
            <td>$${tax.toFixed(2)}</td>
        </tr>
        <tr class="totals">
            <td colspan="4">Shipping</td>
            <td>$0.00</td>
        </tr>
        <tr class="totals">
            <td colspan="4" class="focus">Grand Total</td>
            <td class="focus">$${grand_total.toFixed(2)}</td>
        </tr>`;
    
    document.write(row);
    
}

function outputTableBody() {
    let grand_total = 0;
    for (let item of cart) {
        let total = calculateTotal(item.quantity, item.product.price);
        grand_total += total;
        outputCartRow(item, total);
    }
    let tax = 55.00;
    outputTotalRow(tax, grand_total);
}







        
