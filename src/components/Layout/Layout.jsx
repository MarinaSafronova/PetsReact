import Header from "../Header/Header";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";

function Layout({children}) {
    return (
        <div>
            <Header />
            <main>
                {/* Render the children components */}
                {children}
            </main>
            <Footer/>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
