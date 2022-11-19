import Head from "./head";
import '../styles/globals.css';
import "../styles/Home.module.css";

export default function RootLayout({ children }) {
    return (
    <html lang="en">
        <Head />
        <body id='body'> 
            {children} 
        </body>
    </html>
    );
}