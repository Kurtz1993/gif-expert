import { useState } from 'react';
import AddCategory from './AddCategory';

export default function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
}
