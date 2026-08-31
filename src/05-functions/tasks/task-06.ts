/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  let a = 0;

  for (const b of sales) {
    a += b
  }

  return a

}

function findHighestTransaction(sales: number[]): number {

  let h = 0

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > h) {
      h = sales[i]
    }
  }

  return h
}

function findLowestTransaction(sales: number[]): number {

  let l = 0

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] < l) {
      l = sales[i]
    }
  }

  return l
}

function calculateAverageSale(sales: number[]): number {
  let averageSales = 0
  for (let a of sales) {
    a += averageSales
  }
  return averageSales/sales.length
}
function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let g = 0

  for (const o of sales) {
    if (o >= minimumAmount) {
      g++
    }
  }

return g

}

function ll(sales : number[]): void {
  console.log("Total sales:", calculateTotalSales(sales));
  console.log("Highest transaction:", findHighestTransaction(sales));
  console.log("Lowest transaction:", findLowestTransaction(sales));
  console.log("Average transaction:", calculateAverageSale(sales));
  console.log("Number of transactions above Rp500,000:", countLargeTransactions(sales, 500000));
}

ll(sales)
