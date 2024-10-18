import { Shimmer } from 'Panels/Shimmer/Shimmer';
import './loading.scss';

export default function Loading() {
    return (
        <main>
            <Shimmer gridArea="one" height={210} />
            <Shimmer gridArea="two" shape="circle" />
            <Shimmer gridArea="three" />
        </main>
    );
}
