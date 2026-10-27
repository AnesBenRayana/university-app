

function StudentCard(props) {
  return (
    <div className="container">
      <div className="card">
        
        <h1>Fiche étudiant</h1>

        <img className="student-image" 
        src={props.image} />

        <p>
          <strong>Nom & Prénom :</strong>
          {props.prenom} {props.nom}
        </p>

        <p>
          <strong>Email :</strong>
          {props.email}
        </p>

        <p>
          <strong>Téléphone :</strong>
          {props.telephone}
        </p>

        <p>
          <strong>Filière :</strong>
          {props.filiere}
        </p>

        <p>
          <strong>Année d'étude :</strong>
          {props.anneeEtude}
        </p>

        <p>
          <strong>Groupe :</strong>
          {props.groupe}
        </p>

        <p>
          <strong>Ville :</strong>
          {props.ville}
        </p>

        <button>Connecter</button>

        

        
      </div>
    </div>
  );
}

export default StudentCard;