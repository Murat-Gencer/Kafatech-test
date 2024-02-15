package com.example.teacher.Service.impl;

import com.example.teacher.Dto.StudentDto;
import com.example.teacher.Entity.Student;
import com.example.teacher.Repo.StudentRepo;
import com.example.teacher.Service.StudentService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service

public class StudentIMPL implements StudentService {

    @Autowired
    private StudentRepo studentRepo;

    @PersistenceContext
    private EntityManager entityManager;
    @Override
    public int addStudent(StudentDto studentDto) {
        Student student = new Student(
                studentDto.getStudentId(),
                studentDto.getStudentNameSurname(),
                studentDto.getStudentScore());

        studentRepo.save(student);

        return student.getStudentId();
    }


    @Override
    @Transactional
    public void removeStudent(Integer id) {
        Student student = entityManager.find(Student.class, id);
        if (student != null) {
            entityManager.remove(student);
        }
    }
    @Override
    public Student findStudentById(Integer id) {
        return studentRepo.findById(id).orElse(null);
    }

    @Override
    public List<Student> listAllStudents(String sortBy) {
        if (sortBy != null && !sortBy.isEmpty()) {
            return studentRepo.findAll(Sort.by(sortBy));
        } else {
            return studentRepo.findAll();
        }
    }
}
