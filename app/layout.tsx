import { AuthContextProvider } from 'context/AuthContextProvider';
import { Header } from 'Layout/Header/Header';
import { ThemeBody } from 'Layout/ThemeBody/ThemeBody';
import './layout.scss';

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
            <ThemeBody>
                <AuthContextProvider>
                    <Header />
                    {children}
                </AuthContextProvider>
            </ThemeBody>
        </html>
    );
}
