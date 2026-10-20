import "./App.css";
import StudentCard from "./components/StudentCard.jsx";
   


const etudiants = [
  {
    prenom: "Slim",
    nom: "Boubaker",
    email: "slimboubaker@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarratrabelsi@gmail.com",
    telephone: "+216 22 333 444",
    filiere: "Informatique",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Monastir",
    
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariemkhalfallah@gmail.com",
    telephone: "+216 55 666 777",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Sousse",
   
  },
];

function App() {
  return (
    <div className="container">
  {etudiants.map((etudiant) => (
    <StudentCard
      prenom={etudiant.prenom}
      nom={etudiant.nom}
      key={etudiant.email}
      telephone={etudiant.telephone}
      filiere={etudiant.filiere}
      anneeEtude={etudiant.anneeEtude}
      groupe={etudiant.groupe}
      ville={etudiant.ville}
     
    />
  ))}
</div>
  );
}

export default App;