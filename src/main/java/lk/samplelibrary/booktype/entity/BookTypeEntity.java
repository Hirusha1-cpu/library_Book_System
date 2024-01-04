package lk.samplelibrary.booktype.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "booktype")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookTypeEntity {
    @Id //set primary key
    @Column(name = "id")//column name mapping
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment
    private Integer id;

    @Column(name = "name")
    @NotNull
    private String name;
}