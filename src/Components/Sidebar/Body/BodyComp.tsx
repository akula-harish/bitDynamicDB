import "../Body/bodycomp.css"
import Header from '../../Header/Header'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function BodyComp(props: any) {
  const {tableData, handleDelete, handleFilterData} = props;
  //taking date and converting to json and grabing the 10 values and i did reverse and joined with / this
  const newDate = new Date().toJSON().slice(0, 10).split('-').reverse().join('/')
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
                    <input type='radio'/>
                  </li>
                  <li>
                    <h3>Tasks</h3>
                  </li>
                </ul>
              </li>
              <li>
                <select onClick={(e:any) => handleFilterData(e.target.value)}>
                    <option value = 'none'>---Status Filter---</option>
                    <option value = 'Backlog'>Backlog</option>
                    <option value = 'Development'>Development</option>
                    <option value = 'Grooming'>Grooming</option>
                </select>
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
                {tableData.length === 0 ? 
                  <tr>
                    <td className='empty_table'>--</td>
                    <td className='empty_table'>--</td> 
                    <td className='empty_table'>--</td> 
                    <td className='empty_table'>--</td>
                    <td className='empty_table'>--</td> 
                    <td className='empty_table'>--</td>
                    <td className='empty_table'>--</td> 
                    <td className='empty_table'>--</td>
                  </tr> 
                  :tableData.map((item: any, index: any) => {
                    item.id = index+ 1
                    return (
                    <tr key={index}>
                        <td>BIT-{item.id}</td>
                        <td>{item.titleData}</td>
                        <td>{item.statusData}</td>
                        <td>{item.pointsData}</td> 
                        <td>{item.priorityData}</td>
                        <td>{newDate}</td>
                        <td><EditOutlinedIcon/></td> 
                        <td onClick={() => handleDelete(item.id)}><DeleteOutlineOutlinedIcon/></td>              
                    </tr>
                    );
              })}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  )
}
