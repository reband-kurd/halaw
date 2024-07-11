import {Inter} from 'next/font/google'
import "../styles/globals.css";


export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts",
};

const RootLayout = ({children}) => (
    <html lang='en'>
    <body>
    <provider>

        <div className='main'>
            <div className='gradient'/>
        </div>

        <main className='app'>
            {children}
        </main>
    </provider>

    </body>
    </html>
);

export default RootLayout;