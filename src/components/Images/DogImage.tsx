interface ImageProps {
  image: string
}

const DogImage: React.FC<ImageProps> = ({image}) => {
  return (
    <div className="image">
      <img src={image} alt="Dog" />
    </div>
  )
}

export default DogImage