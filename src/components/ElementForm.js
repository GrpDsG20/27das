import styled, {css} from 'styled-components';

const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}

const CajaForm = styled.form`
    display: grid;
    font-family: Montserrat;
    grid-template-columns: 1fr 1fr 2fr;
    gap: 20px;
    @media (max-width: 800px){
        grid-template-columns: 1fr;        
    }   
`;

const Label = styled.label`
    
    display: block;
    color: #8c959e;
    font-weight: 500;
    padding: 10px;
    font-size: 0.9rem;
    min-height: 40px;
    font-family: Montserrat;
    ${props => props.valido === 'false' && css`
        color: ${colores.error}
    `} 
`;

const LabelDes = styled.label`
    width: 24%;
    display: block;
    color: #8c959e;
    font-weight: 300;
    padding: 10px;
    font-size: 0.9rem;
    min-height: 40px;
    
    @media (max-width: 800px){
        width: 100%;
    }
`;

const Input = styled.input`
    width: 100%;
    font-family: Montserrat;
    background: #F4F4F4;
    border-radius: 50px;
    height: 45px;
    font-size: 0.9rem;
    line-height: 45px;
    padding: 0 20px 0 20px;
    font-weight: 200;
    border: 3px solid transparent;    
    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }
    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}      
        
    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}
     
`;

const InputDes = styled.input`
    
    width: 100%;
    background: #F4F4F4;
    border-radius: 50px;
    height: 175px;
    font-size: 0.9rem;
    line-height: 45px;
    padding: 0 20px 0 20px;
    font-weight: 200;
    border: 3px solid transparent;
    position: relative;
    
    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }
    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}      
        
    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}   
     
`;

const Desplegable = styled.select`
    width: 24%;
    background: #F4F4F4;
    border-radius: 50px;
    height: 45px;
    font-size: 0.9rem;
    line-height: 45px;
    padding: 0 20px 0 20px;
    margin-bottom: 20px;
    font-weight: 200;
    border: 3px solid transparent;  
    
    @media (max-width: 800px){
        width: 100%;
    }
`;

const DesplegableCaja = styled.select`
    width: 100%;
    background: #F4F4F4;
    border-radius: 50px;
    height: 45px;
    font-size: 0.9rem;
    line-height: 45px;
    padding: 0 20px 0 20px;
    margin-bottom: 20px;
    font-weight: 200;
    border: 3px solid transparent;
    font-family: Montserrat;
    color: #6c757d;
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display:none;
    ${props => props.valido === 'false' && css`
        display: block;
    `}  
    
`;

 const ContenedorTerminos = styled.div`
    grid-column: span 3;
    input {
        margin-right: 10px;
    }
    @media (max-width: 800px){
        grid-column: span 1;
    }
`;

const ContenedordeBoton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 3;
    margin-top: 30px;
    
    @media (max-width: 800px){
        grid-column: span 1;
    }
    
`;

const Boton = styled.button`
    height: 40px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 0.8rem;
    background: #0378FB;
    color: #fff;
    font-weight: 200;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: .1s ease all;    
    &hover{
        box-shadow: 3px 0px 30px rgba(163,163,163, 1);
    }
    @media (max-width: 400px){
        width: 100%;
    }
`;

const MenajeError = styled.div`
    height: 45px;
    line-height: 45px;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 3;
    text-align: center;
    margin: auto;
    p {
        margin: 0;
    }   
    @media (max-width: 800px){
        grid-column: span 1;
    } 
`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};    
`;

//doble grid

const Doblegrid = styled.div`
grid-row: span 2;
`;

//form reclamos
const CajaRecla1 = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;    
    @media (max-width: 800px){
        grid-template-columns: 1fr;        
    }   
`;
const CajaReclalargos = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @media (max-width: 800px){
        grid-template-columns: 1fr;        
    }   
`;
const CajaReclafinal = styled.form`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    @media (max-width: 800px){
        grid-template-columns: 1fr;        
    }   
`;
const BotonVolver = styled.button`
    height: 35px;
    padding-left: 60px;
    padding-right: 60px;
    font-size: 0.8rem;
    background-color: #fff;
    color: #000;    
    border: solid 0.1rem black;
    border-radius: 50px;    
    border-color: #000;
    cursor: pointer;   
    font-family: Montserrat;
    transition: .1s ease all;  
    font-weight: 600;
    &hover{
        box-shadow: 3px 0px 30px rgba(163,163,163, 1);      
    }
    @media (max-width: 400px){
        width: 100%;
    }
    
`;
const BotonEnviar = styled.button`
    height: 45px;
    width: 50%;
    font-size: 0.8rem;
    background: #0378FB;
    color: #fff;    
    font-weight: 200;
    border: none;
    border-radius: 50px;
    cursor: pointer;   
    transition: .1s ease all;  
    float: right;
    
    &hover{
        box-shadow: 3px 0px 30px rgba(163,163,163, 1);      
    }
    @media (max-width: 800px){
        width: 80%;
    }    
`;

const BotonSiguiente = styled.button`
    height: 35px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 0.8rem;
    background: #000;
    color: #fff;    
    border: none;
    border-radius: 50px;
    cursor: pointer;   
    transition: .1s ease all;  
    float: right;
    font-family: Montserrat;
    
    &hover{
        box-shadow: 3px 0px 30px rgba(163,163,163, 1);      
    }
    @media (max-width:400px){
        width: 100%;
        margin-top: 10px;
    }    
`;




export {CajaForm,
        Label,
        Input,
        LeyendaError,
        ContenedordeBoton,
        Boton,
        MenajeError,
        MensajeExito,
        Desplegable,
        LabelDes,
        DesplegableCaja,
        InputDes,
        ContenedorTerminos,
        Doblegrid,
        CajaRecla1,
        CajaReclalargos,
        CajaReclafinal,
        BotonVolver,
        BotonEnviar,
        BotonSiguiente
        
    };