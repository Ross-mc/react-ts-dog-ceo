import DogImage from "./DogImage"

interface ImageProps {
  images: string[]
}

const ImageContainer: React.FC<ImageProps> = ({images}) => {
  return (
    <div className="image-container">
      {images.map(image => <DogImage image={image} key={image}/>)}
    </div>
  )
}

export default ImageContainer