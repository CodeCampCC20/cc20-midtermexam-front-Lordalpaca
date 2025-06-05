import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className='py-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout