import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hoocks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

const CadastroVideo = () => {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitle = categorias.map(({ titulo }) => titulo);

  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === valores.categoria);

    videosRepository.create({
      titulo: valores.titulo,
      url: valores.url,
      categoriaId: categoriaEscolhida.id,
    })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do vídeo "
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL "
          name="url"
          value={valores.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria "
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoryTitle}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
};

export default CadastroVideo;
