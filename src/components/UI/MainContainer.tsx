const MainContainer: React.FC = ({children}) => {
  return (
    <div className="main-container" data-testid="test-container">
      {children}
    </div>
  )
}

export default MainContainer