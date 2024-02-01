import BodyComp from './Components/Sidebar/Body/BodyComp'
import SidebarComp from './Components/Sidebar/SidebarComp'
import "./App.css"
import { useState } from 'react';

export default function App() {
  const [formInputValue, setFormInputValue] = useState({
    id: '',
    titleData: "",
    pointsData: "",
    statusData: "",
    priorityData: "",
  });

  const [tableData, setTableData] = useState([]);
  const handleChangeForm = (e: any) => {
    setFormInputValue({...formInputValue, [e.target.name]: e.target.value});
  };

  const submitFormData = (e:any) => { 
    e.preventDefault();
    console.log(formInputValue);
    setTableData((previousData): any => [...previousData, formInputValue]);
    setFormInputValue({titleData: "",  pointsData: "", statusData: "", priorityData: "", id: ""});
  };

  const handleDelete = (id:any) => {
    let newArray = tableData.filter((item:any) => item.id !== id)
    setTableData(newArray)
  }

            // ------------Parent Component------------

  return (
    <div style={{display: 'flex', verticalAlign: 'top'}}>
      <SidebarComp handleChangeForm = {handleChangeForm} submitFormData = {submitFormData} formInputValue = {formInputValue}/>
      <BodyComp tableData = {tableData} handleDelete = {handleDelete}/>
    </div>
  )
}
