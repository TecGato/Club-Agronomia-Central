


export function MatchesTable(props){
    return(
        <div>
            <div class="flex flex-row items-center justify-center ">
                <table class="border-collapse text-center text-sm text-gray-500">
                    <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Nombre del Encuentro</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Fecha</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Equipo Local</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Equipo Visitante</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Disciplina</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                    <tr >
                        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">

                        <div class="text-sm">
                            <div class="font-medium text-gray-700">{"props.data[0].name"}</div>

                        </div>
                        </th>
                        <td class="px-6 py-4">
                        <span
                            class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                        >
                            <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                            {"props.data[0].date"}
                        </span>
                        </td>
                        <td class="px-6 py-4">{"props.data[0].home_team"}</td>
                        <td class="px-6 py-4">{"props.data[0].away_team"}</td>
                        <td class="px-6 py-4">
                        <div class="flex gap-2">
                            <span
                            class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                            >
                            {"props.data[0].discipline"}
                            </span>

                        </div>
                        </td>


                    </tr>

                    </tbody>
                </table>
                </div>


        </div>
    )
}