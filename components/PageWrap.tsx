import Navbar from './Navbar';

export const PageWrap: React.FC = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    {/* <Footer /> */}
  </>
);
