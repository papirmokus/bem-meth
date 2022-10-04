import './avatar.css'

const Avatar = ({ src, alt, className, ...rest }) => {
  return (
    <div {...rest} className={`avatar_container ${className ? ` ${className}` : ''}`}>
      <img src={src} alt={alt} className='avatar__image' />
    </div>
  )
}

export default Avatar
