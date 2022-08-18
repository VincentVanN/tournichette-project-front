import { useSelector } from 'react-redux';
import './error.scss';

function Error() {
  const errorMessage = useSelector((state) => state.user.errorMessage);
  return (
    <div className="container">
      <div className="errorMessage">
        {errorMessage}
      </div>
    </div>
  );
}

export default Error;
