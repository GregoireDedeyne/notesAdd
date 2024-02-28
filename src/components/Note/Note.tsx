import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Note.scss';
import { SetStateAction, useState } from 'react';

interface Notes {
  content: string;
  date: string;
}

interface note {
  content: string;
  date: string;
  onDelete: (content: string) => void;
  onEdit: (originalContent: Notes, editedContent: Notes) => void;
}

export function Note({ content, date, onDelete, onEdit }: note) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleDelete = () => {
    onDelete(content); // Appelle la fonction de suppression avec le contenu du post
  };

  const handleEdit = () => {
    if (isEditing) {
      // on prend les anciennes données et on les modifies avec les nouvelles
      onEdit({ content, date }, { content: editedContent, date });
    }
    console.log(content);

    setIsEditing(!isEditing);
  };

  // on récupère les données via le form
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEditedContent(event.target.value); // Met à jour le contenu édité à chaque changement dans l'input
  };
  // on met fin à la modification avec le Blur
  const handleBlur = () => {
    if (isEditing) {
      onEdit({ content, date }, { content: editedContent, date });
      setIsEditing(false);
    }
  };
  return (
    <div className="note">
      <div className="note-header">
        <span className="note-date">Date de création : {date}</span>
        <div className="note-icon">
          <button className="button-delete" onClick={handleDelete}>
            {' '}
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button className="button-edit" onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </div>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={editedContent}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <p className="note-text">{content}</p>
      )}
    </div>
  );
}
