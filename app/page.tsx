'use client';
import { Button } from '@components/Button/Button';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Panel>
                    <Button
                        ariaLabel="Button"
                        text="Button"
                        onClick={() => alert('Button clicked!')}
                    />
                </Panel>
            </main>
        </>
    );
}
