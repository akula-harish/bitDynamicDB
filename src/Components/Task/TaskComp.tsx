import React, { useState } from 'react'
import "./task.css"
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';

export default function TaskComp() {
    const[titleData, setTitleData] = useState("");
    const[pointsData, setPointsData] = useState("");
    const[statusData, setStatusData] = useState("");
    const[priorityData, setPriorityData] = useState("");

    const userDataObj = [
        {
            titleData: titleData,
            pointsData: pointsData,
            statusData: statusData,
            priorityData: priorityData,
        }
    ]

    const inputTitleData = (e:any) => {
        setTitleData(e.target.value)
    }
    const inputPointsData = (e:any) => {
        setPointsData(e.target.value)
    }
    const inputStatusData = (e:any) => {
        setStatusData(e.target.value)
    }
    const inputPriorityData = (e:any) => {
        setPriorityData(e.target.value)
    }
    const formSubmit = () => {
        
    }
  return (
    <div className='task_main'>
        <ul className='task_header_list'>
            <li>
                <h4>Add Story</h4>
            </li>
            <li>
                <ul className='task_header_child_list'>
                    <li>
                        <AspectRatioOutlinedIcon style={{fontSize: '14px'}}/>
                    </li>
                    <li>
                        <CloseOutlinedIcon style={{fontSize: '18px'}}/>
                    </li>
                </ul>
            </li>
        </ul>
        <div className='task_body_main'>
            <div className='task_body_sub_main'>
                <OpenInFullOutlinedIcon className='expand_child_icon'/>
                <form className='form'>
                    <ul className='form_list_one'>
                        <li>
                            <label>TASK Title*</label>
                            <input type='text' onChange={inputTitleData}/>
                        </li>
                        <li>
                            <label>Points*</label>
                            <input type='number' onChange={inputPointsData}/>
                        </li>
                    </ul>
                    <ul className='form_list_two'>
                        <li>
                            <label>Status*</label>
                            <select onChange={inputStatusData}>
                                <option value='none'>-Select-</option>
                                <option>Completed</option>
                                <option>Progress</option>
                            </select>
                        </li>
                        <li>
                            <label>Priority*</label>
                            <select onChange={inputPriorityData}>
                                <option value='none'>-Select-</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </li>
                    </ul>
                    <div className='form_list_three'>
                        <label>Description*</label>
                        <textarea/>
                    </div>
                    <div className='buttons_main'>
                        <button>Cancel</button>
                        <button onSubmit={formSubmit}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
