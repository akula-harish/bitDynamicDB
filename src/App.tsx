import BodyComp from './Components/Sidebar/Body/BodyComp'
import SidebarComp from './Components/Sidebar/SidebarComp'
import "./App.css"

export default function App() {
  return (
    <div style={{display: 'flex', verticalAlign: 'top'}}>
      <SidebarComp/>
      <BodyComp/>
    </div>
  )
}
