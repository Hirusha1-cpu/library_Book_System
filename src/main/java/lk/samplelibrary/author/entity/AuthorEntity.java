package lk.samplelibrary.author.entity;

import java.time.LocalDate;

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
@Table(name = "author")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthorEntity {
    @Id //set primary key
    @Column(name = "id")//column name mapping
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment
    private Integer id;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "address")
    @NotNull
    private String address;

    @Column(name = "contactnumber")
    @NotNull
    private String contactnumber;

    @Column(name = "email")
    @NotNull
    private String email;

    @Column(name = "dob")
    @NotNull
    private LocalDate dateofbirth;


}
