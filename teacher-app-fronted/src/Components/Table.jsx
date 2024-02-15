import {React ,useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";


const Row = ({ id,nameSurname, score, onRowClick }) => {
  return (
    <tr onClick={() => onRowClick({ id,nameSurname, score })}>
      <td>{nameSurname}</td>
      <td>{score}</td>
    </tr>
  );
};

function Popup({ selectedRow, onClose, deleteStudent }){
  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/student/delete/${selectedRow.id}`);
      onClose();
      deleteStudent(selectedRow.id); 
    } catch (error) {
      console.error('Error deleting student', error);
    }
  };

  return (
    <div className="popup">
      <h2>{selectedRow.nameSurname}</h2>
      <p>{selectedRow.score}</p>
      <CloseIcon className="close" onClick={onClose} />
      <DeleteIcon className="delete" onClick={handleDeleteClick} />
    </div>
  );
};



function Table(props) {
  const [selectedRow, setSelectedRow] = useState(null);

  function handleRowClick (row){
    setSelectedRow(row);
  };
 
  function handleClosePopup (){
    setSelectedRow(null);
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>Not</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((student) => (
            <Row
              id={student.studentId}
              nameSurname={student.studentNameSurname}
              score={student.studentScore}
              onRowClick={handleRowClick}
            />
          ))}
        </tbody>
      </table>

      {selectedRow && (
        <Popup selectedRow={selectedRow} onClose={handleClosePopup} deleteStudent={props.deleteStudent}/>
      )}
    </div>
  );
}

export default Table;
