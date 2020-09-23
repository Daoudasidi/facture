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
		caisse = document.getElementById("caisse");
		// Demander à l'usager quel article acheter.
		inArticle = caisse.inArticle.value;
		// console.log(inArticle);
		// Demander à l'usager le prix unitaire. Transformer le résultat en float.
		inPrixUnitaire = caisse.inPrixUnitaire.valueAsNumber;
		// console.log(inPrixUnitaire);
		// Demander à l'usager la quantité. Transformer le résultat en integer.
		inQuantite = caisse.inQuantite.valueAsNumber;
		// console.log(inQuantite);
		// Demander à l'usager s'il veut faire livrer.
		inLivraison = caisse.inLivraison.checked;
		// console.log(inLivraison);

		// TRAITEMENT================================================
		var soustotal, tps, tvq, total;
		// Calculer le sous-total (le prix multiplié par la quantité)
		soustotal = inPrixUnitaire * inQuantite;
		// Ajouter le prix de la livraison au besoin (si inLivraison est true)
		if (inLivraison === true) {
			soustotal += PRIX_LIVRAISON;
		}
		// Calculer la TPS (5% du sous-total)
		tps = soustotal * 5 / 100;
		// Calculer la TVQ (9.975% du sous-total)
		tvq = soustotal * 9.975 / 100;
		// Calculer le total (aditionner le sous-total, la tps et la tvq)
		total = soustotal + tps + tvq;

		// AFFICHAGE=================================================
		var facture, h1, divArticle, divPrixUnitaire, divQuantite, divLivraison, divSousTotal, divTPS, divTVQ, divTotal;
		// Supprimer la facture si elle existe avant de la reproduire
		facture = document.getElementById("facture");
		if (facture !== null) {
			facture.parentNode.removeChild(facture);
		}
		// Reproduire le HTML de la facture
		facture = app.appendChild(document.createElement("div"));
		facture.id = "facture";
		
		h1 = facture.appendChild(document.createElement("h1"));
		h1.innerHTML = "Au bon rabais";

		divArticle = facture.appendChild(document.createElement("div"));
		divArticle.classList.add("article");
		divArticle.innerHTML = inArticle;

		divPrixUnitaire = facture.appendChild(document.createElement("div"));
		divPrixUnitaire.classList.add("prixunitaire");
		divPrixUnitaire.innerHTML = inPrixUnitaire.toFixed(2) + " $";

		divQuantite = facture.appendChild(document.createElement("div"));
		divQuantite.classList.add("quantite");
		divQuantite.innerHTML = inQuantite;

		if (inLivraison === true) {
			divLivraison = facture.appendChild(document.createElement("div"));
			divLivraison.classList.add("livraison");
			divLivraison.innerHTML = PRIX_LIVRAISON + ".00 $";
		}

		divSousTotal = facture.appendChild(document.createElement("div"));
		divSousTotal.classList.add("soustotal");
		divSousTotal.innerHTML = soustotal.toFixed(2) + "$";

		divTPS = facture.appendChild(document.createElement("div"));
		divTPS.classList.add("tps");
		divTPS.innerHTML = tps.toFixed(2) + "$";

		divTVQ = facture.appendChild(document.createElement("div"));
		divTVQ.classList.add("tvq");
		divTVQ.innerHTML = tvq.toFixed(2) + "$";

		divTotal = facture.appendChild(document.createElement("div"));
		divTotal.classList.add("total");
		divTotal.innerHTML = total.toFixed(2) + "$";

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
