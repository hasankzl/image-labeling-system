package com.school.imagelabeling.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "t_image")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;



    @ManyToOne
    @JoinColumn(name="imageSet_id", nullable=false)
    private ImageSet imageSet;

    @Column
    private String name;

    @Column
    private String url;
}
