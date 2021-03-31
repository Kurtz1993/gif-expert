import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface AddCategoryProps {
  setCategories: Dispatch<SetStateAction<string[]>>;
}

export default function AddCategory({ setCategories }: AddCategoryProps) {
  const [inputValue, setInputValue] = useState('Hola');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(categories => [...categories, inputValue]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Add Category</button>
    </form>
  );
}
