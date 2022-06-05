package com.school.imagelabeling.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "t_project")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;


    @ManyToOne
    @JoinColumn(name="admin_id", nullable=false)
    private ApplicationUser admin;

    @ManyToMany
    @JoinTable(
            name = "t_project_user",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<ApplicationUser> userList;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "ımageSet_id", referencedColumnName = "id")
    @JsonBackReference
    private ImageSet imageSet;

    @Column
    private Date createdDate = new Date();


    @OneToMany(mappedBy = "project",cascade = CascadeType.REMOVE)
    private List<LabelType> labelTypeList;
}
