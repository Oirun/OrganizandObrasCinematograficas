import Obra from "../Obra"
import "./Categoria.css"

const Categoria = (props) => {
    return (
        (props.obras.length > 0) ? <section className="categoria" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBottomColor : props.corPrimaria, color : props.corPrimaria}}>{props.nome}</h3>
            <div className="obras">
                {props.obras.map(obra => <Obra key={obra.nome} nome={obra.nome} descricao={obra.descricao} imagem={obra.imagem} corDeFundo={props.corPrimaria}></Obra>)}
            </div>
        </section>
        : ''
    )
}
 
export default Categoria