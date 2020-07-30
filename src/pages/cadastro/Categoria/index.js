import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const valorInicial = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valorInicial);

  const handleSubmit = (info) => {
    info.preventDefault();
    setCategorias([
      ...categorias,
      valores,
    ]);
    setValores(valorInicial);
  };

  const setChangeValues = (chave, valor) => {
    setValores({
      ...valores,
      [chave]: valor,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Uma categoria show',
          cor: '#cbd1ff',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Uma categoria Tops',
          cor: '#cbd1ff',
        },
      ]);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    setChangeValues(e.target.getAttribute('name'), e.target.value);
  };

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria "
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição "
          type="textarea"
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
          label="Cor "
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>{ categoria.nome }</li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
