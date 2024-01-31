import React from 'react'
import "../Body/bodycomp.css"
import Header from '../../Header/Header'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function BodyComp() {
  return (
    <>
      <div className='body_main'>
          <div>
            <Header/>
          </div>
          <div className='body_table_main'>
            <ul className='body_table_title'>
              <li>
                <ul className='body_table_title_left'>
                  <li>
                    <input type='checkbox'/>
                  </li>
                  <li>
                    <h3>Tasks</h3>
                  </li>
                </ul>
              </li>
              <li>
                <input type='search' placeholder='Search here.....' style={{height: '30px', width: '70%', padding: '0px 10px'}}/>
              </li>
              <li>
                <ul className='body_table_title_right'>
                  <li>
                    <AddOutlinedIcon style={{fontSize: '16px', margin: '3px auto'}}/>
                  </li>
                  <li>
                    <WifiOffOutlinedIcon style={{fontSize: '16px', margin: '3px auto'}}/>
                  </li>
                  <li>
                    <SaveAltOutlinedIcon style={{fontSize: '16px', margin: '3px auto'}}/>
                  </li>
                  <li>
                    <RefreshOutlinedIcon style={{fontSize: '16px', margin: '3px auto'}}/>
                  </li>
                </ul>
              </li>
            </ul>
            <div style={{borderTop: '1px solid #ccc', width: '100%', position: 'absolute', left: '0'}}></div>
            <div className='table_main'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Points</th>
                    <th>Priority</th>
                    <th>Created On</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Hi</td>
                    <td>Hi</td>
                    <td>2</td>
                    <td>Hi</td>
                    <td>00/00/0000</td>
                    <td><EditOutlinedIcon/></td>
                    <td><DeleteOutlineOutlinedIcon/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  )
}
