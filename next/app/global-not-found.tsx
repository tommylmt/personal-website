import {ReactElement} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function NotFound(): ReactElement {
    return (
        <html lang="en">
            <body>
                <div>
                    <h1>Error 404</h1>
                    <p>The page you are looking for does not exist.</p>
                </div>
            </body>
        </html>
    );
}
