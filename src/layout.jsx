import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import injectContext from "./store/appContext";

import { Navbar } from "./components/navBar";
import { Footer } from "./components/footer";
import App from "./views/App";
import { About } from "./views/about";
import { NotFound } from "./views/notFound";
import { Gallery } from "./views/gallery";
import { Contact } from "./views/contact";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    // const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter >
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<App />} path="/" />
                        {/* <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" /> */}
                        <Route element={<NotFound />}  />
                        <Route element={<About />} path="/aboutme"/>
                        <Route element={<Contact />} path="/contact"/>
                        <Route element={<Gallery />} path="/gallery"/>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);