import Head from "./head";
import '../styles/globals.css';
import { AnalyticsWrapper } from '../components/analytics';

export default function RootLayout({ children }) {
    return (
    <html lang="en">
        <Head title="Home Page"/>
        <body id='body' className="bg-white dark:bg-black"> 
            {children} 
            <AnalyticsWrapper />
        </body>
    </html>
    );
}