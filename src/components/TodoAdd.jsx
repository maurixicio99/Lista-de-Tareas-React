import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, date, onInputChange, onResetForm } = useForm({
    description: '',
    date: '',
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1 || date === '') return;

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      date: date,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        className='input-add'
        name='description'
        value={description}
        onChange={onInputChange}
        placeholder='¿Qué hay que hacer?'
      />
      <input
        type='date'
        className='input-add'
        name='date'
        value={date}
        onChange={onInputChange}
        placeholder='Fecha'
      />
      <button className='btn-add' type='submit'>
        Agregar
      </button>
    </form>
  );
};
