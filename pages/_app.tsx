import '@/src/assets/css/global.css';
import type { AppProps } from 'next/app'
import {appWithTranslation} from "next-i18next";
import Layout from "@/src/components/layout/Layout";
import nextI18nextConfig from "@/next-i18next.config";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default appWithTranslation(MyApp, nextI18nextConfig);
