import { QuinchoCalendarContainer } from '@/components/Page';




export default function Quincho(props) {

    return (

    <QuinchoCalendarContainer
        props= {props}
    />
    );
}



export async function getStaticProps(){
    try{

        const res = await fetch('http://localhost:3001/api/events');
        const data = await res.json();


        const resDates = await fetch('http://localhost:3001/api/dateevents');
        const dataDates = await resDates.json();

        return {
            props: {
                data: data,
                dataDates:dataDates,
             }
        }

    }catch(error){
        return{error:error.message}
    }

}