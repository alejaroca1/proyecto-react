import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './LoginWidget.css'

export default function LoginWidget() {
  return (
    <div className="login-widget">
      <Link to={'/login'}>
        <FontAwesomeIcon icon={faUser} className="icon-user" title="Login" />
      </Link>      
    </div>
  );
}
