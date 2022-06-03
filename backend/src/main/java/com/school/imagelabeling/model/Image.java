package com.school.imagelabeling.model;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

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

    @ManyToOne
    @JoinColumn(name="user_id", nullable=true)
    private ApplicationUser user;

    @OneToMany(mappedBy = "image",cascade = CascadeType.REMOVE)
    private List<Label> labelList;
}
