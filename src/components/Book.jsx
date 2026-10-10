function Book({ books }) {
  return (
    <section className="books-section">
      <h2>Daftar Buku ({books.length})</h2>

      <div className="book-grid">
        {books.map((book) => (
          <article className="book-card" key={book.id}>
            <a href={book.image} target="_blank" rel="noreferrer">
             <img src={book.image} alt={book.title} />
                </a>
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>Penulis: {book.author}</p>
              <p>Tahun: {book.year}</p>
              <p>{book.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Book;