// Sample book data with initial suggestions and categorization
const books = [
    { title: "Joyful Journeys: A Guide to a Happy Life", author: "Maya Sunshine", category: "love" },
    { title: "The Happiness Blueprint: Crafting a Fulfilling Existence", author: "Oliver Serenity", category: "love" },
    { title: "Radiant Living: Embracing Positivity Every Day", author: "Grace Harmony", category: "love" },
    { title: "Serene Souls: Finding Happiness Amidst Life's Challenges", author: "Ethan Tranquil", category: "adventure" },
    { title: "The Art of Blissful Living: A Handbook for Joy", author: "Aurora Joy", category: "adventure" },
    { title: "Sunshine Moments: Cultivating Happiness in Daily Life", author: "Stella Radiance", category: "adventure" },
    { title: "Thriving in Tranquility: A Path to Lasting Happiness", author: "Benjamin Bliss", category: "self-help" },
    { title: "The Gratitude Chronicles: Nourishing a Happy Heart", author: "Lily Grateful", category: "self-help" },
    { title: "Embracing Eudaimonia: A Quest for True Well-Being", author: "Felix Flourish", category: "self-help" },
    { title: "Dancing with Joy: Steps to a Happy and Fulfilled Life", author: "Olivia Delight", category: "self-help" },
    { title: "Adventures in Wonderland", author: "Lewis Carroll", category: "adventure" },
    { title: "Love in the Time of Cholera", author: "Gabriel García Márquez", category: "love" },
    { title: "The Five People You Meet in Heaven", author: "Mitch Albom", category: "life" }
];

const borrowedBooks = [];

// Function to display books
function displayBooks(booksToDisplay) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '<h2>Book List</h2>';

    if (booksToDisplay.length === 0) {
        bookList.innerHTML += '<p>No books available</p>';
    } else {
        booksToDisplay.forEach((book, index) => {
            bookList.innerHTML += `
                <div class="book">
                    <p>${book.title} by ${book.author}</p>
                    <button class="borrowButton" onclick="borrowBook(${index})">Borrow</button>
                </div>`;
        });
    }
}

// Function to filter books by category and search query
function filterBooks() {
    const categoryFilter = document.getElementById('categoryFilter').value.toLowerCase(); // Fix: Lowercase the input
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();

    let filteredBooks;
    if (categoryFilter === 'all') {
        // If filtering by all categories, consider all books
        filteredBooks = books;
    } else {
        // Otherwise, filter by the selected category
        filteredBooks = books.filter(book => book.category.toLowerCase() === categoryFilter);
    }

    // Filter based on the search query
    filteredBooks = filteredBooks.filter(book => {
        const titleMatch = book.title.toLowerCase().includes(searchQuery);
        const authorMatch = book.author.toLowerCase().includes(searchQuery);
        return titleMatch || authorMatch;
    });

    displayBooks(filteredBooks); // Display filtered books
}

// Function to borrow a book
function borrowBook(index) {
    const bookToBorrow = books[index];
    borrowedBooks.push(bookToBorrow);
    updateBorrowingHistory();
}

// Function to update borrowing history
function updateBorrowingHistory() {
    const borrowedBooksList = document.getElementById('borrowedBooks');
    borrowedBooksList.innerHTML = '';
    
    if (borrowedBooks.length === 0) {
        borrowedBooksList.innerHTML += '<p>No books borrowed</p>';
    } else {
        borrowedBooks.forEach(book => {
            borrowedBooksList.innerHTML += `<li>${book.title} by ${book.author}</li>`;
        });
    }
}

// Initial display of all books
displayBooks(books);
