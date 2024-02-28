import { Footer } from '../Footer/Footer';
import './faq.scss';
export function Faq() {
  return (
    <div className="FAQ">
      <h1 className="title"> Bienvenue sur la FAQ </h1>
      <div className="text-container">
        <h2 className="sub-title"> Présentation du projet</h2>
        <p>Voici un projet de création de notes</p>
      </div>

      <div className="text-container">
        <h3 className="sub-title"> Réalisation </h3>
        <p> Réaliser par Grégoire Dedeyne</p>
      </div>
      <Footer />
    </div>
  );
}
