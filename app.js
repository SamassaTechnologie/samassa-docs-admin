// --- Données entreprise ---
const company = {
  name: "SAMASSA TECHNOLOGIE",
  slogan: "Tout pour l’informatique",
  address: "Grand Marché de Kayes, près du 1er arrondissement de la police",
  contact: "77291931 / boussesamassa10@gmail.com"
};

// --- Modèles de documents pour cybercafé Mali ---
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
      <div><strong>À l'attention de : ${data.destinataire}</strong><br><strong>Objet :</strong> ${data.objet}</div>
      <p>
        Monsieur/Madame,<br><br>
        J’ai l’honneur de solliciter <b>${data.demande}</b>.<br>
        Je reste à votre disposition pour tout complément d’information.<br><br>
        Veuillez agréer, ${data.destinataire}, l’expression de ma considération distinguée.
      </p>
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
      <div><strong>À l'attention de : ${data.destinataire}</strong><br><strong>Objet :</strong> Réclamation – ${data.objet}</div>
      <p>
        Monsieur/Madame,<br><br>
        Je me permets de vous faire part de ma réclamation concernant : <b>${data.reclamation}</b>.<br>
        Je vous prie d’en prendre compte et de m’informer des suites.<br><br>
        Veuillez agréer, ${data.destinataire}, l’expression de ma considération distinguée.
      </p>
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
      <div><strong>${data.nom_convoque}</strong><br><strong>Objet :</strong> Convocation</div>
      <p>
        Par la présente, vous êtes convoqué(e) pour le motif suivant : <b>${data.motif}</b>.<br>
        La convocation est fixée au <b>${data.date_convocation}</b>.<br>
        Veuillez vous présenter à cette date.<br><br>
        Veuillez agréer l’expression de ma considération distinguée.
      </p>
      <div><strong>${company.name}</strong></div>
    `
  },

  lettre_attestation_presence: {
    name: "Attestation de présence",
    fields: [
      { label: "Nom", name: "nom", type: "text", required: true },
      { label: "Période", name: "periode", type: "text", required: true },
      { label: "Motif", name: "motif", type: "textarea", required: false }
    ],
    render: data => `
      <h2 style="text-align:center;">Attestation de Présence</h2>
      <p>
        Je soussigné(e), atteste que <b>${data.nom}</b> a été présent(e) dans nos locaux du ${data.periode}.<br>
        Motif : ${data.motif || "N/A"}<br>
        Cette attestation est délivrée pour servir et valoir ce que de droit.
      </p>
      <div>Fait à Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div>Signature :</div>
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
      <div>Signature du mandant :</div>
    `
  },

  lettre_decharge: {
    name: "Décharge",
    fields: [
      { label: "Nom du bénéficiaire", name: "beneficiaire", type: "text", required: true },
      { label: "Objet", name: "objet", type: "text", required: true },
      { label: "Montant (si applicable)", name: "montant", type: "text", required: false }
    ],
    render: data => `
      <h2 style="text-align:center;">Décharge</h2>
      <p>
        Je soussigné(e) <b>${data.beneficiaire}</b> reconnais avoir reçu <b>${data.objet}</b> pour la somme de <b>${data.montant || "----"}</b>.<br>
        Cette décharge est établie pour servir et valoir ce que de droit.
      </p>
      <div>Fait à Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div>Signature :</div>
    `
  },

  lettre_invitation: {
    name: "Lettre d'invitation",
    fields: [
      { label: "Nom de l'invité", name: "invite", type: "text", required: true },
      { label: "Date de l'événement", name: "date_evenement", type: "date", required: true },
      { label: "Lieu", name: "lieu", type: "text", required: true },
      { label: "Motif de l'invitation", name: "motif", type: "textarea", required: true }
    ],
    render: data => `
      <div style="text-align:right;">Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <h2 style="text-align:center;">Lettre d'invitation</h2>
      <p>
        Cher(e) <b>${data.invite}</b>,<br>
        J'ai le plaisir de vous inviter à <b>${data.motif}</b>, qui se tiendra le <b>${data.date_evenement}</b> à <b>${data.lieu}</b>.<br>
        En espérant votre présence.<br><br>
        Veuillez agréer l’expression de ma considération distinguée.
      </p>
      <div><strong>${company.name}</strong></div>
    `
  },

  lettre_renouvellement: {
    name: "Demande de renouvellement",
    fields: [
      { label: "Destinataire", name: "destinataire", type: "text", required: true },
      { label: "Objet à renouveler", name: "objet", type: "text", required: true }
    ],
    render: data => `
      <div style="text-align:right;">Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div><strong>À l'attention de : ${data.destinataire}</strong></div>
      <p>
        Monsieur/Madame,<br><br>
        Je sollicite le renouvellement de <b>${data.objet}</b>.<br>
        Veuillez agréer l’expression de ma considération distinguée.
      </p>
      <div><strong>${company.name}</strong></div>
    `
  },

  lettre_resiliation: {
    name: "Demande de résiliation",
    fields: [
      { label: "Destinataire", name: "destinataire", type: "text", required: true },
      { label: "Contrat / Service à résilier", name: "contrat", type: "text", required: true }
    ],
    render: data => `
      <div style="text-align:right;">Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div><strong>À l'attention de : ${data.destinataire}</strong></div>
      <p>
        Monsieur/Madame,<br><br>
        Je souhaite résilier le contrat/service suivant : <b>${data.contrat}</b>.<br>
        Merci de prendre les dispositions nécessaires.<br>
        Veuillez agréer l’expression de ma considération distinguée.
      </p>
      <div><strong>${company.name}</strong></div>
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
      <div><strong>À l'attention de : ${data.destinataire}</strong><br><strong>Poste visé :</strong> ${data.poste}</div>
      <p>
        Monsieur/Madame,<br><br>
        Je vous adresse ma candidature pour le poste de <b>${data.poste}</b>.<br>
        Titulaire de plusieurs expériences pertinentes, je souhaite mettre mes compétences à votre service.<br>
        Je reste disponible pour un entretien à votre convenance.<br><br>
        Veuillez agréer, ${data.destinataire}, l’expression de ma considération distinguée.
      </p>
      <div><strong>${company.name}</strong></div>
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
      <div><strong>À l'attention de : ${data.destinataire}</strong><br><strong>Poste souhaité :</strong> ${data.poste}</div>
      <p>
        Monsieur/Madame,<br><br>
        Je sollicite un emploi au poste de <b>${data.poste}</b>.<br>
        Je joins à cette demande mon curriculum vitae et reste disponible pour un entretien.<br><br>
        Veuillez agréer, ${data.destinataire}, l’expression de ma considération distinguée.
      </p>
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
        Entre les soussignés :<br>
        <strong>${company.name}</strong>, "l’Employeur",<br>
        et <strong>${data.contractant}</strong>, "le Salarié".<br>
        <strong>Poste :</strong> ${data.poste}<br>
        <strong>Durée :</strong> ${data.duree || 'Indéterminée'}<br>
        <strong>Conditions :</strong> ${(data.conditions || '').replace(/\n/g, '<br>')}
      </p>
      <div>Fait à Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
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
        Je soussigné(e) <strong>${data.vendeur}</strong>, certifie avoir vendu à <strong>${data.acheteur}</strong> l’objet suivant : <strong>${data.objet}</strong> pour la somme de <strong>${data.montant || '----'}</strong>.<br>
        Cette attestation est établie pour servir et valoir ce que de droit.
      </p>
      <div>Fait à Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div>Signature :</div>
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
      <div><strong>À l'attention de : ${data.banque}</strong><br><strong>Objet :</strong> Demande de ${data.type.toLowerCase()} de compte bancaire</div>
      <p>
        Monsieur/Madame,<br><br>
        Je soussigné(e) <strong>${data.nom}</strong> sollicite la ${data.type.toLowerCase()} de mon compte bancaire.<br>
        Je reste disponible pour tout complément d’information.<br><br>
        Veuillez agréer, Madame, Monsieur, l’expression de ma considération distinguée.
      </p>
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
      <div>Ce rapport est établi pour servir de référence officielle.</div>
    `
  }
};
