// --- Données entreprise ---
const company = {
  name: "SAMASSA TECHNOLOGIE",
  slogan: "Tout pour l’informatique",
  address: "Grand Marché de Kayes, près du 1er arrondissement de la police",
  contact: "77291931 / boussesamassa10@gmail.com"
};

// --- Modèles de documents : stockage local + défauts ---
const defaultTemplates = {
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

function getTemplates() {
  try {
    const local = localStorage.getItem("samassa_templates");
    return local ? JSON.parse(local) : {...defaultTemplates};
  } catch (_) { return {...defaultTemplates}; }
}
function setTemplates(tpls) {
  localStorage.setItem("samassa_templates", JSON.stringify(tpls));
}
let templates = getTemplates();

// --- Historique documents ---
function getHistory() {
  try { return JSON.parse(localStorage.getItem("samassa_history") || "[]"); } catch { return []; }
}
function addHistory(key, data, date = new Date()) {
  let hist = getHistory();
  hist.unshift({key, data, date: date.toISOString()});
  hist = hist.slice(0, 8); // 8 derniers max
  localStorage.setItem("samassa_history", JSON.stringify(hist));
}
function clearHistory() {
  localStorage.removeItem("samassa_history");
  renderHistory();
}
function renderHistory() {
  const hist = getHistory();
  const bar = document.getElementById('history-list');
  bar.innerHTML = "";
  hist.forEach((h,i) => {
    const btn = document.createElement('button');
    btn.textContent = templates[h.key]?.name || h.key;
    btn.onclick = () => showResume(h.key, h.data, true);
    btn.title = (new Date(h.date)).toLocaleString();
    bar.appendChild(btn);
  });
}

// --- Sélection DOM ---
const dashboard = document.getElementById('dashboard');
const docMenu = document.getElementById('doc-menu');
const formSection = document.getElementById('form-section');
const docForm = document.getElementById('doc-form');
const resumeSection = document.getElementById('resume-section');
const resumeDiv = document.getElementById('resume-content');
const resultSection = document.getElementById('result-section');
const docResult = document.getElementById('doc-result');
const downloadBtn = document.getElementById('download-pdf');
const printBtn = document.getElementById('print-doc');
const clearBtn = document.getElementById('clear-data');
const backBtn = document.getElementById('back-menu');
const backBtn2 = document.getElementById('back-menu2');
const confirmGenBtn = document.getElementById('confirm-generate');
const editFormBtn = document.getElementById('edit-form');
const searchModel = document.getElementById('search-model');
const paperSize = document.getElementById('paper-size');
const pwaPromptBar = document.getElementById('pwa-prompt');
const closePwaPrompt = document.getElementById('close-pwa-prompt');
const historyClearBtn = document.getElementById('clear-history');

// --- Menu dynamique : recherche rapide ---
function renderMenu() {
  docMenu.innerHTML = "";
  const q = (searchModel.value || "").toLowerCase();
  Object.entries(templates).forEach(([k,v]) => {
    if(q && !v.name.toLowerCase().includes(q)) return;
    const btn = document.createElement('button');
    btn.setAttribute('data-template', k);
    btn.textContent = v.name;
    btn.onclick = () => showForm(k);
    docMenu.appendChild(btn);
  });
}
searchModel.oninput = renderMenu;

// --- Affichage formulaire ---
function showForm(templateKey, oldData = null) {
  dashboard.style.display = 'none';
  formSection.style.display = '';
  resumeSection.style.display = 'none';
  resultSection.style.display = 'none';
  buildForm(templateKey, oldData);
  docForm.elements[templates[templateKey].fields[0].name].focus();
}

// Construction dynamique du formulaire
function buildForm(templateKey, oldData = null) {
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
      input.autocomplete = 'off'; // Sécurité : pas d'autofill
    }
    input.name = field.name;
    input.id = field.name;
    if (field.required) input.required = true;
    if (oldData && oldData[field.name]) input.value = oldData[field.name];
    wrap.appendChild(input);
    docForm.appendChild(wrap);
  });

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Voir le résumé';
  submit.style.marginTop = '1em';
  docForm.appendChild(submit);

  docForm.onsubmit = e => {
    e.preventDefault();
    const data = {};
    tpl.fields.forEach(field => {
      data[field.name] = docForm.elements[field.name].value.trim();
    });
    showResume(templateKey, data);
  };
}

// Affichage résumé avant génération finale
function showResume(templateKey, data, fromHist = false) {
  formSection.style.display = 'none';
  dashboard.style.display = 'none';
  resumeSection.style.display = '';
  resultSection.style.display = 'none';
  resumeDiv.innerHTML = templates[templateKey].render(data);
  confirmGenBtn.onclick = () => generateDocument(templateKey, data, fromHist);
  editFormBtn.onclick = () => showForm(templateKey, data);
  backBtn2.onclick = () => { dashboard.style.display = ''; resumeSection.style.display = 'none'; };
}

// Génération et affichage du document
function generateDocument(templateKey, data, fromHist = false) {
  docResult.innerHTML = renderWithHeaderFooter(templates[templateKey].render(data), templateKey, data);
  resumeSection.style.display = 'none';
  resultSection.style.display = '';
  if (!fromHist) addHistory(templateKey, data);
  renderHistory();
}

// Ajout d'en-tête, filigrane et pied de page
function renderWithHeaderFooter(content, templateKey, data) {
  return `
    <div style="text-align:center;">
      <img src="logo.png" style="width:60px;height:60px;"><br>
      <strong>${company.name}</strong><br>
      <span style="font-size:0.95em;">${company.slogan}</span>
      <hr>
    </div>
    <div style="min-height:200px;position:relative;">
      ${content}
      <div style="position:absolute;bottom:8px;right:10px;opacity:0.15;font-size:1.2em;pointer-events:none;">Document généré par ${company.name}</div>
    </div>
    <hr>
    <div style="font-size:0.95em;color:#555;">
      ${company.address}<br>${company.contact}
    </div>
  `;
}

// Impression propre d’une section
function printSection(id, paper='A4') {
  const printContents = document.getElementById(id).innerHTML;
  const style = `
    <style>
      @page { size: ${paper}; margin: 2.1cm 2.1cm 2.1cm 2.1cm; }
      body { font-family: 'Segoe UI', Arial, serif; margin: 0.8em; color: #222;}
      h2 { text-align: center; }
      div, p { margin-bottom: 1em; font-size: 1.05em; }
      hr { margin: 1.2em 0; }
      img { display: block; margin: 0 auto;}
      .filigrane { position: absolute; right:16px; bottom:15px; opacity:0.15; font-size:1.1em;}
    </style>
  `;
  const win = window.open('', '', 'height=800,width=600');
  win.document.write('<html><head><title>Document à imprimer</title>' + style + '</head><body>');
  win.document.write(printContents);
  win.document.write('</body></html>');
  win.document.close();
  win.focus();
  setTimeout(()=>{win.print();win.close();}, 400);
}

// PDF et impression
downloadBtn.onclick = () => printSection('doc-result', paperSize.value);
printBtn.onclick = () => printSection('doc-result', paperSize.value);

// Effacer les données (retour menu)
clearBtn.onclick = () => {
  resultSection.style.display = 'none';
  dashboard.style.display = '';
  docForm.reset();
};
backBtn.onclick = () => {
  resultSection.style.display = 'none';
  dashboard.style.display = '';
  formSection.style.display = 'none';
};

historyClearBtn.onclick = clearHistory;

// --- Mode sombre ---
const themeBtn = document.getElementById('toggle-theme');
themeBtn.onclick = () => {
  document.body.classList.toggle('mode-sombre');
  localStorage.setItem('samassa_theme', document.body.classList.contains('mode-sombre') ? 'dark' : 'light');
};

(function restoreTheme() {
  if(localStorage.getItem('samassa_theme') === 'dark'){
    document.body.classList.add('mode-sombre');
  }
})();

// --- PWA prompt ---
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
}
if('onbeforeinstallprompt' in window) {
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    pwaPromptBar.style.display = '';
    closePwaPrompt.onclick = () => {
      pwaPromptBar.style.display = 'none';
      deferredPrompt.prompt();
    };
  });
}

// --- Raccourcis clavier ---
document.addEventListener('keydown', e => {
  if(document.activeElement.tagName === "TEXTAREA" || document.activeElement.tagName === "INPUT") return;
  if (e.key === "Escape") {
    dashboard.style.display = '';
    formSection.style.display = 'none';
    resumeSection.style.display = 'none';
    resultSection.style.display = 'none';
    document.activeElement.blur();
  }
  if (e.key === "Enter") {
    // Valider dans formulaire ou résumé
    if (formSection.style.display !== "none") {
      docForm.querySelector('button[type="submit"]').click();
    } else if (resumeSection.style.display !== "none") {
      confirmGenBtn.click();
    }
  }
});

// --- Administration modèles (admin ultra simple, protection basique) ---
const adminSection = document.getElementById('admin-section');
const adminLoginForm = document.getElementById('admin-login');
const adminPassInput = document.getElementById('admin-pass');
const adminPanel = document.getElementById('admin-panel');
const modelList = document.getElementById('model-list');
const addModelBtn = document.getElementById('add-model');
const closeAdminBtn = document.getElementById('close-admin');
const openAdminBtn = document.getElementById('open-admin');
let adminLogged = false;
const adminPwd = "kayes2025"; // Change ce mot de passe !

openAdminBtn.onclick = () => {
  adminSection.style.display = '';
  adminPanel.style.display = 'none';
  adminLoginForm.style.display = '';
  adminPassInput.value = '';
  adminPassInput.focus();
};
closeAdminBtn.onclick = () => adminSection.style.display = 'none';

adminLoginForm.onsubmit = e => {
  e.preventDefault();
  if (adminPassInput.value === adminPwd) {
    adminLogged = true;
    adminLoginForm.style.display = 'none';
    adminPanel.style.display = '';
    renderModelList();
  } else {
    adminPassInput.value = '';
    alert("Mot de passe incorrect.");
  }
};
function renderModelList() {
  modelList.innerHTML = "";
  Object.entries(templates).forEach(([k,v]) => {
    const li = document.createElement('li');
    li.textContent = v.name;
    const del = document.createElement('button');
    del.textContent = "Supprimer";
    del.style.marginLeft = "0.8em";
    del.onclick = () => {
      if(confirm(`Supprimer le modèle "${v.name}" ?`)) {
        delete templates[k];
        setTemplates(templates);
        renderModelList();
        renderMenu();
      }
    };
    li.appendChild(del);
    modelList.appendChild(li);
  });
}
addModelBtn.onclick = () => {
  const name = prompt("Nom du modèle :");
  if (!name) return;
  const key = name.toLowerCase().replace(/[^a-z0-9_]/g, "_") + "_" + Date.now();
  templates[key] = {
    name,
    fields: [ {label: "Champ 1", name: "champ1", type: "text", required: true} ],
    render: data => `<strong>${name}</strong><br>` + Object.entries(data).map(([k,v])=>`${k}: ${v}`).join("<br>")
  };
  setTemplates(templates);
  renderModelList();
  renderMenu();
}

// --- Initialisation ---
renderMenu();
renderHistory();