package com.school.imagelabeling.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "t_user")
public class ApplicationUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "email",unique = true)
    private String email;

    @Column(name="username", length=25, nullable=false,unique = true)
    private String username;

    @Column(name="name", length=25, nullable=false)
    private String name;

    @Column(name="surname", length=25, nullable=false)
    private String surname;

    @Column(name="password",  nullable=false)
    private String password;

}
