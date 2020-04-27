import React from 'react';
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Mensaje = styled.p`
background-color:rgb(127,224,237);
padding:1rem;
margin-top:1rem;
text-align:center;

`;

const ResultadoCotizacion = styled.div`
text-align:center;
padding:.5rem;
border:1px solid #26C6DA;
background-color:#26C6DA;
margin-top:1rem;
position: relative;
`;

const Texto = styled.p`
color:#00838f;
padding:1rem;
margin:0;
text-transform:uppercase;
font-weight:bold;

`;

const Resultado = ({ cotizacion }) => {

    return (
        cotizacion === 0
            ? <Mensaje>Ingresa los datos </Mensaje>
            : <ResultadoCotizacion>
                <TransitionGroup
                    component="span"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{ enter: 500, exit: 500 }}
                    >
                        <Texto>El total es: <span>${cotizacion}</span></Texto>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
    );
}

export default Resultado;