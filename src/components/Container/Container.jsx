import './container.css'

const Container = ({ children, ...rest }) => {
  return (
    <div className='container container_grid' {...rest}>
      {children}
    </div>
  )
}

export default Container
