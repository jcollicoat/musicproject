'use client';
import { Button } from '@components/Button/Button';
import { Panel } from '@components/Panel/Panel';

export default function Home() {
    return (
        <main>
            <Panel>
                <Button
                    ariaLabel="Button"
                    text="Button"
                    onClick={() => alert('Button clicked!')}
                />
                <Button
                    ariaLabel="Second Button"
                    text="Second Button"
                    onClick={() => alert('Button clicked!')}
                    style="secondary"
                />
            </Panel>
        </main>
    );
}
