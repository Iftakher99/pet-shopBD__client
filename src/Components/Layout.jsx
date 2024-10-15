import Footer from './Footer/Footer';

import Navbar from './NavBar/Navbar';
import Container from './Shared/Container';

const Layout = ({ children }) => (
  <>
    <Navbar title="Pet Shop BD" />
    <Container>{children}</Container>
    <Footer title="Pet Shop BD" />
  </>
);
export default Layout;
