import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hoocks/useForm';

const CadastroCategoria = () => {
  const valorInicial = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, valores, clearForm } = useForm(valorInicial);

  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (info) => {
    info.preventDefault();
    setCategorias([
      ...categorias,
      valores,
    ]);
    clearForm();
  };

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://projectmovieflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

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
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição "
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

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
          <li key={`${categoria.titulo}`}>{ categoria.titulo }</li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
