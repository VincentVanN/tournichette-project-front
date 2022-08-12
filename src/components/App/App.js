// == Import
import './app.scss';

import SideBar from 'src/components/SideBar/SideBar';
import Footer from 'src/components/Footer/Footer';

// == Composant
function App() {
  return (
    <div className="app">
      <SideBar />
      <h1>Blabla</h1>
      <Footer />
    </div>
  );
}

// == Export
export default App;
