import SecandTemp from './SecandTemp'

const AllTemp = () => {
  return (
    <>
    <div className='w-full min-h-screen bg-black flex justify-center items-center'>
  <div className='bg-neutral-200 w-full h-full'>
    
    <div className='h-full flex px-5 py-6 gap-10 '>
      <SecandTemp/>

      <SecandTemp/>
  
      <SecandTemp/>
    </div>

    <div className='h-full flex  px-3 py-6 gap-10'>
      <SecandTemp/>

      <SecandTemp/>
  
      <SecandTemp/>
    </div>

  </div>
</div>
    </>
  )
}

export default AllTemp
