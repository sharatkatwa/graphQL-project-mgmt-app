import Clients from '../components/Clients.jsx'
import AddClientModel from '../components/AddClientModal'
import AddProjectModal from '../components/AddProjectModal.jsx'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModel />
        <AddProjectModal />
      </div>
      <Projects />

      <hr />
      <Clients />
    </>
  )
}

export default Home
