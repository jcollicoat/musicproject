import { authGuard } from '@api/helpers';
import { Header } from '@components/Header/Header';

export const metadata = {
    title: 'My Music',
};

export default async function Page() {
    await authGuard();
    return <Header subtitle="My Music" data="user" />;
}
