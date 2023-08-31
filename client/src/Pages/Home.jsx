import Content from '../Components/Content'
import Footbar from '../Components/Footbar'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <div className='flex'>
      <div className='w-3/12 flex flex-col '>
        <Sidebar />
        <Footbar />
      </div>
      <div className='w-full'>
        <Navbar />
        <Content />
      </div>
    </div>
  )
}

export default Home