import {React , useState , useEffect} from "react";
import Table from "./Table";
import AddStudent from "./AddStudent";
import axios from 'axios';
import SortButton from "./SortButton";



    function List() {
      const [students, setStudents] = useState([]);
      const [isEmpty , setEmpty] = useState(true); 
       
      useEffect(() => {
        axios.get('http://localhost:8080/api/student/list')
          .then(response => {
            if(response.data.length > 0){
              setEmpty(false);
            }
            setStudents(response.data);
          })
          .catch(error => {
            console.error('Error fetching student list:', error);
          });
      }, []);

      function handleSort(sortedStudents){
        setStudents(sortedStudents);
      };

      function addStudent(newStudent){
        setEmpty(false);
        setStudents(currentStudents => {
          const updatedStudents = [...currentStudents, newStudent];
          return updatedStudents; 
        });
      };

      function deleteStudent(deletedRowId) {
        setStudents((currentStudents) => {
          const updatedStudents = currentStudents.filter(
            (student) => student.studentId !== deletedRowId
          );
          if(updatedStudents.length === 0){
            setEmpty(true);
          }
          return updatedStudents;
        });
      };
    

      return (
        <div className="list">
            {isEmpty!==true ? <Table students={students} deleteStudent={deleteStudent}/> : <br/>}
            <AddStudent addStudent={addStudent}/>
            <SortButton onSort={handleSort} />
        </div>
      );
    }
    
    export default List;