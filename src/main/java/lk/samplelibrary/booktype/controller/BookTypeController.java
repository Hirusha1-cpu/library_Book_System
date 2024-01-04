package lk.samplelibrary.booktype.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.samplelibrary.booktype.dao.BookTypeDao;
import lk.samplelibrary.booktype.entity.BookTypeEntity;

@RestController
public class BookTypeController {
       @Autowired
    // create dao object
    private BookTypeDao dao;

     @GetMapping(value = "/booktype/findall", produces = "application/json")
    public List<BookTypeEntity> getAll() {
        return dao.findAll();

    }
}
