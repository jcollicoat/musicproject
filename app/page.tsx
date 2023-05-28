"use client";
import { Button } from "@/components/Button/Button";

export default function Home() {
    return (
        <main>
            <div>
                <Button
                    ariaLabel="Button"
                    text="Button"
                    onClick={() => alert("Button clicked!")}
                />
            </div>
        </main>
    );
}
