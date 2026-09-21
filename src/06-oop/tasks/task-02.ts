/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */

class DigitalWallet {
    walletId: string;
    owner: string;
    private balance: number;

    constructor(
        walletId: string,
        owner: string,
        balance: number
    ) {
        this.walletId = walletId;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit berhasil: Rp${amount}`);
        } else {
            console.log("Deposit gagal: jumlah harus lebih dari 0.");
        }
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Withdraw gagal: jumlah harus lebih dari 0.");
        } else if (amount > this.balance) {
            console.log("Withdraw gagal: saldo tidak mencukupi.");
        } else {
            this.balance -= amount;
            console.log(`Withdraw berhasil: Rp${amount}`);
        }
    }

    getBalance(): number {
        return this.balance;
    }

    showWalletInfo(): void {
        console.log("Wallet ID:", this.walletId);
        console.log("Owner:", this.owner);
        console.log("Balance:", this.balance);
    }
}

const wallet = new DigitalWallet(
    "WAL001",
    "Harry Maguire",
    500000
);

wallet.showWalletInfo();

console.log("--------------------");

wallet.deposit(200000);

console.log("Current Balance:", wallet.getBalance());

console.log("--------------------");

wallet.withdraw(100000);

console.log("Current Balance:", wallet.getBalance());

console.log("--------------------");

wallet.withdraw(1000000);

console.log("--------------------");

wallet.deposit(-50000);

console.log("--------------------");

wallet.showWalletInfo();