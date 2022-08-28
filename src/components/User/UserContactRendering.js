import { useSelector } from 'react-redux';
import Page from '../Page/Page';
import UserContact from './UserContact';

function UserContactRendering() {
  const width = useSelector((state) => state.navigation.width);
  if (width >= 1280) {
    return (
      <UserContact />
    );
  }
  return (
    <Page>
      <UserContact />
    </Page>
  );
}

export default UserContactRendering;
