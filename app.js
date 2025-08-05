// Modèles de formulaires et génération de documents (langage soutenu, Mali)
const templates = {
  lettre: {
    name: "Lettre administrative",
    fields: [
      { label: "Destinataire", name: "destinataire", type: "text", required: true },
      { label: "Objet", name: "objet", type: "text", required: true },
      { label: "Message", name: "message", type: "textarea", required: true }
    ],
    render: data => `
      <div style="text-align:right;">Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <div>
        <strong>À l'attention de : ${data.destinataire}</strong><br>
        <strong>Objet :</strong> ${data.objet}
      </div>
      <p>${data.message}</p>
      <br>
      <div>Cordialement,</div>
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
  motivation: {
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
      <p>${data.message}</p>
      <br>
      <div>Veuillez agréer, Madame, Monsieur, l’expression de ma considération distinguée.</div>
      <div><strong>${company.name}</strong></div>
    `
  },
  contrat: {
    name: "Contrat simple",
    fields: [
      { label: "Nom du contractant", name: "contractant", type: "text", required: true },
      { label: "Objet du contrat", name: "objet", type: "text", required: true },
      { label: "Durée", name: "duree", type: "text", required: false },
      { label: "Conditions", name: "conditions", type: "textarea", required: false }
    ],
    render: data => `
      <h2 style="text-align:center;">Contrat</h2>
      <p>Entre les soussignés :<br><br>
      <strong>${company.name}</strong> et <strong>${data.contractant}</strong></p>
      <p><strong>Objet :</strong> ${data.objet}</p>
      <p><strong>Durée :</strong> ${data.duree || '----'}</p>
      <p><strong>Conditions :</strong><br>${(data.conditions || '').replace(/\n/g, '<br>')}</p>
      <br>
      <div>Fait à Kayes, le ${new Date().toLocaleDateString('fr-FR')}</div>
      <br>
      <div>Signature :</div>
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
    `
  },
  attestation: {
    name: "Attestation de vente",
    fields: [
      { label: "Nom du vendeur", name: "vendeur", type: "text", required: true },
      { label: "Nom de l’acheteur", name: "acheteur", type: "text", required: true },
      { label: "Objet de la vente", name: "objet", type: "text", required: true },
      { label: "Montant", name: "montant", type: "text", required: false }
    ],
    render: data => `
      <h2 style="text-align:center;">Attestation de Vente</h2>
      <p>Je soussigné(e) <strong>${data.vendeur}</strong>, atteste avoir vendu à <strong>${data.acheteur}</strong> l’objet suivant : <strong>${data.objet}</strong> pour la somme de <strong>${data.montant || '----'}</strong>.</p>
      <p>Fait à Kayes, le ${new Date().toLocaleDateString('fr-FR')}</p>
      <div>Signature :</div>
    `
  },
  emploi: {
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
      <p>${data.message}</p>
      <br>
      <div>Veuillez agréer, Madame, Monsieur, l’expression de ma considération distinguée.</div>
      <div><strong>${company.name}</strong></div>
    `
  },
  banque: {
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
      <p>Je soussigné(e) <strong>${data.nom}</strong> sollicite par la présente la ${data.type.toLowerCase()} de mon compte auprès de votre établissement.</p>
      <br>
      <div>Veuillez agréer, Madame, Monsieur, l’expression de ma considération distinguée.</div>
      <div><strong>${company.name}</strong></div>
    `
  }
};

// Infos entreprise affichées et insérées dans les documents
const company = {
  name: "SAMASSA TECHNOLOGIE",
  slogan: "Tout pour l’informatique",
  address: "Grand Marché de Kayes, près du 1er arrondissement de la police",
  contact: "77291931 / boussesamassa10@gmail.com"
};

// Sélection DOM
const dashboard = document.getElementById('dashboard');
const formSection = document.getElementById('form-section');
const docForm = document.getElementById('doc-form');
const resultSection = document.getElementById('result-section');
const docResult = document.getElementById('doc-result');
const downloadBtn = document.getElementById('download-pdf');
const backBtn = document.getElementById('back-menu');

// Gestion menu → formulaire
dashboard.querySelectorAll('button[data-template]').forEach(btn => {
  btn.onclick = () => {
    const key = btn.getAttribute('data-template');
    showForm(key);
  };
});

function showForm(templateKey) {
  dashboard.style.display = 'none';
  formSection.style.display = '';
  resultSection.style.display = 'none';
  buildForm(templateKey);
}

// Construction dynamique du formulaire
function buildForm(templateKey) {
  const tpl = templates[templateKey];
  docForm.innerHTML = '';
  tpl.fields.forEach(field => {
    const wrap = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = field.label + (field.required ? ' *' : '');
    label.setAttribute('for', field.name);
    wrap.appendChild(label);

    let input;
    if (field.type === 'textarea') {
      input = document.createElement('textarea');
    } else if (field.type === 'select') {
      input = document.createElement('select');
      field.options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        input.appendChild(option);
      });
    } else {
      input = document.createElement('input');
      input.type = field.type;
    }
    input.name = field.name;
    input.id = field.name;
    if (field.required) input.required = true;
    wrap.appendChild(input);
    docForm.appendChild(wrap);
  });

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Générer le document';
  submit.style.marginTop = '1em';
  docForm.appendChild(submit);

  docForm.onsubmit = e => {
    e.preventDefault();
    const data = {};
    tpl.fields.forEach(field => {
      data[field.name] = docForm.elements[field.name].value.trim();
    });
    generateDocument(templateKey, data);
  };
}

// Génération et affichage du document
function generateDocument(templateKey, data) {
  const tpl = templates[templateKey];
  docResult.innerHTML = tpl.render(data);
  formSection.style.display = 'none';
  resultSection.style.display = '';
}

// Export PDF (optimisé, impression directe)
downloadBtn.onclick = () => {
  printSection('doc-result');
};

// Retour au menu
backBtn.onclick = () => {
  resultSection.style.display = 'none';
  dashboard.style.display = '';
  formSection.style.display = 'none';
};

// Impression propre d’une section
function printSection(id) {
  const printContents = document.getElementById(id).innerHTML;
  const style = `
    <style>
      body { font-family: 'Segoe UI', Arial, sans-serif; margin: 1.5em; }
      h2 { text-align: center; }
      div, p { margin-bottom: 1em; font-size: 1.05em; }
      hr { margin: 1.2em 0; }
    </style>
  `;
  const win = window.open('', '', 'height=800,width=600');
  win.document.write('<html><head><title>Document à imprimer</title>' + style + '</head><body>');
  win.document.write(printContents);
  win.document.write('</body></html>');
  win.document.close();
  win.focus();
  win.print();
  win.close();
}

// PWA – Service Worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}