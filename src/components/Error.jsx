
const Error = ({ children }) => {
  return   (
    <div
      className='bg-red-600 text-white text-sm text-center p-1 uppercase font-bold mb-3 rounded-md'>
      {children}
    </div>
  )
}

export default Error;