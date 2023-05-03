


export function MatchesTable(props){
    return(

          <div class="inline-block rounded-lg border shadow-2xl bg-gray-200 mb-4">
                <table class="table-auto text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Nombre del encuentro
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Equipo Local
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Equipo Visitante
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Disciplina
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.matches?props.matches.slice(0,5).map((m)=>{

                                return (
                                    <tr class="   dark:bg-gray-800  dark:hover:bg-gray-600">
                                        <td class="px-6 py-4 font-medium text-black-700 dark:text-white">
                                            {m.name}
                                        </td>
                                        <td class="px-6 py-4">
                                            {m.date}
                                        </td>
                                        <td class="px-6 py-4">
                                            {m.home_team}
                                        </td>
                                        <td class="px-6 py-4">
                                            {m.away_team}
                                        </td>
                                        <td class="px-6 py-4">
                                            {m.discipline}
                                        </td>
                                    </tr>
                                )
                        }
                        ):null}
                    </tbody>
                </table>

        </div>
    )
}