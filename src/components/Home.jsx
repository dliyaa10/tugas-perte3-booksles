
function Home({ books }) {
  return (
    <section className="home-page">
      <h2>Selamat Datang di BookSales</h2>
      <p>
        Temukan berbagai buku untuk menambah pengetahuan dan
        mendukung proses belajarmu.
      </p>

      <h2>Buku Pilihan</h2>

      <div className="book-grid">
        {books.slice(0, 3).map((book) => (
          <article className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />

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

export default Home;
