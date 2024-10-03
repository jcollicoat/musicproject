import 'styles/layout.scss';
import { ThemeBody } from '@components/ThemeBody/ThemeBody';
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
            <ThemeBody>
                <AuthContextProvider>
                    <QueryContextProvider>{children}</QueryContextProvider>
                </AuthContextProvider>
            </ThemeBody>
        </html>
    );
}
