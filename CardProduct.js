import React from 'react'
import {Link} from 'react-router-dom'

function CardProduct({product}){
    return(
        <tr>
            <th scope="row">{product.product_id}</th>
            <th scope="row">{product.product_name}</th>
            <th scope="row">{product.product_price}</th>
            <th>
            <Link className="btn btn-outline-info" to={'/editProduct/' + product.product_id}>Edit</Link>
            <button type="button" class="btn btn-outline-danger">Hapus</button>

            </th>
        </tr>
    )
}

export default CardProduct
