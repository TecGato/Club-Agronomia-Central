import { Layout, InfoSlider } from '@/components/Page';
import { images, info } from './taekwondo';

export default function Taekwondo() {
    return (
        <Layout image={images[4].src} title="TAEKWONDO">
            <InfoSlider images={images} info={info} />
        </Layout>
    );
}
