/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const internetPrice : number = 8000
const discount : number = 0.15
const hour : number = 7
const minute : number = 35
const totalminute : number = (hour * 60) + minute
const remainingMinute : number = totalminute % 60
const chargehour : number = Math.ceil (totalminute / 60)
const totalpayment : number = internetPrice * chargehour
const discountAmmount : number = totalpayment * discount
const finalPayment : number = totalpayment - discountAmmount

console.log ("Total Playing time in minutes : ", totalminute)
console.log ("Remaining Minutes : ", remainingMinute)
console.log ("Total Billed Hours : ", chargehour)
console.log ("Total Payment Before Discount : ", totalpayment)
console.log ("Discount Amount : ", discountAmmount)
console.log ("Final Payment : ", finalPayment)
