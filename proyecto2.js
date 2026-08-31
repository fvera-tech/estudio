// EN ESTE PROYECTO SE CREARÁ UN CATÁLOGO DE LIBROS. DONDE SE PRETENDE TRABAJAR Y APRENDER LOS ARRAY METHODS.

const bookCatalog = [
    {
        title: "1984",
        genre: "Dystopian",
        releaseYear: 1949,
        read: true,
        rating: 9
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        releaseYear: 1937,
        read: false,
        rating: 9
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        releaseYear: 1960,
        read: true,
        rating: 9
    },
    {
        title: "The Great Gatsby",
        genre: "Classic",
        releaseYear: 1925,
        read: false,
        rating: 8
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        releaseYear: 1813,
        read: true,
        rating: 9
    },
    {
        title: "The Catcher in the Rye",
        genre: "Coming-of-Age",
        releaseYear: 1951,
        read: false,
        rating: 8
    },
    {
        title: "Brave New World",
        genre: "Dystopian",
        releaseYear: 1932,
        read: true,
        rating: 9
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        releaseYear: 1954,
        read: false,
        rating: 10
    },
    {
        title: "Fahrenheit 451",
        genre: "Science Fiction",
        releaseYear: 1953,
        read: true,
        rating: 9
    },
    {
        title: "The Picture of Dorian Gray",
        genre: "Gothic Fiction",
        releaseYear: 1890,
        read: false,
        rating: 8
    },
    {
        title: "Jane Eyre",
        genre: "Romance",
        releaseYear: 1847,
        read: true,
        rating: 9
    },
    {
        title: "The Alchemist",
        genre: "Adventure",
        releaseYear: 1988,
        read: false,
        rating: 7
    },
    {
        title: "Animal Farm",
        genre: "Political Satire",
        releaseYear: 1945,
        read: true,
        rating: 9
    },
    {
        title: "The Road",
        genre: "Post-Apocalyptic",
        releaseYear: 2006,
        read: false,
        rating: 8
    },
    {
        title: "The Shining",
        genre: "Horror",
        releaseYear: 1977,
        read: true,
        rating: 9
    },
    {
        title: "The Martian",
        genre: "Science Fiction",
        releaseYear: 2011,
        read: false,
        rating: 9
    },
    {
        title: "Dune",
        genre: "Science Fiction",
        releaseYear: 1965,
        read: true,
        rating: 10
    },
    {
        title: "The Name of the Wind",
        genre: "Fantasy",
        releaseYear: 2007,
        read: false,
        rating: 9
    },
    {
        title: "The Silent Patient",
        genre: "Psychological Thriller",
        releaseYear: 2019,
        read: true,
        rating: 8
    },
    {
        title: "The Hunger Games",
        genre: "Young Adult",
        releaseYear: 2008,
        read: false,
        rating: 8
    }
];

function findForTitle(title) {

    if(typeof title !== "string") return "Insert a valid title.";

    const search = title.toLowerCase();

    const result = bookCatalog.filter( book => book.title.toLowerCase().includes(search) ); // Entrega un array de objetos.

    return result

}

function findForGenre(genre) {
    if(typeof genre !== "string") return "Insert a valid genre";

    const search = genre.toLowerCase();

    const result = bookCatalog.filter( book => book.genre.toLowerCase() === search) ;

    return result;
}

function sortByRating() {

    const toSort = [...bookCatalog].sort( (a, b) => b.rating - a.rating );

    return toSort;
}

function averageRating() {

    const addition = [...bookCatalog].reduce( (acc, book) => acc + book.rating, 0)
    const average = addition / bookCatalog.length;

    return average;
}

function availableGenres() {

    const listOfGenres = [...bookCatalog].map( book => book.genre );
    const neatList = new Set(listOfGenres)
    const finalList = [...neatList];

    return finalList;
   
}

function isRatingHigherTo(num) {
    if(typeof num !== "number") return "Ingresa un valor válido"
    if(num < 0) return "Ingrese un valor mayor que 0";
    if(num >= 10) return "No se encuentran libros";

    const list = [...bookCatalog].filter( book => book.rating > num );

    if(list.length === 0) {
        return "No se encuentran libros"
    } else {
        return list
    }

}

function catalogToText() {


    const textListArray = [...bookCatalog].map( book => {
        const { title, genre, releaseYear, rating } = book;

        return `${title} (${releaseYear}) - ${genre} - ⭐ ${rating}`;
    } )

    const result = textListArray.join(". ");
    
    return result;

}