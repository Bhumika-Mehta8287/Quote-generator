// Array of 20 quotes
const quotes = [
  { text: "Believe in yourself and all that you are.", author: "Christian Larson" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" },
  { text: "Great things never come from comfort zones.", author: "Anonymous" },
  { text: "Don't stop when you're tired. Stop when you're done.", author: "Marilyn Monroe" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "George Lorimer" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "Little things make big days.", author: "Isabel Marant" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Keep going. Everything you need will come to you.", author: "Unknown" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" }
];

// Get DOM elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteText.innerText = `"${quote.text}"`;
  authorText.innerText = `- ${quote.author}`;
}

// Event listener for new quote button
newQuoteBtn.addEventListener("click", () => {
  getRandomQuote();
});
