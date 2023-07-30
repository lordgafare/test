import Footer from "../components/Footer";
import HeaderViews from "../components/Header";
import PropTypes, { string } from 'prop-types';

Layout.propTypes = {
  views: PropTypes.element.isRequired,
  word: string,
};

export default function Layout({views, word}) {
  return (
    <>
   <HeaderViews />
    {views}
    <h1>{word}</h1>
   <Footer />
    </>
  );
}

