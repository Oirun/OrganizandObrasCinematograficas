import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        
        props.aoObraCadastrado({
            nome,
            descricao,
            imagem,
            categoria
        })

        setNome('')
        setDescricao('')
        setImagem('')
        setCategoria('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card das Obras</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}>
                </CampoTexto>
                <CampoTexto
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Fale sobre o anime e se for o caso, o que achou"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}>
                </CampoTexto>
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}>
                </CampoTexto>

                <ListaSuspensa
                    obrigatorio={true}
                    itens={props.categorias}
                    label="Categoria"
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}>
                </ListaSuspensa>
                <Botao texto=''>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}


export default Formulario