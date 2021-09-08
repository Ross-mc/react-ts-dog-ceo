interface ErrorProps {
  message: string
}

const ErrorDisplay: React.FC<ErrorProps> = ({message}) => {
  return (
    <div className="error">
      {message}
    </div>
  )
}

export default ErrorDisplay