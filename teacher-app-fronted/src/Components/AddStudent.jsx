import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';



const AddStudent = (props) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [windowOpen, setwindowOpen] = useState(false);

  
  function openClose(){windowOpen===true?setwindowOpen(false):setwindowOpen(true);};

  async function addStudent(){
    setwindowOpen(false);
    try {
      const response = await axios.post('http://localhost:8080/api/student/save', { "studentNameSurname" : name,"studentScore": grade });
      props.addStudent({"studentId":response.data, "studentNameSurname": name, "studentScore":grade});
    } catch (error) {
      console.error('Hata oluştu:', error);
    }
    setName("");
    setGrade("");

  };

  function changeName(e){
    setName(e.target.value);
  };

  function changegrade(e){
    setGrade(e.target.value);
  };

  return (
    
    <div className='addStudent' >
    <AddIcon  fontSize={'large'} onClick={openClose} />
      {windowOpen && (
        <div className="pencere">
          <label>
            Ad:
            <input type="text" value={name} onChange={changeName} />
          </label>
          <label>
            Grade:
            <input type="text" value={grade} onChange={changegrade} />
          </label>
          <button  onClick={addStudent}>Ekle</button>
        </div>
      )}
    </div>
  );
};

export default AddStudent;