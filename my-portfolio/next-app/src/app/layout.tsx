import './globals.css';
import Navbar from './components/Navbar/Navbar';

export const metadata = {
    title: 'Portfolio',
    description: 'Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className="mt-16">{children}</main>
            </body>
        </html>
    );
}
