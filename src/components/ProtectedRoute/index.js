import Cookie from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwt = Cookie.get('jwt_token')
  if (jwt === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}
export default ProtectedRoute
