import { Layout, NewsPost } from '@/components/Page';

export default function Posts() {
    return (
        <Layout
            title="Últimas Noticias"
            image="https://img.freepik.com/foto-gratis/gente-tiro-medio-corriendo-juntos_23-2149037629.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"
        >
            <div className="m-4">
                <NewsPost />
            </div>
        </Layout>
    );
}
