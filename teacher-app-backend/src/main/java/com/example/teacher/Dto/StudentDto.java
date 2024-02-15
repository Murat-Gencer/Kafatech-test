package com.example.teacher.Dto;

public class StudentDto {

    private int studentId;
    private String studentNameSurname;
    private int studentScore;

    public StudentDto() {
    }

    public StudentDto(int studentId, String studentNameSurname, int studentScore) {
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
        return "StudentDto{" +
                "studentId=" + studentId +
                ", studentNameSurname='" + studentNameSurname + '\'' +
                ", studentScore=" + studentScore +
                '}';
    }
}
