import './Avatar.scss';

function Avatar({image, alt, imgClass, parentClass}) {
  return (
    <figure className={`avatar ${parentClass}`}>
        {image && <img className={`avatar__image ${imgClass}`} src={image} alt={alt} />}
        {!image && <div className={`avatar__image avatar__image--no-image ${imgClass}`}></div>}
    </figure>
  )
}

export default Avatar