/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */

class Book {
    ISBN: string;
    title: string;
    author: string;
    totalPages: number;
    private status: string;

    constructor(
        ISBN: string,
        title: string,
        author: string,
        totalPages: number,
        status: string
    ) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;
        this.status = status;
    }

    borrow(): void {
        if (this.status === "available") {
            this.status = "borrowed";
            console.log("Book borrowed successfully.");
        } else {
            console.log("Book is already borrowed.");
        }
    }

    returnBook(): void {
        if (this.status === "borrowed") {
            this.status = "available";
            console.log("Book returned successfully.");
        } else {
            console.log("Book is already available.");
        }
    }

    showInfo(): void {
        console.log("ISBN:", this.ISBN);
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Total Pages:", this.totalPages);
        console.log("Status:", this.status);
    }

    isAvailable(): boolean {
        return this.status === "available";
    }
}

const book1 = new Book(
    "9781234567890",
    "ILY",
    "Tere Liye",
    380,
    "available"
);

const book2 = new Book(
    "9780987654321",
    "Laskar Pelangi",
    "Nidji",
    534,
    "available"
);

book1.showInfo();

console.log("--------------------");

book2.showInfo();

console.log("--------------------");

book1.borrow();

console.log("Book 1 available:", book1.isAvailable());

console.log("--------------------");

book1.borrow();

console.log("--------------------");

book1.returnBook();

console.log("Book 1 available:", book1.isAvailable());

console.log("--------------------");

book1.returnBook();