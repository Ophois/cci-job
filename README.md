Projet développé avec Angular

git clone https://github.com/Ophois/cci-job.git
npm install
ng serve -o

ajouter animations à la navigation

[Architecture]
- Core
  - Components
  	- footer (pied de page + copyright)
  	- header (logo + h1 + h2)
  	- nav (menu de navigation)
  - pages
  	- page not found (erreur 404)
  - services
  	- jobService => accès à l'API de récupération des annonces
- icons
	- components
		- icon-del: effacer les annonces
		- icon-first: retour à la page 1
		- icon-last: dernière page
		- icon-next: page suivante
		- icon-prev: page précédente
		- icon-reset: remise à blanc du formulaire
		- icon-search: lancer la recherche
- job (partie métier)
	- components
		- search-form fformulaire de recherche
	- pages
		- annonces: annonces sauvegardées
		- credits
		- job: recherche d'annonces
- shared
	- components
		- job-tpl: template pour une annonce
	- directives
	- pipes
		- safe: nettoyage de code HTML avant affichage
- ui
	- ui: composant principal de la page

	url de l'API dans environnements / environnement.ts

	modification de lang="fr" dans index.html




