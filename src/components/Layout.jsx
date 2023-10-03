import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen font-poppins bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
