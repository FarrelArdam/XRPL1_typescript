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

const keyboardPrice : number = 850000
const mousePrice : number = 275000
const mousepadPrice : number = 120000
const keyboardQTY : number = 1
const mouseQTY : number = 2
const mousepadQTY : number = 1

const isPremium : boolean = true

const subtotal =
(keyboardPrice * keyboardQTY) +
(mousePrice * mouseQTY) +
(mousepadPrice * mousepadQTY);

const discount : number = subtotal * 0.1
const totalItems : number = keyboardQTY + mouseQTY + mousepadQTY

const finalPayment : number = subtotal > 1000000 ? subtotal - discount : subtotal

console.log("Subtotal:", subtotal)
console.log("Total Items:", totalItems)
console.log("Discount Applied:", subtotal > 1000000 ? "Yes" : "No")
console.log("Final Payment:", finalPayment)
console.log("Premiun:", isPremium ? "FreeShipping" : "No FreeShipping")
