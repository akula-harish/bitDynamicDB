import "./task.css"
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import { useState } from "react";

export default function TaskComp(props: any) {
    const {handleChangeForm, submitFormData, formInputValue, handleError, handleErrorTitle, handleErrorStatus} = props;
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
                            <input type='text' name="titleData" value={formInputValue.titleData} onChange={handleChangeForm}/>
                            <p className="poitns_error">{handleErrorTitle}</p>
                        </li>
                        <li>
                            <label>Points*</label>
                            <input type='number' name="pointsData" value={formInputValue.pointsData} onChange={handleChangeForm}/>
                            <p className="poitns_error">{handleError}</p>   
                        </li>
                    </ul>
                    <ul className='form_list_two'>
                        <li>
                            <label>Status*</label>
                            <select name="statusData" value={formInputValue.statusData} onChange={handleChangeForm}>
                                <option value='none'>-Select-</option>
                                <option>Backlog</option>
                                <option>Development</option>
                                <option>Grooming</option>
                            </select>
                            <p className="poitns_error">{handleErrorTitle}</p>
                        </li>
                        <li>
                            <label>Priority*</label>
                            <select name="priorityData" value={formInputValue.priorityData} onChange={handleChangeForm}>
                                <option value='none'>-Select-</option>
                                <option>
                                    yes
                                </option>
                                <option>No</option>
                            </select>
                            <p className="poitns_error">{handleErrorTitle}</p>
                        </li>
                    </ul>
                    <div className='form_list_three'>
                        <label>Description*</label>
                        <textarea/>
                        <p className="poitns_error" style={{marginTop: '-20px'}}>{handleErrorTitle}</p>
                    </div>
                    <div className='buttons_main'>
                        <button>Cancel</button>
                        <button onClick={submitFormData}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
