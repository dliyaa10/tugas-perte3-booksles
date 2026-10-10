import { useState } from "react";
import booksData from "./Utils/books";
import Home from "./components/Home";
import Book from "./components/Book";
import "./App.css";

function App() {
  const [books, setBooks] = useState(booksData);
  const [page, setPage] = useState("home");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      alert("Judul dan penulis buku harus diisi!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      year: new Date().getFullYear(),
      description: "Buku tambahan.",
      image: "https://placehold.co/300x400?text=Buku+Baru",
    };

    setBooks([...books, newBook]);
setTitle("");
setAuthor("");
alert("Buku berhasil ditambahkan!");
  };
  return (
    <div className="app">
      
<header className="header">
  <h1>BookSales</h1>
  <p>Koleksi Buku Pilihan untuk Belajar</p>

  <nav className="navigation">
    <button
      className={page === "home" ? "active" : ""}
      onClick={() => setPage("home")}
    >
      Home
    </button>

    <button
      className={page === "book" ? "active" : ""}
      onClick={() => setPage("book")}
    >
      Book
    </button>
  </nav>
</header>


      <main className="container">
        {page === "home" && (
          <>
            <Home books={books} />

            <section className="form-section">
              <h2>Tambah Buku</h2>

              <form onSubmit={addBook}>
                <input
                  type="text"
                  placeholder="Judul buku"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Nama penulis"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />

                <button type="submit">Tambah Buku</button>
              </form>
            </section>

            <p>Total koleksi buku: {books.length}</p>
          </>
        )}

        {page === "book" && <Book books={books} />}
      </main>
    </div>
  );
}

export default App;