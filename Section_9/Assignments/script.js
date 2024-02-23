'use strict';

// Data provided
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// //1.1
// const [firstBook, secondBook] = books;

// //1.2
// const [, , thirdBook] = books;

// //1.3
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingCount]] = ratings;

// //1.4
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// //2.1
// const [{ title, author, ISBN }] = books;

// //2.2
// const [{ keywords: tags }] = books;

// //2.3
// const { language, programmingLanguage = 'unknown' } = books[3];

// //2.4
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// [{ title: bookTitle, author: bookAuthor }] = books;

// //2.5
// const [
//   {
//     thirdParty: {
//       goodreads: { rating: bookRating },
//     },
//   },
// ] = books;

// //2.6
// const printBookInfo = function ({ title, author, year = 'year unknown' }) {
//   console.log(`title: '${title}, author: ${author}, year: ${year}`);
// };

// //3.1
// const bookAuthors = [...books[0].author, ...books[5].author];
// console.log(bookAuthors);

// //3.2
// const spellWord = function (str) {
//   console.log(...str);
// };
// spellWord('hello');

// //4.1
// const [mainKeyWord, ...rest] = books[0].keywords;

// //4.2
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// //4.3
// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(`The book ${title} has ${authors.length} authors`);
// };

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// //5.1
// const hasExamplesInJava = function (book) {
//   return book.programmingLanguage === 'Java' || 'no data available';
// };

// //5.2
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`"${books[i].title}" provides online content`);
// }

// //6.1
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(
//       `"${books[i].title}" provides no data about its online content`
//     );
// }

// //7.1
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ??= 1;
// }

// //7.2
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// // 8.1
// let pageSum = 0;
// for (const book of books) {
//   console.log(book.pages, book.title);
//   pageSum += book.pages;
// }
// console.log(pageSum);

// // 8.2 and 8.3
// const allAuthors = [];
// for (const book of books) {
//   typeof book.author === 'string'
//     ? allAuthors.push(book.author)
//     : allAuthors.push(...book.author);
// }

// for (const [i, author] of allAuthors.entries()) {
//   console.log(`${i + 1}. ${author}`);
// }

// // 9.1
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };

// //9.2
// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };

// //10.1
// const getFirstKeyword = function (book) {
//   return book.keywords?.[0];
// };

// //11.1 11.2 11.3 11.4
// const entries = [];
// for (const [key, val] of Object.entries(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }

// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(value);
// }

// const entries2 = Object.entries(books[0].thirdParty.goodreads);

// console.log(entries);
// console.log(entries2);

// //12.1, 12.2, 12.3, 12.4, 12.5, 12.6
// const allKeywords = [];

// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }

// const uniqueKeywords = new Set(allKeywords);

// uniqueKeywords.add('coding').add('science');

// uniqueKeywords.delete('business');

// const uniqueKeyWordsArr = [...uniqueKeywords];

// uniqueKeywords.clear();

// //13.1, 13.2, 13.3, 13.4
// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);

// bookMap.set('pages', 464);

// console.log(`"${bookMap.get('title')}" by ${bookMap.get('author')}`);

// console.log(bookMap.size);

// if (bookMap.has('author')) console.log('The author of the book is known');

// //14.1
// const firstBookMap = new Map(Object.entries(books[0]));
// // const _firstBookMap = Object.entries(books[0]);

// for (const [key, val] of firstBookMap) {
//   if (typeof val === 'number') {
//     console.log(key, val);
//   }
// }

// //15.1
// console.log(
//   books[0].ISBN[6],
//   books[0].ISBN[4],
//   books[0].ISBN[9],
//   books[0].ISBN[8]
// );

// //15.2, 15.3
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));
// const boxing = quote.slice(-6);
// console.log(boxing);

// //15.4
// const isContributor = function (str) {
//   console.log(str.indexOf('(Contributor)') === -1 ? false : true);
// };
// isContributor('Julie Sussman (Contributor)');
// isContributor('Robert Sedgewick');

// //16.1
// const normalizeAuthorName = function (name) {
//   name = name.toLowerCase().replace('(contributor)', '').trim();
//   name = name[0].toUpperCase() + name.slice(1);
//   const spaceIdx = name.indexOf(' ');
//   name =
//     name.slice(0, spaceIdx + 1) +
//     name[spaceIdx + 1].toUpperCase() +
//     name.slice(spaceIdx + 2);
//   return name;
// };

// console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

// //16.2
// const title = books[1].title;
// const newBookTitle = title.replace('Programs', 'Software');

// //16.3
// const logBookTheme = function (str) {
//   const title = str.toLowerCase().trim();
//   // console.log(title);
//   if (title.indexOf('computer') === 0) {
//     console.log('This book is about computers');
//   }

//   if (
//     title.indexOf('algorithms') !== -1 &&
//     title.indexOf('structures') !== -1
//   ) {
//     console.log('This book is about algorithms and data structures');
//   }
//   const last = title.slice(title.lastIndexOf(' ') + 1);
//   if (
//     last === 'system' ||
//     (last === 'systems' && title.indexOf('operating') === -1)
//   ) {
//     console.log(
//       'This book is about some systems, but definitely not about operating systems'
//     );
//   }
// };

// for (const book of books) {
//   logBookTheme(book.title);
// }

//17.1
const logBookCategories = function (cats) {
  const catsArr = cats.split(';');
  for (const cat of catsArr) {
    console.log(cat);
  }
};

// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);

// //17.2
// const getKeywordsAsString = function (books) {
//   let keywords = [];
//   for (const book of books) {
//     keywords = [...keywords, ...book.keywords];
//   }
//   const uniqueKeywords = new Set(keywords);
//   let str = [...uniqueKeywords];
//   str = str.toString();
//   console.log(str);
//   str = str.replaceAll(',', ';');
//   return str;
// };
// console.log(getKeywordsAsString(books));

// //17.3

// const logBookChapters = function (book) {
//   for (const [chapter, page] of book) {
//     const str = `${chapter.padEnd(20, '_')} ${page}`;
//     console.log(str);
//   }
// };

// const bookChapters = [
//   ['The Basics', 14],
//   ['Sorting', 254],
//   ['Searching', 372],
//   ['Graphs', 526],
//   ['Strings', 706],
// ];
// logBookChapters(bookChapters);
