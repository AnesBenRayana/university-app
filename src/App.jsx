import './App.css'

const student = "Anes Ben Rayana"
const Email= "anesbenrayana22@gmail.com"
const Telephone ="+216 56 492 320"
const filiere = "Génie Logiciel et Systèmes d'information"
const Groupe = "GLSI 2"
const ville = "Mahdia"

function App() {
  
  return (
    <>
     <div>
      <h1>Fiche étudiant</h1>
      <p>Nom & Prénom : {student}</p>
      <p>Email : {Email}</p>
      <p>Téléphone : {Telephone}</p>
      <p>Filière : {filiere}</p>
      <p>Année d'etude: 2026-2027</p>
      <p>Groupe : {Groupe}</p>
      <p>Ville : {ville}</p>
     </div> 
    </>
  ) ;
}

export default App
