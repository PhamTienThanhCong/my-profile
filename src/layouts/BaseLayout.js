import Footer from "./Footer";
import Navbar from "./NavBar";

const BaseLayout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
