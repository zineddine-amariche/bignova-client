import Link from "next/link";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

export default function OffresCards() {
  return (
    <div class="container text-center  ">
      <div class="row row-cols-2  justify-content-around ">
        <div class="col-md col-lg-4 col-xl-5 mb-3 mb-md-0">
          <Card
            title="Software factory"
            soustitre="Forfait"
            soustitre2="Confiez-nous votre projet"
            soustitre3="Une équipe agile ,pluridiscplineaire est dédiée au projet."
            soustitre4="Livraison réguliare des les premiers jours"
          />
        </div>
        <div class="col col-lg-4 col-xl-5  ">
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

const Card = ({ title, soustitre, soustitre2, soustitre3, soustitre4,src }) => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;

  return (
    <div class="card bg-white shadow-lg  pb-1 rounded h-100">
      <div class="card-body pt-5 pb-0">
        <img
          src={src ? src:`https://bootstrapious.com/i/snippets/sn-team/teacher-${1}.jpg`}
          alt=""
          width="150"
     
          class="img-fluid rounded-circle mb-2 img-thumbnail shadow-sm"
        />
      </div>
        <h5 class="card-title text-primary ">{title}</h5>
      <div class="card-body  ">
        <p class="card-text text-dark">{soustitre}</p>
        <p class="card-text text-dark">{soustitre2}</p>
        <p class="card-text text-dark">{soustitre3}</p>
        <p class="card-text text-dark">{soustitre4}</p>
      </div>
    </div>
  );
};
