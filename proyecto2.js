// EN ESTE PROYECTO SE CREARÁ UN CATÁLOGO DE LIBROS. DONDE SE PRETENDE TRABAJAR Y APRENDER LOS ARRAY METHODS.

const bookCatalog = [
    {
        title: "1984",
        genre: "Dystopian",
        releaseYear: 1949,
        read: true
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        releaseYear: 1937,
        read: false
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        releaseYear: 1960,
        read: true
    },
    {
        title: "The Great Gatsby",
        genre: "Classic",
        releaseYear: 1925,
        read: false
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        releaseYear: 1813,
        read: true
    },
    {
        title: "The Catcher in the Rye",
        genre: "Coming-of-Age",
        releaseYear: 1951,
        read: false
    },
    {
        title: "Brave New World",
        genre: "Dystopian",
        releaseYear: 1932,
        read: true
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        releaseYear: 1954,
        read: false
    },
    {
        title: "Fahrenheit 451",
        genre: "Science Fiction",
        releaseYear: 1953,
        read: true
    },
    {
        title: "The Picture of Dorian Gray",
        genre: "Gothic Fiction",
        releaseYear: 1890,
        read: false
    },
    {
        title: "Jane Eyre",
        genre: "Romance",
        releaseYear: 1847,
        read: true
    },
    {
        title: "The Alchemist",
        genre: "Adventure",
        releaseYear: 1988,
        read: false
    },
    {
        title: "Animal Farm",
        genre: "Political Satire",
        releaseYear: 1945,
        read: true
    },
    {
        title: "The Road",
        genre: "Post-Apocalyptic",
        releaseYear: 2006,
        read: false
    },
    {
        title: "The Shining",
        genre: "Horror",
        releaseYear: 1977,
        read: true
    },
    {
        title: "The Martian",
        genre: "Science Fiction",
        releaseYear: 2011,
        read: false
    },
    {
        title: "Dune",
        genre: "Science Fiction",
        releaseYear: 1965,
        read: true
    },
    {
        title: "The Name of the Wind",
        genre: "Fantasy",
        releaseYear: 2007,
        read: false
    },
    {
        title: "The Silent Patient",
        genre: "Psychological Thriller",
        releaseYear: 2019,
        read: true
    },
    {
        title: "The Hunger Games",
        genre: "Young Adult",
        releaseYear: 2008,
        read: false
    }
];

function findForTitle(title) {

    if(typeof title !== "string") return "Insert a valid title.";

    const search = title.toLowerCase();

    const result = bookCatalog.filter( book => book.title.toLowerCase().includes(search) ); // Entrega un array de objetos.

    return result

}

console.log(findForTitle("the"));