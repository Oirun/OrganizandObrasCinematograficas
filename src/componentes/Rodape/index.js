import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="rodapeBanner">
           <div className='rodapeBanner_redes_sociais'>
                <img src='/imagens/fb.png' alt='facebook'/>
                <img src='/imagens/ig.png' alt='instagram'/>
                <img src='/imagens/tw.png' alt='twitter'/>
           </div>
           <div className='rodapeBanner_logotipo'><img src='/imagens/logo.png' alt='logo'/></div>
           <div><h5>Desenvolvido pela alura e Manu Macena</h5> </div>
        </footer>
    )
}

export default Rodape;