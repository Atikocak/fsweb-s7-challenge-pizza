import PropTypes from "prop-types";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout(props) {
  const { children, product, background } = props;

  return (
    <div className={`flex min-h-screen w-full flex-col ${background}`}>
      <Header product={product} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
