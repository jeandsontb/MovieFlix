import { useState } from 'react';

const useForm = (valorInicial) => {
  const [valores, setValores] = useState(valorInicial);

  const setChangeValues = (chave, valor) => {
    setValores({
      ...valores,
      [chave]: valor,
    });
  };

  const handleChange = (e) => {
    setChangeValues(e.target.getAttribute('name'), e.target.value);
  };

  const clearForm = () => {
    setValores(valorInicial);
  };

  return {
    valores,
    handleChange,
    clearForm,
  };
};

export default useForm;
