import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        y: {
            ticks: {
                callback: function (value, index, ticks) {
                    return '$' + value;
                },
                fontColor: '#262626',
                autoSkip: false,
            },
        },

        x: {
            ticks: {
                autoSkip: false,
                fontColor: '#262626',
            },
        },
    },
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
    },
};

export const BarChart = () => {
    const ingresos = [
        { month: 'Enero', count: 17400 },
        { month: 'Febrero', count: 20000 },
        { month: 'Marzo', count: 45450 },
        { month: 'Abril', count: 20000 },
        { month: 'Mayo', count: 23000 },
        { month: 'Junio', count: 21000 },
        { month: 'Julio', count: 22000 },
        { month: 'Agosto', count: 23000 },
        { month: 'Septiembre', count: 24000 },
        { month: 'Octubre', count: 25000 },
        { month: 'Noviembre', count: 40000 },
        { month: 'Diciembre', count: 27000 },
    ];
    const data = {
        labels: ingresos.map(({ month }) => month),
        datasets: [
            {
                label: 'Ingresos',
                data: ingresos.map(({ count }) => count),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div
            className="w-full col-span-2 bg-white border border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg relative
            lg:col-span-3
            flex flex-col justify-between
            "
        >
            <div className='flex justify-between'>

            <p className="text-lg text-center text-[#262626] font-medium">
                Ingresos del Quincho
            </p>
            <select name="" id="">
                <option value="year">Año</option>
                <option value="month">Mes</option>
                <option value="week">Semana</option>
            </select>
            </div>
            <div>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};
