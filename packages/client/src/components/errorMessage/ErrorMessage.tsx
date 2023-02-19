import error from '../../assets/img/error.png'
import './errorMessage.scss'
import { ErrorBoundary } from '../../utils/ErrorBoundary'

function ErrorMessage() {
  return (
    <ErrorBoundary>
      <div className="error">
        <img src={error} alt="error" className="error__img" />
        <p className="error__text">Что-то пошло не так...</p>
      </div>
    </ErrorBoundary>
  )
}

export default ErrorMessage
