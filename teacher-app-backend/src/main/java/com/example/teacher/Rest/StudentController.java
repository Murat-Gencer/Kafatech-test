package com.example.teacher.Rest;

import com.example.teacher.Dto.StudentDto;
import com.example.teacher.Entity.Student;
import com.example.teacher.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping(path = "/save")
    public int saveStudent(@RequestBody StudentDto studentDto){
        int id = studentService.addStudent(studentDto);
        System.out.println(studentDto);
        return id;
    }

    @DeleteMapping(path = "/delete/{id}")
    public void deleteStudent(@PathVariable Integer id){
        studentService.removeStudent(id);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Integer id) {
        Student student = studentService.findStudentById(id);
        if (student != null) {
            return ResponseEntity.ok(student);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<Student>> listStudents(@RequestParam(value = "sortBy", required = false) String sortBy) {
        List<Student> students = studentService.listAllStudents(sortBy);
        return ResponseEntity.ok(students);
    }
}
