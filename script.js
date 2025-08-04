document.getElementById('docForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const type = document.getElementById('type').value;
  const nom = document.getElementById('nom').value.trim();
  const prenom = document.getElementById('prenom').value.trim();
  const infos = document.getElementById('infos').value.trim();
  const date = new Date().toLocaleDateString('fr-FR');
  let resultat = '';

  switch (type) {
    case 'lettre':
      resultat = `Kayes, le ${date}

À qui de droit,

Je soussigné(e) ${prenom} ${nom}, vous adresse la présente lettre concernant : ${infos}.

Veuillez agréer, Madame, Monsieur, mes salutations distinguées.`;
      break;
    case 'attestation':
      resultat = `Je soussigné(e) ${prenom} ${nom}, atteste avoir vendu le bien suivant : ${infos}.
Fait à Kayes, le ${date}.`;
      break;
    case 'contrat':
      resultat = `Contrat établi entre ${prenom} ${nom} et la partie suivante : ${infos}.
Signé à Kayes, le ${date}.`;
      break;
    case 'motivation':
      resultat = `Objet : Lettre de motivation

Je, ${prenom} ${nom}, suis très motivé(e) pour le poste / la mission suivante : ${infos}.
Fait à Kayes, le ${date}.`;
      break;
    case 'cv':
      resultat = `CURRICULUM VITAE
Nom : ${nom}
Prénom : ${prenom}
Infos : ${infos}`;
      break;
    case 'emploi':
      resultat = `Je, ${prenom} ${nom}, sollicite un emploi au sein de votre structure. Infos complémentaires : ${infos}.
Kayes, le ${date}`;
      break;
    case 'compte':
      resultat = `Je, ${prenom} ${nom}, souhaite ${infos.toLowerCase()} auprès de votre établissement bancaire. Fait à Kayes, le ${date}.`;
      break;
    case 'rapport':
      resultat = `RAPPORT / COMPTE RENDU
Auteur : ${prenom} ${nom}
Détails : ${infos}`;
      break;
    case 'courrier':
      resultat = `COURRIER / MANUSCRIT
Expéditeur : ${prenom} ${nom}
Contenu : ${infos}`;
      break;
    case 'secretariat':
      resultat = `DOCUMENT ADMINISTRATIF
Type : Convocation / Correspondance / CR
Auteur : ${prenom} ${nom}
Détails : ${infos}`;
      break;
    default:
      resultat = "Veuillez sélectionner un type de document.";
  }

  document.getElementById('resultat').textContent = resultat;
});