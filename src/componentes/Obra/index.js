import './Obra.css'

const Obra = ({nome, imagem, descricao, corDeFundo}) =>{
    return (
        <div className='obra'> 
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{descricao}</h5>
            </div>
        </div>
    )
}

export default Obra