import PropTypes from 'prop-types';
import SideBar from 'src/components/SideBar/SideBar';
// import SideBar1 from 'src/components/SideBar1/SideBar1';

function Page({ children }) {
  return (
    <main>
      <SideBar />
      {/* <SideBar1 /> */}
      {children}
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
