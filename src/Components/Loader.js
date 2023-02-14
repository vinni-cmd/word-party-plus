import favicon from '../assets/favicon.png'
const Loader = ({isLoading}) => {
    const loaderClass = isLoading ? "loader loading" : "loader"
    return (
    <div className={loaderClass}>
        <img src={favicon} />
        
        
    </div>
  )
}

export default Loader