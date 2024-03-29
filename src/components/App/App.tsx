import { NotesList } from '../NotesList/NotesList';
import './App.scss';
import { Form } from '../Form/Form';
import { useState, useEffect } from 'react';
import { Footer } from '../Footer/Footer';

interface Note {
  content: string;
  date: string; 
}

function App() {
  // state pour stocker les notes
  const [notes, setNotes] = useState<Note[]>([]);

  // use effect pour la mise en place du localStorage au démarrage de l'app
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
    console.log(savedNotes);
  }, []);

  // function de génération de date
  function generateDate() {
    return new Date().toLocaleDateString();
  }

  // Sauvegarde des notes dans le localStorage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    console.log(notes);
  }, [notes]);

  // function d'ajout des nouvelles notes avec la date généré 
  const addNote = (content: string) => {
    const newNote: Note = {
      content: content,
      date: generateDate(), 
    };
    // on appel setNotes pour mettre à jour les notes dans le state
    setNotes([...notes, newNote]);
  };

  // Function d'édition de nos notes
  const handleEdit = (originalContent: Note, editedContent: Note) => {
    const updatedNotes = notes.map((note) => {
      // Comparez les propriétés de chaque objet Note
      if (
        note.content === originalContent.content &&
        note.date === originalContent.date
      ) {
        // Retourne une nouvelle note avec le contenu édité
        return { ...note, content: editedContent.content };
      }
      return note; // Retourne la note inchangée si elle ne correspond pas
    });
    setNotes(updatedNotes); // Met à jour le tableau de notes
  };
  const handleDelete = (content: string) => {
    const updatedNotes = notes.filter((note) => note.content !== content); // Supprime le post avec le contenu correspondant
    setNotes(updatedNotes); // Met à jour la liste de notes
  };

  return (
    <div className="App">
      <NotesList content={notes} onDelete={handleDelete} onEdit={handleEdit} />
      <Form onAddPost={addNote} />
      <Footer />
    </div>
  );
}

export default App;
