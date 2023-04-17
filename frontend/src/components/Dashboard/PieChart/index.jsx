import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    ArcElement
);

export const PieChart = () => {
    const ingresos = [
        { month: 'Reservado', count: 10 },
        { month: 'Reservado y confirmado', count: 20 },
        { month: 'Reservado,confirmado y pagado', count: 5 },
    ];
    const data = {
        labels: ingresos.map(({ month }) => month),
        datasets: [
            {
                label: 'Estado',
                data: ingresos.map(({ count }) => count),
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                tension: 0,
            },
        ],
    };
    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    display: false,
                    autoSkip: false,
                },
            },
            y: {
                ticks: {
                    display: false,
                    autoSkip: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <div
            className="w-full col-span-2 bg-white border border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg relative
            lg:col-span-2
            flex flex-col justify-between
            "
        >
            <div className="flex justify-between">
                <p className="text-lg text-center text-[#262626] font-medium">
                    Numero de Reservas
                </p>
                <select name="" id="">
                    <option value="year">Año</option>
                    <option value="month">Mes</option>
                    <option value="week">Semana</option>
                </select>
            </div>
            <div>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};
