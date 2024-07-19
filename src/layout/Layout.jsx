import PropTypes from "prop-types";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout({ children, background }) {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <main
        className={`min-w-full ${background} max-w-sm flex-grow transition duration-300 sm:max-w-lg`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
};
