import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';
import Rodape from './componentes/Rodape';

function App() {

  const categorias = [
    { nome: 'Assistindo', corSecundaria: '#f2d6cd', corPrimaria: '#d67364' },
    { nome: 'Assistido', corSecundaria: '#e8f0fa', corPrimaria: '#156082' },
    { nome: 'Para Assistir', corSecundaria: '#fff5d9', corPrimaria: '#f2ba05' },
    { nome: 'Amei', corSecundaria: '#e0dae6', corPrimaria: '#7e659d' },
    { nome: 'Não Gostei', corSecundaria: '#e7f1cb', corPrimaria: '#707940' }
  ]

  const [obras, setObras] = useState([])

  const aoNovoObraAdicionado = (obra) => {
    debugger
    setObras([...obras, obra])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoObraCadastrado={obra => aoNovoObraAdicionado(obra)}></Formulario>
      {categorias.map(categoria =>
        <Categoria key={categoria.nome}
          nome={categoria.nome}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          obras={obras.filter(obra => obra.categoria === categoria.nome)}>
        </Categoria>)}
        <Rodape></Rodape>
    </div>
  );
}

export default App;
