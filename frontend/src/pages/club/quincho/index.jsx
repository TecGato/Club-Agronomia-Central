import { QuinchoCalendarContainer } from '@/components/Page';




export default function Quincho(props) {

    return (

    <QuinchoCalendarContainer
        props= {props}
    />
    );
}



export async function getStaticProps(){
    // try{

        const res = await fetch('http://localhost:3001/api/events');
        const data = await res.json();

        return {
            props: { data }
        }

    // }catch(error){
    //     return{error:error.message}
    // }

}