export const Button = ({children, color}) => {
  return (
    <button className="primary-btn" style={{backgroundColor: color}}>{children}</button>
  )
}
