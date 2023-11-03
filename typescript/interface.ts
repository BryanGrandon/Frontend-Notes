// In TypeScript we can use Type and Interface to describe the structure of objects.

// -------- Difference -------- //

// Interface //
interface Book {
  title: string;
  url: string;
  pages: number;
}

// Declaration Merging
interface Book {
  author: string;
}

// Type //
type Course = {
  title: string;
  url: string;
  chapters: number;
};

// Unions
type LearningResource = Course | Book;

// Tuples
type CourseLearners = [Course, number];

// -------- Type of Property -------- //

// Interface //
interface BookInterface {
  // Required
  title: string;
  author: string;

  // Optional ( ? )
  pages?: number;

  // Read only
  readonly id: number;
}
let isInterface: BookInterface = {
  title: "Types",
  author: "Users",
  id: 22,
};

// Type //
type BookType = {
  // Required
  title: string;
  author: string;

  // Optional ( ? )
  pages?: number;

  // Read only
  readonly id: number;
};

let isType: BookType = {
  title: "Type",
  author: "User",
  id: 21,
};

// -------- Extends -------- //
interface IceCream {
  flavor: string;
  scoops: number;
}

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
}
