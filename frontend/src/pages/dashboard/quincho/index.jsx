import { Layout } from '@/components/Dashboard';
import { QuinchoCalendarContainer } from '@/components/Page';

export default function Quincho({ data, dataDates }) {
  return (
    <Layout>
      <div className="p-10">
        <QuinchoCalendarContainer
          data={data}
          dataDates={dataDates}
          itsAdmin={true}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const resd = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events');
    const datad = await resd.json();

    const resDatesd = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/dateevents');
    const dataDatesd = await resDatesd.json();

    return {
      props: { data: datad, dataDates: dataDatesd },
    };
  } catch (error) {
    return { error: error.message };
  }
}
