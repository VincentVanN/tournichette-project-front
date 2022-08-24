import { useSelector } from 'react-redux';
import './error.scss';

function Error() {
  const errorMessage = useSelector((state) => state.user.errorMessage);

  return (
    <div className="container">
      <div className="errorMessage">
        <ul>
          {errorMessage.map((error) => (
            <li
              key={error}
            >{error}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Error;
