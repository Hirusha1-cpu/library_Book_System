package lk.samplelibrary.author.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.samplelibrary.author.dao.AuthorDao;
import lk.samplelibrary.author.entity.AuthorEntity;


@RestController
public class AuthorController {
    @Autowired
    // create dao object
    private AuthorDao dao;

     @GetMapping(value = "/author/findall", produces = "application/json")
    public List<AuthorEntity> getAll() {
        return dao.findAll();

    }


}
