function outputTableBody () {
   const tax_rate = prompt('Enter tax rate (0.10)');
   const shipping_threshold = prompt('Enter shipping threshold (1000)');

   /* add loop and other code here ... in this simple exercise we are not
      going to concern ourselves with minimizing globals, etc */
   let sub_total = 0;
   for (let item of cart) {
      let total = calculateTotal(item.quantity, item.product.price);
      sub_total += total;
      outputCartRow(item, total);
   }
   let tax = (tax_rate / 100) * sub_total;
   let shipping = 40;

   if (shipping_threshold < sub_total) {
      shipping = 0; 
   }

   outputTotalRow(tax, shipping, sub_total);
}
