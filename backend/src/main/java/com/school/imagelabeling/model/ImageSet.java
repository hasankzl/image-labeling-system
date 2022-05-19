package com.school.imagelabeling.model;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "t_imageSet")
public class ImageSet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private ApplicationUser user;

    @OneToMany(mappedBy="imageSet")
    private List<Image> imageList;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "project_id", referencedColumnName = "id")
    private Project project;

    @Column
    private Date createdDate = new Date();
}
