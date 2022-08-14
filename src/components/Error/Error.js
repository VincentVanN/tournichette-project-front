import { useSelector } from 'react-redux';
import './error.scss';

function Error() {
  const errorMessage = useSelector((state) => state.user.errorMessage);
  return (
    <div className="errorMessage">
      {errorMessage}
    </div>
  );
}

export default Error;
