import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-lg flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
