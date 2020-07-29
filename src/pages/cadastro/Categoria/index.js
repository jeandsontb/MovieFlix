import React, {useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

const CadastroCategoria = () => {

  const valorInicial = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [ categorias, setCategorias ] = useState([]);
  const [ valores, setValores ] = useState(valorInicial);
  

  const handleSubmit = (info) => {
    info.preventDefault();
    setCategorias([
      ...categorias,
      valores
    ]);
    setValores(valorInicial);
  }

  const setChangeValues = (chave, valor) => {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  const handleChange = (e) => {
    setChangeValues(e.target.getAttribute('name'), e.target.value);
  }
 
    return (
      <PageDefault>
          <h1>Cadastro de Categoria: {valores.nome} </h1>

          <form onSubmit={handleSubmit} >

            <FormField 
              label="Nome da categoria: "
              type="text" 
              name="nome"
              value={valores.nome}
              onChange={handleChange}
            />


            <FormField 
              label="Descrição: "
              type="text" 
              name="descricao"
              value={valores.descricao}
              onChange={handleChange}
            />

            {/* <div>
              <label>
                Descrição:
                <textarea 
                  type="text" 
                  name="descricao"
                  value={valores.descricao} 
                  onChange={handleChange} 
                />
              </label>
            </div> */}
            

            <FormField 
              label="Cor: "
              type="color" 
              name="cor"
              value={valores.cor}
              onChange={handleChange}
            />

            <button >
              Cadastrar
            </button>
          </form>

          <ul>
            {categorias.map((categoria, index) => (
                <li key={index} >{ categoria.nome }</li>
            ))}
          </ul>

          <Link to="/">    
                Ir para home
          </Link>
      </PageDefault>
    );
  }

export default CadastroCategoria;