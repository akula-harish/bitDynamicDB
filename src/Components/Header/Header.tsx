import React from 'react'
import logo from '../../assets/Logo.png'
import "../../Components/Header/header.css"
import EditIcon from '@mui/icons-material/Edit';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

export default function Header() {
  return (
    <>
        <ul className='header_main_list'>
            <li>
                <ul className='header_first_list'>
                    <li>
                        <a href='#'>
                            <img src={logo} className='bitkemy_logo'/>
                        </a>
                    </li>
                    <li>
                        <div className='edit_name'>
                            <p>Silverlie Ai - Test | <EditIcon style={{fontSize: '14px'}}/></p>
                        </div>
                    </li>
                </ul>
            </li>  
            <li>
                <ul className='header_second_list'>
                    <li>
                        <a href='#'>
                            <Diversity3Icon/>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <CommentOutlinedIcon/>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <div className='bi_profile'>
                                <p>BI</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>  
        </ul>
    </>
  )
}
