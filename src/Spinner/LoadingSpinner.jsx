import Spinner from "/others/cupcake-dribbble.gif"
const LoadingSpinner = () => {
    return (
      <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white'>
        <img src={Spinner} alt="" />
      </div>
    )
  }
  
  export default LoadingSpinner