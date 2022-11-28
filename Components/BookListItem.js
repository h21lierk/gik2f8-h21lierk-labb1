const BookListItem = (book) => {
  let html = /* `<li
                class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-zinc-900 last:border-b-0 border-b border-blue-200 cursor-pointer">
              ${book.author} - ${book.title}    
              </li>` */
              `<div id="bookDetail" class="w-64 m-2">
                <h3 class="text-pink-400 font-bold">${book.title}</h3>
                <ul>
                  <li>Författare: ${book.author}</li>
                  <li>Utgivningsår: ${book.releaseDate}</li>
                  <li>Sidor: ${book.pages}</li>
                </ul>`;
  return html;
};

/* 
`<div id="bookDetail" class="w-64">
  <h3 class="text-pink-500 font-bold">${book.title}</h3>
  <ul>
    <li>Författare: ${book.author}</li>
    <li>Utgivningsår: ${book.releaseDate}</li>
    <li>Sidor: ${book.pages}</li>
    <li>${book.coverImage} ****fel måste göra något så bilden hämtas*****
  </ul>` */