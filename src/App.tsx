import BodyComp from './Components/Sidebar/Body/BodyComp'
import SidebarComp from './Components/Sidebar/SidebarComp'
import "./App.css"
import { useState } from 'react';

export default function App() {
  
  const [formInputValue, setFormInputValue] = useState({
    id: "",
    titleData: "",
    pointsData: "",
    statusData: "",
    priorityData: "",
  });

  // -------handling_error-------
  const[errorForm, setErrorForm] = useState("");
  const handleError = () => {
    setErrorForm("The Maximum Points Should Be 8 Only");
  }
  console.log(errorForm);

  const[errorFormTitle, setErrorFormTitle] = useState("");
  const handleErrorTitle = () => {
    setErrorFormTitle("Please Enter Value");
  }

  const[errorFormStatus, setErrorFormTitleStatus] = useState("");
  const handleErrorStatus = () => {
    setErrorFormTitleStatus("Status Value Must Need");
  }

  const [tableData, setTableData] = useState([]);
  const handleChangeForm = (e: any) => {
    setFormInputValue({...formInputValue, [e.target.name]: e.target.value});
  };

        // -------Form_Sumbit-------
  const submitFormData = (e:any) => { 
    e.preventDefault();
    console.log(formInputValue);
    let num = parseInt(formInputValue.pointsData);
    console.log(num);
    if(formInputValue.pointsData !== "" && num <= 8){
      setTableData((previousData): any => [...previousData, formInputValue]);
    }
    else{
      handleError();
      handleErrorTitle();
      handleErrorStatus();
    }
    setFormInputValue({titleData: "",  pointsData: "", statusData: "", priorityData: "", id: ""});
  };

  const handleDelete = (id:any) => {
    let newArray = tableData.filter((item:any) => item.id !== id)
    setTableData(newArray)
  }

  // ------filter_data-------
  const handleFilterData = (status: any) => {
    if(status !== "none"){
      let filterArray = tableData.filter((item:any) => item.statusData === status)
      setTableData(filterArray)
    }
  }

            // ------------Parent Component------------

  return (
    <div style={{display: 'flex', verticalAlign: 'top'}}>
      <SidebarComp handleChangeForm = {handleChangeForm} submitFormData = {submitFormData} formInputValue = {formInputValue} handleError = {errorForm} handleErrorTitle = {errorFormTitle} handleErrorStatus = {errorFormStatus}/>
      <BodyComp tableData = {tableData} handleDelete = {handleDelete} handleFilterData = {handleFilterData}/>
    </div>
  )
}
