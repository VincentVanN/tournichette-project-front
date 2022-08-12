// == Import
import './app.scss';
import SideBar from 'src/components/SideBar/SideBar';
import Footer from 'src/components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from './Loading/Loading';
import { setProductsData } from '../../feature/products.slice';
import { setUser } from '../../feature/user.slice';
import LoginForm from '../LoginForm/LoginForm';

function App() {
  const loading = useSelector((state) => state.products.loading);
  const logged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    console.log(loggedUser);
    if (loggedUser) {
      dispatch(setUser(loggedUser.slug, loggedUser.token));
    }
    dispatch(setProductsData());
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      {(!logged) && <LoginForm />}
      {(logged)
    && (
    <>
      <SideBar />
      <h1>Blabla</h1>
      <Footer />
    </>
    )}

    </div>
  );
}

// == Export
export default App;
