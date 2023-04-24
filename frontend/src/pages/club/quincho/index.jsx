import { Layout } from '@/components/Page';
import { QuinchoCalendarContainer } from '@/components/Page';
import image from '../../../../public/history-img/Prueba.png';

export default function Quincho({ data, dataDates }) {
  return (
    <>
      <Layout title={'Disponibilidad Quincho'} image={image}>
        <QuinchoCalendarContainer data={data} dataDates={dataDates} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events');
    const data = await res.json();

    const resDates = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/dateevents');
    const dataDates = await resDates.json();

    return {
      props: {
        data: data,
        dataDates: dataDates,
      },
    };
  } catch (error) {
    return { error: error.message };
  }
}
