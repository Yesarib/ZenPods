import Footbar from '../Components/Footbar'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col '>
        <Sidebar />
        <Footbar />
      </div>
    </div>
  )
}

export default Home