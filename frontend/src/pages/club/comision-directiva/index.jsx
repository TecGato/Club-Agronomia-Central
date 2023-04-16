import Image from 'next/image';

import { Layout } from '@/components/Page';

import Presidente from '../../../../public/directives-img/imagen1.jpg';
import Vicepresidente from '../../../../public/directives-img/imagen2.jpg';
import Secretario from '../../../../public/directives-img/imagen3.jpg';
import ProSecretario from '../../../../public/directives-img/imagen4.jpg';
import Tesorero from '../../../../public/directives-img/imagen5.jpg';

export default function SteeringCommittee() {
    const directive = [
        ['Presidente', 'Diego Dottore', Presidente],
        ['Vicepresidente', 'Hernán Blotta', Vicepresidente],
        ['Secretario', 'Marcelo Vitar', Secretario],
        ['Pro Secretario', 'Gustavo Majluf', ProSecretario],
        ['Tesorero', 'Pablo Jorge', Tesorero],
    ];

    return (
        <Layout
            title={'Comisión Directiva'}
            image={
                'https://img.freepik.com/foto-gratis/reunion-departamento_23-2147626530.jpg?w=996&t=st=1681513108~exp=1681513708~hmac=eb17a71ffb76874c81f1199abbfe9cef4f0b1e4e4b7c07ea8c72ea9cc0604b0e'
            }
        >
            <div className="lg:grid grid-cols-4 gap-8 py-10 px-5 lg:px-0 ">
                {directive.map(([position, name, image]) => (
                    <div class=" max-w-sm mx-auto bg-white shadow-lg mb-10  ">
                        <Image src={image} alt={name} />
                        <div class="text-center py-4 lg:text-left lg: pl-2 bg-gray-100">
                            <p class="text-lg pb-3 text-black font-bold">
                                {name}
                            </p>
                            <p class="text-slate-500 font-medium">{position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
