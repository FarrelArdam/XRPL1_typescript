/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice = 850000;
const mousePrice = 275000;
const mousePadPrice = 120000;
const mouseQty = 2;
const keyboardQty = 1;
const mousePadQty = 1;
const isPremiumMember = true;

const subtotal =
  (keyboardPrice * keyboardQty) +
  (mousePrice * mouseQty) +
  (mousePadPrice * mousePadQty);

let totalItems = 0;

for (let i = 0; i < keyboardQty; i++) {
  totalItems++;
}

for (let i = 0; i < mouseQty; i++) {
  totalItems++;
}

for (let i = 0; i < mousePadQty; i++) {
  totalItems++;
}

const hasDiscount = subtotal > 1000000;
const discount = hasDiscount ? subtotal * 0.10 : 0;
const shippingCost = isPremiumMember ? 0 : 20000;
const finalPayment = subtotal - discount + shippingCost;

console.log("Subtotal       : Rp" + subtotal.toLocaleString("id-ID"));
console.log("Total Items    :", totalItems);
console.log("Discount       : Rp" + discount.toLocaleString("id-ID"));
console.log("Free Shipping  :", isPremiumMember);
console.log("Shipping Cost  : Rp" + shippingCost.toLocaleString("id-ID"));
console.log("Final Payment  : Rp" + finalPayment.toLocaleString("id-ID"));