import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './user.scss';
import Page from '../Page/Page';

function UserContact() {
  const { slug } = useParams();
  const users = useSelector((state) => state.user.users);
  const userToDisplay = users.find((user) => user.slug === slug);
  return (
    <Page>
      <>
        <div className="updateUserAccount"> Mettre à jour mes informations</div>
        <div className="firstname">{userToDisplay.firstname}</div>
        <div className="lastname">{userToDisplay.lastname}</div>
        <div className="phone">{userToDisplay.phone}</div>
        <div className="email">{userToDisplay.email}</div>
      </>
    </Page>

  );
}

export default UserContact;
