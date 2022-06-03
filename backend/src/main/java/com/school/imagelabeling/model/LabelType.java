package com.school.imagelabeling.model;


import lombok.Data;

import javax.persistence.*;

@Table
@Data
@Entity
public class LabelType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name="project_id", nullable=false)
    private Project project;
}
