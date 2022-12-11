const BookListItem = (book) => {
  let html = `<li id="${book.id}"
                class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-zinc-900 
                last:border-b-0 border-b border-blue-200 cursor-pointer" 
                onmouseenter="showDetail(this);"
                onmouseleave="hideDetail(this);">
              ${book.author} - ${book.title}
              </li>`;

              return html;

};