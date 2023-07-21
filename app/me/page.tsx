import { authGuard } from '@api/helpers';
import { Header } from '@components/Header/Header';

export default async function Page() {
    await authGuard();
    return <Header title="My Music" isSticky />;
}
