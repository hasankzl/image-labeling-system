package com.school.imagelabeling.model;


import lombok.Data;

import javax.persistence.*;
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


    @OneToMany(mappedBy="imageSet")
    private List<Image> imageList;
}
