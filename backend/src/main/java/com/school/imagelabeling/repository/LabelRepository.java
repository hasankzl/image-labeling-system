package com.school.imagelabeling.repository;

import com.school.imagelabeling.model.ImageSet;
import com.school.imagelabeling.model.Label;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabelRepository  extends JpaRepository<Label,Long> {



}
