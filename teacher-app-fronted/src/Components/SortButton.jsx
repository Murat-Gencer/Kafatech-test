import React ,{useState}from "react";
import SortIcon from '@mui/icons-material/Sort';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import FilterListIcon from '@mui/icons-material/FilterList';
import axios from "axios";

function SortButton({ onSort }){
    const [windowOpen, setwindowOpen] = useState(false);

  
    function openClose()  {windowOpen===true?setwindowOpen(false):setwindowOpen(true);};

    async function sortByAlpa(){axios.get('http://localhost:8080/api/student/list?sortBy=studentScore')
    .then(response => {
          onSort(response.data);
    })
    .catch(error => {
      console.error('Error fetching student list:', error);
    });}

    async function sortByName (){axios.get('http://localhost:8080/api/student/list?sortBy=studentNameSurname')
    .then(response => {
          onSort(response.data);
    })
    .catch(error => {
      console.error('Error fetching student list:', error);
    });}
    

    return(
    <div>
        <SortIcon fontSize="large" className="SortIcon" onClick={openClose}/>
        {windowOpen && (
            <div>
                <SortByAlphaIcon className="SortByAlpa" fontSize="large" onClick={sortByAlpa}/>
                <FilterListIcon className="SortByNumber" fontSize="large"  onClick={sortByName}/>
            </div>
        )}
    </div>
    );
}
export default SortButton;