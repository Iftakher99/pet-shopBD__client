import Footer from './Footer/Footer';

import Navbar from './NavBar/Navbar';
import Container from './Shared/Container';

const Layout = ({ children }) => (
  <>
    <Navbar title="PetShopBD" />
    <Container>{children}</Container>
    <Footer title="PetShopBD" />
  </>
);
export default Layout;
