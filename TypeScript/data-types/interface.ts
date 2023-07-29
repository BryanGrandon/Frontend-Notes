interface BookInterface {
  id: number;
  title: string;
  author: string;
  coAutor?: string;
  isLoan?: (id: number) => void;
}

const book: BookInterface = {
  id: 1,
  title: "My title",
  author: "Bryan",
};

const books: BookInterface[] = [];

function getBookInterface(): BookInterface {
  return { id: 1, title: "My title", author: "Juan" };
}

function createBookInterface(book: BookInterface): BookInterface {
  return book;
}

const newBook: BookInterface = {
  id: 2,
  title: "My title",
  author: "Andres",
};
createBookInterface(newBook);

// Extends

interface PersonInterface {
  id: number;
  name: string;
}

interface CustomerInterface extends PersonInterface {
  country: string;
}

const customer: CustomerInterface = {
  id: 25,
  name: "Ricardo",
  country: "Chile",
};
