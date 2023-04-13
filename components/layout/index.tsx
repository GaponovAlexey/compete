import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: any) => {
  return (
    <div className="layout_all">
      <Header />
      <div className="layout_main">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
