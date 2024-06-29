const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const Product = require("./models/books.model");

dotenv.config(); // Load environment variables


const books = [
  {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      description: "A novel set in the American South during the 1930s, addressing issues of racism and injustice."
  },
  {
      title: "1984",
      author: "George Orwell",
      genre: "Science Fiction",
      description: "A dystopian novel set in a totalitarian society, exploring themes of surveillance and government control."
  },
  {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      description: "A novel depicting the extravagant lifestyles of wealthy Americans during the Jazz Age."
  },
  {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      description: "A romantic novel set in early 19th century England, exploring societal expectations and love."
  },
  {
      title: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure",
      description: "An epic tale of obsession and revenge, centered around Captain Ahab's pursuit of the elusive white whale."
  },
  {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Coming-of-Age",
      description: "A novel narrated by Holden Caulfield, a disillusioned teenager grappling with adolescence and societal norms."
  },
  {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      genre: "Gothic Fiction",
      description: "A novel following the life of the orphaned Jane Eyre, exploring themes of morality, love, and independence."
  },
  {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      description: "A fantasy novel about Bilbo Baggins, a hobbit who embarks on a quest to reclaim treasure guarded by a dragon."
  },
  {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      description: "The first book in the Harry Potter series, chronicling the adventures of a young wizard, Harry Potter."
  },
  {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      description: "An epic trilogy following Frodo Baggins and his companions' journey to destroy the One Ring and defeat the Dark Lord Sauron."
  },
  {
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Science Fiction",
      description: "A dystopian novel depicting a future society where people are engineered and controlled through technology and conditioning."
  },
  {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      genre: "Psychological Fiction",
      description: "A novel exploring morality, guilt, and redemption through the story of Raskolnikov, a troubled and impoverished student."
  },
  {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      genre: "Gothic Fiction",
      description: "A philosophical novel about a young man, Dorian Gray, who remains youthful while a portrait of him ages and reflects his moral decline."
  },
  {
      title: "The Road",
      author: "Cormac McCarthy",
      genre: "Dystopian Fiction",
      description: "A post-apocalyptic novel following a father and son's journey through a desolate landscape, exploring themes of survival and hope."
  },
  {
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      genre: "Fantasy",
      description: "A series of seven high fantasy novels set in the fictional realm of Narnia, featuring various adventures and allegorical themes."
  },
  {
      title: "Frankenstein",
      author: "Mary Shelley",
      genre: "Gothic Fiction",
      description: "A novel exploring themes of creation, humanity, and the consequences of scientific ambition, as Dr. Frankenstein creates a living being."
  },
  {
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      genre: "Classic",
      description: "A tragic novel following the life of Anna Karenina, exploring themes of love, infidelity, and social norms in 19th-century Russia."
  },
  {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Science Fiction",
      description: "The first book in a dystopian trilogy, where teenagers are forced to participate in a televised fight to the death."
  },
  {
      title: "The Road to Wigan Pier",
      author: "George Orwell",
      genre: "Non-Fiction",
      description: "Orwell's firsthand account of poverty in Northern England during the 1930s, exploring social and economic conditions."
  },
  {
      title: "Wuthering Heights",
      author: "Emily Brontë",
      genre: "Gothic Fiction",
      description: "A novel set in the Yorkshire moors, exploring passionate and destructive love between Catherine Earnshaw and Heathcliff."
  },
  {
      title: "Slaughterhouse-Five",
      author: "Kurt Vonnegut",
      genre: "Science Fiction",
      description: "An anti-war novel blending satire, time travel, and the experiences of Billy Pilgrim during World War II."
  }
];

console.log(books);


async function seedDB() {
    await connectDB(); // Connect to the database
    try {
      await Product.deleteMany({});
      await Product.insertMany(books);
      console.log("Database seeded");
    } catch (err) {
      console.error(err);
    } finally {
      mongoose.connection.close(); // Close the database connection
    }
  }
  
  seedDB();