import Image from "next/image"

const LoadingSpinner = () => {
  return (
    <Image src={`/loading.gif`} width={150} height={150} alt="loading screen" className="w-[100px] sm:w-[150px] h-auto" />
  )
}

export default LoadingSpinner
