import Colaborador from '../colaborador';
import './Time.css'; 

const Time = (props) => {
    const { nome, corPrimaria, corSecundaria, Colaboradores = [] } = props; // Desestrutura props e define um valor padrão para Colaboradores

    return( 
        Colaboradores.length > 0 ?<section className='time' style={{ backgroundColor: corSecundaria }}> 
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3> 
            <div className='colaboradores'>
            {Colaboradores.map(colaborador => (
                <Colaborador corDeFundo={corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem = {colaborador.imagem} />
            ))} 
            </div> 
        </section> 
        : ''
    );
} 

export default Time;

