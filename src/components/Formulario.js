import React, { useState } from 'react'
import styled from '@emotion/styled'
import { diferenciaYear, calcularMarca, obtenerPlan } from '../helper'
const Campos = styled.div`
display:flex;
margin-bottom:1rem;
align-items:center;

`
const Label = styled.label`
flex:0 0 100px;
`
const Select = styled.select`
display:block;
padding:1rem;
width:100%;
border:1px solid #e1e1e1;
-webkit-appearance:none;
`
const InputRadio = styled.input`
margin: 0 1rem;
`

const Boton = styled.button`
background-color:#00838f;
font-size:16px;
padding:1rem;
width:100%;
color:#fff;
text-transform:uppercase;
font-weight:bold;
border:none;
transition:background-color .3s ease;
margin-top:2rem;
&:hover{
    cursor:pointer;
    background-color:#26c6da;

}
`
const Error = styled.div`
background-color:red;
color:white;
padding:1rem;
text-align:center;
width:100%;
margin-bottom:1rem;
`

const Formulario = ({ setResumen, setCargando }) => {
    //state
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''

    });
    const [error, setError] = useState(false)    // extrar valores del state

    //destructuring
    const { marca, year, plan } = datos;
    //leer datos del formulario y colocar en state
    const obtenerDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }


    //submit
    const handleSubmit = e => {
        e.preventDefault();



        //al menos un error
        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        //obtener la diferencia de años
        const diferencia = diferenciaYear(year)

        //base 2000
        let resultado = 2000;

        //restar el 3% de diferencia 
        resultado -= ((diferencia * 3) * resultado) / 100


        //Americano 15%
        //asiatico 5%
        //Europe %30 
        resultado = calcularMarca(marca) * resultado;

        //basico  + 20%
        //completo + 50% de su incremento
        const incremento = obtenerPlan(plan)
        resultado = parseFloat(incremento * resultado).toFixed(2)
        console.log(resultado)

        //spinner
        setCargando(true)
        setTimeout(() => {
            setCargando(false)
            //total
            setResumen({
                cotizacion: resultado,
                datos

            })

        }, 1500)



    }

    return (
        <form
            onSubmit={handleSubmit}

        >
            {
                error
                    ?
                    <Error>Todos los campos obligatorios</Error>
                    :
                    null
            }
            <Campos>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    onChange={obtenerDatos}
                >
                    <option value="" >---Seleccione---</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campos>
            <Campos>
                <Label>Año</Label>
                <Select
                    name="year"
                    onChange={obtenerDatos}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campos>
            <Campos>
                <Label>Tipo</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={obtenerDatos}
                />Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={obtenerDatos}
                />
                Completo
            </Campos>
            <Boton type="submit">Agregar</Boton>
        </form>

    );
}

export default Formulario;