import { ChangeEvent, useState } from 'react';

export default function AddCategory() {
  const [inputValue, setInputValue] = useState('Hola');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Add Category</button>
    </form>
  );
}
