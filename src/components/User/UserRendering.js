import { useSelector } from 'react-redux';
import Page from '../Page/Page';
import User from './User';

function UserRendering() {
  const width = useSelector((state) => state.navigation.width);
  if (width >= 1280) {
    return (
      <User />
    );
  }
  return (
    <Page>
      <User />
    </Page>
  );
}

export default UserRendering;
