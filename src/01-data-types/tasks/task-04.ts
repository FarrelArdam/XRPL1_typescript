/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    isbn: string;
    title: string;
    author: string;
    totalPages: number;
    category: string;
    isAvailable: boolean;
};

const book1: Book = {
    isbn: "978-623-88296-9-9",
    title: "ILY",
    author: "Tere Liye",
    totalPages: 569,
    category: "Fiction Adventure",
    isAvailable: true
};

const book2: Book = {
    isbn: " 979-3062-79-7",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    totalPages: 529,
    category: "Sastra",
    isAvailable: false
};

const book3: Book = {
    isbn: "978-602-424-694-5",
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    totalPages: 320,
    category: "Historical Fiction",
    isAvailable: true
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);