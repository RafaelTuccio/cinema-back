import { useState } from 'react';
import DataTableFilmes from '../../DataTable/Filmes/index';

const TableFilme = (props) => {
    const { filmes } = props;
    

    return(
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Gênero</th>
                        <th>Duração</th>
                        <th>Classificação</th>
                        <th>Lançamento</th>
                        {/* <th>Sinopse</th> */}
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filmes.map((filme) => {
                            return(
                                <DataTableFilmes key={filme.filme_id} filme={filme} />
                            )
                        })
                    }
                </tbody>
            </table>
    );
}

export default TableFilme;