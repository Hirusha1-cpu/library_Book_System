package lk.samplelibrary.book.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lk.samplelibrary.author.entity.AuthorEntity;
import lk.samplelibrary.booktype.entity.BookTypeEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "book")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class BookEntity {
    @Id //set primary key
    @Column(name = "id")//column name mapping
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment
    private Integer id;

    @Column(name = "bookid",unique = true)
    @NotNull
    private String bookId;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "langauge")
    @NotNull
    private String langauge;

    @Column(name = "edition")
    @NotNull
    private Integer edition;

    @Column(name = "isbn",unique = true)
    @NotNull
    private Integer isbn;

    @ManyToOne
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    private AuthorEntity authorId;

    @ManyToOne
    @JoinColumn(name = "booktype_id", referencedColumnName = "id")
    private BookTypeEntity booktype_id;

    @Column(name ="deleted")
    private boolean deleted;



}
