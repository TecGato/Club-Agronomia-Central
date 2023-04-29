import { Layout, InfoSlider } from '@/components/Page';
import { images, info } from '../../../helpers/taekwondo';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
export default function Taekwondo({data}) {
    return (
        <Layout image={images[4].src} title="TAEKWONDO">
            <InfoSlider images={images} info={info} />
            <MatchesInfo
                data={data}
                classname={"bg-indigo-100 dark:bg-indigo-400 w-full h-full flex items-center"}
            />
        </Layout>
    );
}

export async function getStaticProps() {
    try {
    const res = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/matches');
    const data = await res.json();


    return {
    props: { data: data },
    };
    } catch (error) {
      return { error: error.message };
    }
  }