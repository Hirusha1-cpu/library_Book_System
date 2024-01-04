package lk.samplelibrary.author.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.samplelibrary.author.entity.AuthorEntity;

public interface AuthorDao extends JpaRepository<AuthorEntity, Integer>{

    
} 