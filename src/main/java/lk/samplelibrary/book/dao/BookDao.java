package lk.samplelibrary.book.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import lk.samplelibrary.book.entity.BookEntity;

public interface BookDao extends JpaRepository<BookEntity,Integer> {
    @Query(value = "SELECT b FROM BookEntity b WHERE b.isbn=?1")
    BookEntity getByIsbn(Integer integer);

    @Query(value = "SELECT lpad(max(bookid)+1,4,0) As bookid FROM book", nativeQuery = true)
    String getNextBookId();
    
}
