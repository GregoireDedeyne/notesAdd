import { Note } from '../Note/Note';
import './NotesList.scss';

interface Notes {
  content: string;
  date: string;
}

interface NotesList {
  content: Notes[];
  onDelete: (content: string) => void;
  onEdit: (originalContent: Notes, editedContent: Notes) => void;
}

export function NotesList({ content, onDelete, onEdit }: NotesList) {
  return (
    <div className="notesList">
      {content.map((content, id) => (
        <Note
          key={id}
          content={content.content}
          date={content.date}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
