import PropTypes from "prop-types";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout(props) {
  const { children, product, background } = props;

  return (
    <div className={`flex h-screen w-full flex-col ${background}`}>
      <Header product={product} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
