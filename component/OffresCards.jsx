 
import React from "react";
 
 

export default function OffresCards() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-md mb-3 mb-md-0">
          <Card
            title="Software factory"
            soustitre="Forfait"
            soustitre2="Confiez-nous votre projet"
            soustitre3="Une équipe agile ,pluridiscplineaire est dédiée au projet."
            soustitre4="Livraison réguliare des les premiers jours"
          />
        </div>
        <div class="col-md">
          <Card
            title="CAPEX"
            soustitre="Régie"
            soustitre2="Renforcez vos équipes avec une capacité d'exécution supplémentaire."
            soustitre3="Bénéficiez de l'expertise de nos consultants"
            soustitre4="Remote avec présence ponctuelle sur site "
          />
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, soustitre }) => {
  return (
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">
          Card link
        </a>
        <a href="#" class="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};
