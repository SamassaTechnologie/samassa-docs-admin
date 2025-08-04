document.getElementById('docForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nom = document.getElementById('nom').value.trim();
  const prenom = document.getElementById('prenom').value.trim();
  const objet = document.getElementById('objet').value.trim();
  const date = new Date().toLocaleDateString('fr-FR');

  const resultat = `Kayes, le ${date}

À qui de droit,

Je soussigné(e) ${prenom} ${nom}, résidant à Kayes, sollicite par la présente ${objet.toLowerCase()}.

Dans l’attente d’une suite favorable, veuillez agréer, Madame, Monsieur, mes salutations distinguées.`;
  
  document.getElementById('resultat').textContent = resultat;
});