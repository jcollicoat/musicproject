'use client';

import { Header } from '@components/Header/Header';
import { useUserProfile } from '@hooks/music/useUserProfile';

export default function Page() {
    const user = useUserProfile();
    console.log(user);

    return <Header title="Dashboard" isSticky />;
}
