import { Helmet } from "react-helmet";

import Products from "../components/Products";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Mercado Libre</title>
                <meta name="description" content="Mercado Libre App" />
            </Helmet>
            <Layout>
                <Products />
            </Layout>
        </>
    );
}
