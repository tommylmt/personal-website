import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="dark:bg-black overflow-x-hidden">
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
