import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <Link 
      to="/Home"  
      className="flex gap-2 items-center hover:text-[#768efc] font-semibold 
                 text-base sm:text-lg md:text-xl
                 px-2 py-1 sm:px-3 sm:py-1.5"
    >
      Home
    </Link>
  )
}

export default Home