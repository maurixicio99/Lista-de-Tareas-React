import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const { updateDescription, date, onInputChange } = useForm({
    updateDescription: todo.description,
    date: todo.date,
  });

  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo.id;
    const description = updateDescription;

    handleUpdateTodo(id, description);

    setDisabled(!disabled);

    focusInputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type='text'
        className={`input-update ${
          todo.done ? 'text-decoration-dashed' : ''
        }`}
        name='updateDescription'
        value={updateDescription}
        onChange={onInputChange}
        placeholder='¿Qué hay que hacer?'
        readOnly={disabled}
        ref={focusInputRef}
      />

      <input
        type='date'
        className='input-update-date'
        name='date'
        value={date}
        onChange={onInputChange}
        placeholder='Fecha'
        readOnly={disabled}
      />

      <button className='btn-edit' type='submit'>
        <FaEdit />
      </button>
    </form>
  );
};
