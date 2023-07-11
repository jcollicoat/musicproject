import { ClientAuthProvider } from '@components/ClientAuthProvider/ClientAuthProvider';
import '@styles/globals.scss';

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
                <ClientAuthProvider>{children}</ClientAuthProvider>
            </body>
        </html>
    );
}
