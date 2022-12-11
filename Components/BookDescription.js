const BookDetail = book => {
  let html =`<div id="bookDetail" 
            class=" w-3/12 h-64 m-2 bg-pink-100/90 flex 
            justify-between px-2 py-2 absolute top-20 right-20 rounded">
              <ul>
                <h3 class="text-zinc-800 font-bold text-lg">${book.title}</h3>
                <li class="mr-2"><span class="font-semibold text-zinc-800">Författare: </span>${book.author}</li>
                <li class="mr-2"><span class="font-semibold text-zinc-800">Utgivningsår: </span>${book.releaseDate}</li>
                <li class="mr-2"><span class="font-semibold text-zinc-800">Sidor: </span>${book.pages}</li>
              </ul>
              <img src=${book.coverImage} alt="Bokomslag" class="rounded">
            </div>`;
          return html;
 
 };