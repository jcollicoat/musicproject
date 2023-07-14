import '@styles/globals.scss';
import { AuthContextProvider } from './library/context/AuthContextProvider';
import { QueryContextProvider } from './library/context/QueryContextProvider';

export const metadata = {
    title: 'Music Project',
    description: 'This is the music project.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AuthContextProvider>
                    <QueryContextProvider>{children}</QueryContextProvider>
                </AuthContextProvider>
            </body>
        </html>
    );
}
