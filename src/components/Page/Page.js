import PropTypes from 'prop-types';
import SideBar from 'src/components/SideBar/SideBar';

function Page({ children }) {
  return (
    <div className="container">
      <main className="page">
        <SideBar />
        {children}
      </main>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
