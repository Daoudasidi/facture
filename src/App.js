export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 * 
	 * À faire. Étapes :
	 *   1) Reproduire à l'identique la facture retrouvée dans le fichier resultat.html 
	 *      dans la section AFFICHAGE
	 *   2) Compléter la section SAISIE en se fiant aux commentaires
	 *   3) Compléter la section TRAITEMENT en se fiant aux commentaires
	 *   4) Adapter l'affichage pour utiliser les données à notre disposition
	 *   5) Se réjouir du résultat
	 * Note: Si vous n'avez pas encore vu les structures conditionnelles, 
	 *       faites comme si la livraison était toujours demandée.
	 * Petit truc : Dans les prompt, mettez une valeur par défaut 
	 *              pour éviter d'avoir à les rentrer à chaque essai.
	 */
	static main() {
		document.getElementById("btnFacturer").addEventListener("click", e => {
			this.facturer();
		});
		document.getElementById("caisse").addEventListener("change", e => {
			this.facturer();
		});
	}
	static facturer() {
		const PRIX_LIVRAISON = 50;

		var app = document.getElementById("app");
		// SAISIE====================================================
		var caisse, inArticle, inPrixUnitaire, inQuantite, inLivraison
		// Récupérer le formulaire
		
		// Demander à l'usager quel article acheter.

		// Demander à l'usager le prix unitaire. Transformer le résultat en float.

		// Demander à l'usager la quantité. Transformer le résultat en integer.

		// Demander à l'usager s'il veut faire livrer.

		
		// TRAITEMENT================================================
		var soustotal, tps, tvq, total;
		// Calculer le sous-total (le prix multiplié par la quantité)

		// Ajouter le prix de la livraison au besoin (si inLivraison est true)

		// Calculer la TPS (5% du sous-total)

		// Calculer la TVQ (9.975% du sous-total)

		// Calculer le total (aditionner le sous-total, la tps et la tvq)

		
		// AFFICHAGE=================================================
		var facture, h1, divArticle, divPrixUnitaire, divQuantite, divLivraison, divSousTotal, divTPS, divTVQ, divTotal;
		// Supprimer la facture si elle existe avant de la reproduire

		// Reproduire le HTML de la facture
		facture = app.appendChild(document.createElement("div"));
		facture.id = "facture";
		
		h1 = facture.appendChild(document.createElement("h1"));
		h1.innerHTML = "Au bon rabais";

		divArticle = facture.appendChild(document.createElement("div"));
		divArticle.classList.add("article");
		// Ajouter l'article
		
		divPrixUnitaire = facture.appendChild(document.createElement("div"));
		divPrixUnitaire.classList.add("prixunitaire");
		// Ajouter le prix unitaire

		divQuantite = facture.appendChild(document.createElement("div"));
		divQuantite.classList.add("quantite");
		// Ajouter la quantité
		
		// La livraison ne doit s'afficher que si elle est demandée
			divLivraison = facture.appendChild(document.createElement("div"));
			divLivraison.classList.add("livraison");
			// Ajouter la livraison

		divSousTotal = facture.appendChild(document.createElement("div"));
		divSousTotal.classList.add("soustotal");
		// Ajouter le sous-total
		
		divTPS = facture.appendChild(document.createElement("div"));
		divTPS.classList.add("tps");
		// Ajouter la TPS
		
		divTVQ = facture.appendChild(document.createElement("div"));
		divTVQ.classList.add("tvq");
		// Ajouter la TVQ
		
		divTotal = facture.appendChild(document.createElement("div"));
		divTotal.classList.add("total");
		// Ajouter le total
		
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
