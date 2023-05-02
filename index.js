const Notification = props => {
  //  Write your code here.
  const {image,message,className} =props 
  <li className={`${className}`}>
      <img src={image} alt="image"/>
      <p>{message}</p>
  </li>
}

const element = (
  //  Write your code here.  
  <h1>Notifications</h1>
  <Notification 
    image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    message="Information Message"
    className="box-1"
  />
    <Notification 
    image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    message="Success Message"
    className="box-2"
  />
    <Notification 
    image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    message="Warning Message"
    className="box-3"
  />
    <Notification 
    image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    message="Error Message"
    className="box-4"
  />
)

ReactDOM.render(element, document.getElementById('root'))
