package com.example.teacher.Service;

import com.example.teacher.Dto.StudentDto;
import com.example.teacher.Entity.Student;

import java.util.List;

public interface StudentService {
    int addStudent(StudentDto studentDto);
    void removeStudent(Integer id);
    Student findStudentById(Integer id);
    List<Student> listAllStudents(String sortBy);
}
