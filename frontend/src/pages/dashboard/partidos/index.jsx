import { Layout } from '@/components/Dashboard';
import { MatchesTable } from '@/components/Dashboard/MatchesTable';

export default function Matches({data}) {
    return (
        <Layout>
            <div>
                <MatchesTable
                    data={data}
                />
            </div>
        </Layout>
    );
}



export async function getStaticProps() {
    try {
    //   const resd = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events');
      const res = await fetch('http://localhost:3001/api/matches');
      const data = await res.json();


      return {
        props: { data: data },
      };
    } catch (error) {
      return { error: error.message };
    }
  }