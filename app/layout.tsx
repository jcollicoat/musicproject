import '@styles/layout.scss';
import { AuthContextProvider } from '@context/AuthContextProvider';
import { QueryContextProvider } from '@context/QueryContextProvider';

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
            <body
            // className="light-theme"
            >
                <AuthContextProvider>
                    <QueryContextProvider>{children}</QueryContextProvider>
                </AuthContextProvider>
            </body>
        </html>
    );
}
