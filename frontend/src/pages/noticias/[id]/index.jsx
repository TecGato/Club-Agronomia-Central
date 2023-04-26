import { Layout } from "@/components/Page";
import React from "react";

export default function Post({post}) {

    return (
        <Layout 
            title={post.title} 
            image={'https://img.freepik.com/foto-gratis/joven-corredor-atar-cordones_1421-46.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'}
        >
            <div className="mx-4 my-7 py-5 shadow-2xl grid">
                <img
                    src={post.picture.secure_url}
                    alt={post.title}
                    loading='lazy'
                    className='place-self-center'
                />
                <p className='text-base text-gray-700 leading-6 px-5 pt-0'>
                    {post.description}
                </p>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const response = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/posts');
    const posts = await response.json();

    const paths = posts.map(post => ({ params: { id: post._id } }));
  
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const response = await fetch(`http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/posts/${params.id}`);
    const post = await response.json();
  
    return {
      props: {
        post
      }
    };
  }

  

