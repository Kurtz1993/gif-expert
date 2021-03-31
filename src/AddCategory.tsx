import { ChangeEvent, FormEvent, useState } from 'react';

export default function AddCategory() {
  const [inputValue, setInputValue] = useState('Hola');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Add Category</button>
    </form>
  );
}
