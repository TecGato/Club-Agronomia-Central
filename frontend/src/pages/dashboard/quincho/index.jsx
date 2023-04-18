import { Layout } from '@/components/Dashboard';
import { QuinchoCalendarContainer } from '@/components/Page';




export default function Quincho() {
    return (
        <Layout>
            <div>index</div>
        </Layout>
    );
}




export async function getStaticProps(){
    try{

        const res = await fetch('http://localhost:3001/api/events');
        const data = await res.json();

        return {
            props: { data }
        }

    }catch(error){
        return{error:error.message}
    }

}