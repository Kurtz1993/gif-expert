import { FunctionComponent, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export type GifExpertAppProps = {
  defaultCategories?: string[];
};

const GifExpertApp: FunctionComponent<GifExpertAppProps> = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
