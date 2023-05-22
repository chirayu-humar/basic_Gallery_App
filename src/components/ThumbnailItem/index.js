// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, primeImageId, changePrimeImage} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = details
  const isActive = id === primeImageId
  const ThumbnailClass = isActive ? '' : 'unSelected'

  const changePrimeImageOnClick = () => {
    changePrimeImage(id)
  }

  return (
    <li className="container">
      <button className="temp" onClick={changePrimeImageOnClick} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`image ${ThumbnailClass}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
