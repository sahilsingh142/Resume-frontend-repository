import { Link } from 'react-router';
import firstTemp from './All-Images/firstTem.png';
import secandTemp from './All-Images/secandTem.png';
import thirdTemp from './All-Images/thirdTem.png';
import { useDispatch } from 'react-redux';
import { selectTem } from '../handleSlice';
const AllTemp = () => {

  const dispatch = useDispatch();
  return (
    <>
      <div className='w-full h-full sm:h-screen bg-amber-50 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5'>
          <div className='w-[95%] hover:scale-95 duration-300 cursor-pointe'>
            <Link to="/FirstTemp">
               <img 
               src={firstTemp} 
               alt="Tamplate" 
               className='object-fill rounded-xl shadow shadow-neutral-400'
               onClick={()=>dispatch(selectTem("classic"))}
               />
            </Link>
          </div>
          <div className='w-[95%] mt-5 sm:mt-0 hover:scale-95 duration-300 cursor-pointe'>
            <Link to="/SecandTemp">
              <img 
              src={secandTemp} 
              alt="Tamplate" 
              className='rounded-xl shadow shadow-neutral-400'
              onClick={()=>dispatch(selectTem("modern"))}
              />
            </Link>
          </div>
          <div className='w-[95%] mt-5 sm:mt-0 hover:scale-95 duration-300 cursor-pointer'>
            <Link to="/ThirdTemp">
            <img 
            src={thirdTemp} 
            alt="Tamplate" 
            className='object-fill rounded-xl shadow shadow-neutral-400'
            onClick={()=>dispatch(selectTem("professional"))}
            />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllTemp
