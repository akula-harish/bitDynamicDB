import React, { useState } from 'react'
import avatar from '../../assets/B_avatar.svg'
import "../../App.css"
import "../../../src/Components/Sidebar/sidebar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import TaskComp from '../Task/TaskComp';

export default function SidebarComp(props: any) {
    const {handleChangeForm, submitFormData, formInputValue, errorForm, handleError, handleErrorTitle, handleErrorStatus} = props;
    const[navi, setNavi] = useState(false);
    const handleToggle = () => {
        setNavi(!navi)
    }
    console.log(navi);

    const navObj = [
        {
            Icon: <HomeOutlinedIcon/>,
            Title: "Home",
            Arrow: <KeyboardDoubleArrowRightOutlinedIcon/>
        },
        {
            Icon: <SmartToyOutlinedIcon/>,
            Title: "Robot",
            Arrow: <KeyboardDoubleArrowRightOutlinedIcon/>
        },
        {
            Icon: <AssessmentOutlinedIcon/>,
            Title: "Charts",
            Arrow: <KeyboardDoubleArrowRightOutlinedIcon/>
        },
        {
            Icon: <ReportProblemOutlinedIcon/>,
            Title: "Disclimer",
            Arrow: <KeyboardDoubleArrowRightOutlinedIcon/>
        },
        {
            Icon: <StickyNote2OutlinedIcon/>,
            Title: "Tasks",
            Arrow: <KeyboardDoubleArrowRightOutlinedIcon/>
        },
        {
            Icon: <FactCheckOutlinedIcon/>,
            Title: "List",
            Arrow: <KeyboardDoubleArrowRightOutlinedIcon/>
        },
        {
            Icon: <AccountTreeOutlinedIcon/>,
            Title: "AccountTree",
            Arrow: <KeyboardDoubleArrowRightOutlinedIcon/>
        },
        {
            Icon: <GroupsOutlinedIcon/>,
            Title: "Users",
            Arrow: <KeyboardDoubleArrowRightOutlinedIcon/>
        }
    ]

    const[toggleTask, setToggleTask] = useState(false);
    const taskHandle = () => {
        setToggleTask(!toggleTask)
    }
    console.log(toggleTask)

  return (
    <> 
        <div className={navi ?'sidebar_col' : 'sidebar_main '}>
            <span>
                <img src={avatar} className='avatar_image' onClick={handleToggle}/>
            </span>
            <ul className='nav_bar_list'>
                {
                    navObj.map((item:any, i:any) => (
                        <li key={i} onClick={taskHandle}>
                            <ul className='nav_child_list'>
                                <li className='icon_first'>{item.Icon}</li>
                                { navi ?
                                    <>
                                        <li className='title_nav'><p>{item.Title}</p></li>
                                        <li className='icon_arrow'>{item.Arrow}</li>
                                    </> : <></>
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div> 
        {toggleTask ? <TaskComp handleChangeForm = {handleChangeForm} submitFormData = {submitFormData} formInputValue={formInputValue} setToggleTask = {setToggleTask} errorForm = {errorForm} handleError = {handleError} handleErrorTitle = {handleErrorTitle} handleErrorStatus = {handleErrorStatus}/> : <></>}
    </>
  )
}
