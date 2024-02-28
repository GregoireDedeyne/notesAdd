import { SetStateAction, useState } from 'react';
import './Form.scss';

interface onAddPost {
  onAddPost: (content: string) => void;
}

export function Form({ onAddPost }: onAddPost) {
  const [inputValue, setInputValue] = useState(''); // State pour stocker la valeur du champ texte

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Empêche le rechargemente
    onAddPost(inputValue); // Appelle la fonction pour ajouter un nouveau post
    setInputValue(''); // Réinitialise la valeur du champ texte
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Entrez votre nouveau poste..."
        />
        <button type="submit">Publier</button>
      </form>
    </div>
  );
}
