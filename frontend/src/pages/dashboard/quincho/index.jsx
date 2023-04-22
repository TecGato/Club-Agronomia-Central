import { Layout } from '@/components/Dashboard';
import { QuinchoCalendarContainer } from '@/components/Page';




export default function Quincho(props) {
    return (
        <Layout>
            <div className='p-10'>
            <QuinchoCalendarContainer
                props={props}
            />
            </div>
        </Layout>
    );
}




export async function getStaticProps(){
    try{

        const resd = await fetch('http://localhost:3001/api/events');
        const datad = await resd.json();

        const resDatesd = await fetch('http://localhost:3001/api/dateevents');
        const dataDatesd = await resDatesd.json();

        return {
            props: { datad:datad, dataDatesd: dataDatesd}
        }

    }catch(error){
        return{error:error.message}
    }

}