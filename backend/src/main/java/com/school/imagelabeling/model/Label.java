package com.school.imagelabeling.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "t_label")
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String coordination;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private ApplicationUser user;

    @ManyToOne
    @JoinColumn(name="image_id", nullable=false)
    private Image image;


}
