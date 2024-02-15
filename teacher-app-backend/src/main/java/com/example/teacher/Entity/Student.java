package com.example.teacher.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @Column(name = "student_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int studentId;
    @Column(name = "student_name_surname", length = 255)
    private String studentNameSurname;
    @Column(name = "student_score", length = 255)
    private int studentScore;

    public Student() {
    }

    public Student(int studentId, String studentNameSurname, int studentScore) {
        this.studentId = studentId;
        this.studentNameSurname = studentNameSurname;
        this.studentScore = studentScore;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getStudentNameSurname() {
        return studentNameSurname;
    }

    public void setStudentNameSurname(String studentNameSurname) {
        this.studentNameSurname = studentNameSurname;
    }

    public int getStudentScore() {
        return studentScore;
    }

    public void setStudentScore(int studentScore) {
        this.studentScore = studentScore;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentId=" + studentId +
                ", studentNameSurname='" + studentNameSurname + '\'' +
                ", studentScore=" + studentScore +
                '}';
    }
}
