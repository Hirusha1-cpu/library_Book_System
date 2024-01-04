package lk.samplelibrary.booktype.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.samplelibrary.booktype.entity.BookTypeEntity;

public interface BookTypeDao extends JpaRepository<BookTypeEntity, Integer> {
    
}
