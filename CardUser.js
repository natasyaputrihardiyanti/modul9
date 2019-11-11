import React from 'react'
import {Link} from 'react-router-dom'

function CardUser({user}){
    return(
        <tr>
            <th scope="row">{user.id}</th>
            <th scope="row">{user.nama}</th>
            <th scope="row">{user.alamat}</th>
            <th>
            <Link className="btn btn-outline-info" to={'/editUser/' + user.id}>Edit</Link>
            <button type="button" class="btn btn-outline-danger">Hapus</button>

            </th>
        </tr>
    )
}

export default CardUser
