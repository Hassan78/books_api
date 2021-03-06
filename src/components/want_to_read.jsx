import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const WantToRead = () => {
   
   const{books,updateBook} = useContext(BookContext)
   const wantToRead = books.filter(b=>b.shelf==='wantToRead');
  
    return ( 
        <div className="bookshelf">
                  <h2 className="bookshelf-title">Want To Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        
                        {wantToRead.map(book=>{
                            return(
                                <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                  `url(${book.imageLinks?book.imageLinks.thumbnail:''})`,
                              }}
                            ></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(e)=>updateBook(book,e.target.value)}>
                                <option value="move" >
                                  Move to...
                                </option>
                                <option value="currentlyReading">
                                  Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">
                            {book.title}
                          </div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                            )

                        })} 
                    </ol>
                  </div>
                </div>
     );
}
 
export default WantToRead;
