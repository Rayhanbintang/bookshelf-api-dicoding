// /* eslint-disable consistent-return */
// /* eslint-disable linebreak-style */
// const { nanoid } = require('nanoid');
// const books = require('./books');

// const addBookHandler = (request, h) => {
//   const {
//     name, year, author, summary, publisher, pageCount, readPage, reading,
//   } = request.payload;

//   const id = nanoid(16);
//   const insertedAt = new Date().toISOString();
//   const updatedAt = insertedAt;
//   const finished = false;

//   const isSuccess = true;
//   try {
//     if (request.payload.name === undefined) {
//       const response = h.response({
//         status: 'fail',
//         message: 'Gagal menambahkan buku. Mohon isi nama buku',
//       });
//       response.code(400);
//       return response;
//     }
//     if (request.payload.readPage > request.payload.pageCount) {
//       const response = h.response({
//         status: 'fail',
//         message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
//       });
//       response.code(400);
//       return response;
//     }
//     if (isSuccess) {
//       const newBook = {
//         name,
//         year,
//         author,
//         summary,
//         publisher,
//         pageCount,
//         readPage,
//         reading,
//         finished,
//         id,
//         insertedAt,
//         updatedAt,
//       };

//       books.push(newBook);
//       const response = h.response({
//         status: 'success',
//         message: 'Buku berhasil ditambahkan',
//         data: {
//           bookId: id,
//         },
//       });
//       response.code(201);
//       return response;
//     }
//   } catch (error) {
//     const response = h.response({
//       status: 'error',
//       message: 'Buku gagal ditambahkan',
//     });
//     response.code(500);
//     return response;
//   }
// };

// const getAllBooksHandler = () => ({
//   status: 'success',
//   data: {
//     books: books.map((book) => ({
//       id: book.id,
//       name: book.name,
//       publisher: book.publisher,
//     })),
//   },
// });

// const getBookByIdHandler = (request, h) => {
//   const { bookId } = request.params;

//   const book = books.filter((b) => b.id === bookId)[0];

//   if (book !== undefined) {
//     return {
//       status: 'success',
//       data: {
//         book,
//       },
//     };
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Buku tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

// const editBookByIdHandler = (request, h) => {
//   const { bookId } = request.params;

//   const {
//     name, year, author, summary, publisher, pageCount, readPage, reading,
//   } = request.payload;
//   const updatedAt = new Date().toISOString();

//   const index = books.findIndex((book) => book.id === bookId);

//   if (request.payload.name === undefined) {
//     const response = h.response({
//       status: 'fail',
//       message: 'Gagal memperbarui buku. Mohon isi nama buku',
//     });
//     response.code(400);
//     return response;
//   }
//   if (request.payload.readPage > request.payload.pageCount) {
//     const response = h.response({
//       status: 'fail',
//       message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
//     });
//     response.code(400);
//     return response;
//   }
//   if (index !== -1) {
//     books[index] = {
//       ...books[index],
//       name,
//       year,
//       author,
//       summary,
//       publisher,
//       pageCount,
//       readPage,
//       reading,
//       updatedAt,
//     };

//     const response = h.response({
//       status: 'success',
//       message: 'Buku berhasil diperbarui',
//     });
//     response.code(200);
//     return response;
//   }
//   const response = h.response({
//     status: 'fail',
//     message: 'Gagal memperbarui buku. Id tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };
// const deleteBookByIdHandler = (request, h) => {
//   const { bookId } = request.params;

//   const index = books.findIndex((book) => book.bookId === bookId);

//   if (index !== -1) {
//     books.splice(index, 1);
//     const response = h.response({
//       status: 'success',
//       message: 'Buku berhasil dihapus',
//     });
//     response.code(200);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Buku gagal dihapus. bookId tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

// module.exports = {
//   addBookHandler,
//   getAllBooksHandler,
//   getBookByIdHandler,
//   editBookByIdHandler,
//   deleteBookByIdHandler,
// };
