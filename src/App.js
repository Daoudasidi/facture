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
		this.PRIX_LIVRAISON = 50;
		this.TAUX_TPS = 5;
		this.TAUX_TVQ = 9.975;
		document.getElementById("btnFacturer").addEventListener("click", e => {
			this.facturer();
		});
		document.getElementById("caisse").addEventListener("change", e => {
			this.facturer();
		});
	}
	static facturer() {

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
		soustotal = this.soustotal(inPrixUnitaire, inQuantite, inLivraison);
		// Calculer la TPS (5% du sous-total)
		tps = this.tps(soustotal);
		// Calculer la TVQ (9.975% du sous-total)
		tvq = this.tvq(soustotal);
		// Calculer le total (aditionner le sous-total, la tps et la tvq)
		total = this.total(soustotal);

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
		divPrixUnitaire.innerHTML = this.monnaie(inPrixUnitaire);

		divQuantite = facture.appendChild(document.createElement("div"));
		divQuantite.classList.add("quantite");
		divQuantite.innerHTML = inQuantite;

		if (inLivraison === true) {
			divLivraison = facture.appendChild(document.createElement("div"));
			divLivraison.classList.add("livraison");
			divLivraison.innerHTML = this.monnaie(this.PRIX_LIVRAISON);
		}

		divSousTotal = facture.appendChild(document.createElement("div"));
		divSousTotal.classList.add("soustotal");
		divSousTotal.innerHTML = this.monnaie(soustotal);

		divTPS = facture.appendChild(document.createElement("div"));
		divTPS.classList.add("tps");
		divTPS.innerHTML = this.monnaie(tps);

		divTVQ = facture.appendChild(document.createElement("div"));
		divTVQ.classList.add("tvq");
		divTVQ.innerHTML = this.monnaie(tvq);

		divTotal = facture.appendChild(document.createElement("div"));
		divTotal.classList.add("total");
		divTotal.innerHTML = this.monnaie(total);

	}
	/**
	 * Retourne une chaine contenant la version formattée d'un montant en dollars
	 * @param {number} montant Le montant à formatter
	 */
	static monnaie(montant) {
		var resultat;
		resultat = montant.toFixed(2) + " $";
		return resultat;
	}
	/**
	 * Retourne le sous-total d'une transaction incluant la livraison au besoin
	 * @param number prix Le prix unitaire
	 * @param number qte La quantité achetée
	 * @param boolean liv Doit-on inclure la livraison
	 * @returns integer
	 */
	static soustotal(prix, qte, liv) {
		var resultat;
		resultat = prix * qte;
		if (liv === true) {
			resultat += this.PRIX_LIVRAISON;
		}
		return resultat;
	}
	/**
	 * Retourne la TPS d'un montant donné
	 * @param {number} montant La TPS déduite du montant donné
	 */
	static tps(montant) {
		var resultat;
		resultat = montant * this.TAUX_TPS / 100;
		return resultat;
	}
	/**
	 * Retourne la TVQ d'un montant donné
	 * @param {number} montant La TVP déduite du montant donné
	 */
	static tvq(montant) {
		var resultat;
		resultat = montant * this.TAUX_TVQ / 100;
		return resultat;
	}
	/**
	 * Retourne le total avec taxes d'un montant donné
	 * @param {number} montant 
	 */
	static total(montant) {
		var resultat;
		resultat = montant + this.tps(montant) + this.tvq(montant);
		return resultat;
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
