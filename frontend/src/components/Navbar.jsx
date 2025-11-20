
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <div className='bg-black p-3 flex justify-between items-center'>
        <div>
            <h1 className='text-white'>Logo</h1>
        </div>
        <div className='text-white flex gap-10 items-center'>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
             <Link to="/contact" >Contect</Link>
        </div>
     </div>
    </>
  )
}

export default Navbar
