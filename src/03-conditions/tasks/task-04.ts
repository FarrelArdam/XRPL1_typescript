/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName : string = "Nadia Putri"
const isPremium : boolean = true
const roomAvailable : boolean = false

if (roomAvailable) {
    if (isPremium) {
        console.log("Room is Available")
        console.log("You received free room upgrade")
    } else {
        console.log ("Room is Available")
        console.log("You received the reserved room only")
    }
} else {
    if (isPremium) {
        console.log("Room is not available")
        console.log("You are placed in the priority waiting list")
    } else {
        console.log("Room is not available")
    }
} 