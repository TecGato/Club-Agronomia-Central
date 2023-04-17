import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement
);

export const LineChart = () => {
    const ingresos = [
        { month: 'Enero', count: 10 },
        { month: 'Febrero', count: 20 },
        { month: 'Marzo', count: 13 },
        { month: 'Abril', count: 2 },
        { month: 'Mayo', count: 7 },
        { month: 'Junio', count: 17 },
        { month: 'Julio', count: 15 },
        { month: 'Agosto', count: 15 },
        { month: 'Septiembre', count: 5 },
        { month: 'Octubre', count: 20 },
        { month: 'Noviembre', count: 19 },
        { month: 'Diciembre', count: 25 },
    ];
    const data = {
        labels: ingresos.map(({ month }) => month),
        datasets: [
            {
                label: 'Reservas',
                data: ingresos.map(({ count }) => count),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0,
            },
        ],
    };
    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                },
            },
            y: {
                ticks: {
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
            lg:col-span-3
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
                <Line data={data} options={options} />
            </div>
        </div>
    );
};
