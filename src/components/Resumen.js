import React, {  } from 'react'
import styled from '@emotion/styled'
import {mayuscula} from '../helper'
const ContenedorResumen = styled.div`
padding:1rem;
text-align:center;
background-color:#00838f;
color:#fff;
margin-top:1rem;
`
const Resumen = ({ datos }) => {
    //extraer datos
    const { marca, year, plan } = datos;
    if (marca === '' || year === '' || plan === '') return null;
    return (

        <ContenedorResumen>
            <h2>Resumen Cotizacion</h2>
            <ul>
                <li>Marca: {mayuscula(marca)}</li>
                <li>Año: {year}</li>
                <li>Plan: {mayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>
    );
}

export default Resumen;