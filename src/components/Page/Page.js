import PropTypes from 'prop-types';
import SideBar from 'src/components/SideBar/SideBar';

function Page({ children }) {
  return (
    <main>
      <SideBar />
      {children}
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
