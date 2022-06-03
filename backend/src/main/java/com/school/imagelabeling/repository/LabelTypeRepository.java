package com.school.imagelabeling.repository;

import com.school.imagelabeling.model.LabelType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabelTypeRepository extends JpaRepository<LabelType,Long> {
}
