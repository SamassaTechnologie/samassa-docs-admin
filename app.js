// --- Données entreprise ---
const company = {
  name: "SAMASSA TECHNOLOGIE",
  slogan: "Tout pour l’informatique",
  address: "Grand Marché de Kayes, près du 1er arrondissement de la police",
  contact: "77291931 / boussesamassa10@gmail.com"
};

// --- Modèles de documents améliorés ---
const defaultTemplates = {
  lettre_demande: {
    name: "Lettre de demande",
    fields: [
      { label: "Destinataire", name: "destinataire", type: "text", required: true },
      { label: "Objet", name: "objet", type: "text", required: true },
      { label: "Demande", name: "demande", type: "textarea", required: true }
    ],
    render: data => `
      <div style="text-align:right;">Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div>
        <strong>À l'attention de : ${data.destinataire}</strong><br>
        <strong>Objet :</strong> ${data.objet}
      </div>
      <p>
        Monsieur/Madame,<br><br>
        J’ai l’honneur de vous adresser la présente lettre afin de solliciter <b>${data.demande}</b>.<br>
        Je reste à votre entière disposition pour toute information complémentaire.<br><br>
        Veuillez agréer, ${data.destinataire}, l’expression de ma considération distinguée.
      </p>
      <br>
      <div><strong>${company.name}</strong></div>
    `
  },

  lettre_reclamation: {
    name: "Lettre de réclamation",
    fields: [
      { label: "Destinataire", name: "destinataire", type: "text", required: true },
      { label: "Objet", name: "objet", type: "text", required: true },
      { label: "Réclamation", name: "reclamation", type: "textarea", required: true }
    ],
    render: data => `
      <div style="text-align:right;">Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div>
        <strong>À l'attention de : ${data.destinataire}</strong><br>
        <strong>Objet :</strong> Réclamation – ${data.objet}
      </div>
      <p>
        Monsieur/Madame,<br><br>
        Par la présente, je me permets de vous faire part de ma réclamation concernant : <b>${data.reclamation}</b>.<br>
        Je vous prie de bien vouloir examiner ma demande et de m’informer des suites qui y seront réservées.<br><br>
        Je vous prie d’agréer, ${data.destinataire}, l’expression de ma considération distinguée.
      </p>
      <br>
      <div><strong>${company.name}</strong></div>
    `
  },

  lettre_convocation: {
    name: "Lettre de convocation",
    fields: [
      { label: "Nom du convoqué", name: "nom_convoque", type: "text", required: true },
      { label: "Motif", name: "motif", type: "text", required: true },
      { label: "Date de convocation", name: "date_convocation", type: "date", required: true }
    ],
    render: data => `
      <div style="text-align:right;">Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div>
        <strong>${data.nom_convoque}</strong><br>
        <strong>Objet :</strong> Convocation
      </div>
      <p>
        Monsieur/Madame,<br><br>
        Par la présente, vous êtes convoqué(e) pour le motif suivant : <b>${data.motif}</b>.<br>
        La convocation est prévue le <b>${data.date_convocation}</b>.<br>
        Veuillez vous présenter à la date indiquée.<br><br>
        Veuillez agréer, l’expression de ma considération distinguée.
      </p>
      <br>
      <div><strong>${company.name}</strong></div>
    `
  },

  lettre_procuration: {
    name: "Procuration",
    fields: [
      { label: "Nom du mandant", name: "mandant", type: "text", required: true },
      { label: "Nom du mandataire", name: "mandataire", type: "text", required: true },
      { label: "Objet de la procuration", name: "objet", type: "text", required: true }
    ],
    render: data => `
      <h2 style="text-align:center;">Procuration</h2>
      <p>
        Je soussigné(e) <b>${data.mandant}</b>, donne procuration à <b>${data.mandataire}</b> pour <b>${data.objet}</b>.<br>
        Fait à Kayes, le ${new Date().toLocaleDateString('fr-FR')}.
      </p>
      <br>
      <div>Signature du mandant :</div>
    `
  },

  cv: {
    name: "Curriculum Vitae",
    fields: [
      { label: "Nom complet", name: "nom", type: "text", required: true },
      { label: "Date de naissance", name: "date_naissance", type: "date", required: true },
      { label: "Adresse", name: "adresse", type: "text", required: true },
      { label: "Téléphone", name: "telephone", type: "text", required: true },
      { label: "Email", name: "email", type: "email", required: false },
      { label: "Expérience professionnelle", name: "experience", type: "textarea", required: false },
      { label: "Formation", name: "formation", type: "textarea", required: false },
      { label: "Compétences", name: "competences", type: "textarea", required: false }
    ],
    render: data => `
      <h2 style="text-align:center;">Curriculum Vitae</h2>
      <strong>Nom :</strong> ${data.nom} <br>
      <strong>Date de naissance :</strong> ${data.date_naissance} <br>
      <strong>Adresse :</strong> ${data.adresse} <br>
      <strong>Téléphone :</strong> ${data.telephone} <br>
      <strong>Email :</strong> ${data.email || '-'} <br>
      <hr>
      <strong>Expérience professionnelle :</strong><br>
      <div>${(data.experience || '').replace(/\n/g, '<br>')}</div>
      <strong>Formation :</strong><br>
      <div>${(data.formation || '').replace(/\n/g, '<br>')}</div>
      <strong>Compétences :</strong><br>
      <div>${(data.competences || '').replace(/\n/g, '<br>')}</div>
    `
  },

  lettre_motivation: {
    name: "Lettre de motivation",
    fields: [
      { label: "Destinataire", name: "destinataire", type: "text", required: true },
      { label: "Poste visé", name: "poste", type: "text", required: true },
      { label: "Message", name: "message", type: "textarea", required: true }
    ],
    render: data => `
      <div style="text-align:right;">Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div>
        <strong>À l'attention de : ${data.destinataire}</strong><br>
        <strong>Poste visé :</strong> ${data.poste}
      </div>
      <p>
        Monsieur/Madame,<br><br>
        Je vous adresse ma candidature pour le poste de <b>${data.poste}</b>.<br>
        Titulaire de plusieurs expériences pertinentes, je souhaite mettre mes compétences au service de votre établissement.<br>
        Je reste disponible pour un entretien à votre convenance.<br><br>
        Veuillez agréer, ${data.destinataire}, l’expression de ma considération distinguée.
      </p>
      <br>
      <div><strong>${company.name}</strong></div>
    `
  },

  contrat_travail: {
    name: "Contrat de travail",
    fields: [
      { label: "Nom du salarié", name: "contractant", type: "text", required: true },
      { label: "Poste", name: "poste", type: "text", required: true },
      { label: "Durée", name: "duree", type: "text", required: false },
      { label: "Conditions", name: "conditions", type: "textarea", required: false }
    ],
    render: data => `
      <h2 style="text-align:center;">Contrat de travail</h2>
      <p>
        Entre les soussignés :<br>
        <strong>${company.name}</strong>, ci-après dénommé "l’Employeur",<br>
        et <strong>${data.contractant}</strong>, ci-après dénommé "le Salarié".<br>
        <strong>Poste :</strong> ${data.poste}<br>
        <strong>Durée :</strong> ${data.duree || 'Indéterminée'}<br>
        <strong>Conditions :</strong> ${(data.conditions || '').replace(/\n/g, '<br>')}
      </p>
      <br>
      <div>Fait à Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <br>
      <div>Signatures des parties</div>
    `
  },

  attestation_vente: {
    name: "Attestation de vente",
    fields: [
      { label: "Nom du vendeur", name: "vendeur", type: "text", required: true },
      { label: "Nom de l’acheteur", name: "acheteur", type: "text", required: true },
      { label: "Objet de la vente", name: "objet", type: "text", required: true },
      { label: "Montant", name: "montant", type: "text", required: false }
    ],
    render: data => `
      <h2 style="text-align:center;">Attestation de Vente</h2>
      <p>
        Je soussigné(e) <strong>${data.vendeur}</strong>, certifie avoir vendu à <strong>${data.acheteur}</strong> l’objet suivant : <strong>${data.objet}</strong> pour la somme de <strong>${data.montant || '----'}</strong>.<br>
        Cette attestation est délivrée pour servir et valoir ce que de droit.<br>
      </p>
      <p>Fait à Kayes, le ${new Date().toLocaleDateString('fr-FR')}</p>
      <div>Signature :</div>
    `
  },

  demande_emploi: {
    name: "Demande d’emploi",
    fields: [
      { label: "Destinataire", name: "destinataire", type: "text", required: true },
      { label: "Poste souhaité", name: "poste", type: "text", required: true },
      { label: "Message", name: "message", type: "textarea", required: true }
    ],
    render: data => `
      <div style="text-align:right;">Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div>
        <strong>À l'attention de : ${data.destinataire}</strong><br>
        <strong>Poste souhaité :</strong> ${data.poste}
      </div>
      <p>
        Monsieur/Madame,<br><br>
        Par la présente, je sollicite un emploi au sein de votre structure au poste de <b>${data.poste}</b>.<br>
        Je joins à cette demande mon curriculum vitae et reste à votre disposition pour un entretien.<br><br>
        Veuillez agréer, ${data.destinataire}, l’expression de ma considération distinguée.
      </p>
      <br>
      <div><strong>${company.name}</strong></div>
    `
  },

  demande_banque: {
    name: "Demande ouverture/fermeture de compte",
    fields: [
      { label: "Nom du client", name: "nom", type: "text", required: true },
      { label: "Type de demande", name: "type", type: "select", options: ["Ouverture", "Fermeture"], required: true },
      { label: "Nom de la banque", name: "banque", type: "text", required: true }
    ],
    render: data => `
      <div style="text-align:right;">Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div>
        <strong>À l'attention de : ${data.banque}</strong><br>
        <strong>Objet :</strong> Demande de ${data.type.toLowerCase()} de compte bancaire
      </div>
      <p>
        Monsieur/Madame,<br><br>
        Je soussigné(e) <strong>${data.nom}</strong> vous prie de bien vouloir procéder à la ${data.type.toLowerCase()} de mon compte bancaire auprès de votre établissement.<br>
        Je reste à votre disposition pour tout complément d’information.<br><br>
        Veuillez agréer, Madame, Monsieur, l’expression de ma considération distinguée.
      </p>
      <br>
      <div><strong>${company.name}</strong></div>
    `
  },

  rapport: {
    name: "Rapport / Compte rendu",
    fields: [
      { label: "Titre", name: "titre", type: "text", required: true },
      { label: "Auteur", name: "auteur", type: "text", required: true },
      { label: "Contenu", name: "contenu", type: "textarea", required: true }
    ],
    render: data => `
      <h2 style="text-align:center;">${data.titre}</h2>
      <div><strong>Auteur :</strong> ${data.auteur}</div>
      <div><strong>Date :</strong> ${new Date().toLocaleDateString('fr-FR')}</div>
      <hr>
      <div>${(data.contenu || '').replace(/\n/g, '<br>')}</div>
      <br>
      <div>Ce rapport est établi pour servir de référence officielle.</div>
    `
  }
};

// --- Le reste du code générateur (menu, formulaire, résumé, impression, PWA, etc.) reste inchangé... ---
// (Utilise le code déjà fourni précédemment pour la structure, la gestion, etc.)

// --- Pour ajouter de nouveaux modèles ---
// Copie simplement une entrée comme ci-dessus, modifie le nom, les champs, et la fonction render pour ton nouveau besoin.
