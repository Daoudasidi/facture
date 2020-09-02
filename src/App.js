/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		// SAISIE
		var article = prompt("Quel article voulez-vous acheter?", "Télé");
		var prixunitaire = parseFloat(prompt("Quel est le prix unitaire?", "1000"));
		var quantite = parseInt(prompt("Combien en voulez-vous?", "2"));
		var livraison = confirm("Livraison?");

		// TRAITEMENT
		var soustotal = prixunitaire * quantite;
		if (livraison === true) {
			soustotal += 50;
		}
		var tps = soustotal * 5 / 100;
		var tvq = soustotal * 9.975 / 100;
		var total = soustotal + tps + tvq;

		// AFFICHAGE
		var facture = app.appendChild(document.createElement("div"));
		facture.id = "facture";
		
		var h1 = facture.appendChild(document.createElement("h1"));
		h1.innerHTML = "Au bon rabais";

		var divArticle = facture.appendChild(document.createElement("div"));
		divArticle.classList.add("article");
		divArticle.innerHTML = article;

		var divPrixUnitaire = facture.appendChild(document.createElement("div"));
		divPrixUnitaire.classList.add("prixunitaire");
		divPrixUnitaire.innerHTML = prixunitaire.toFixed(2) + " $";

		var divQuantite = facture.appendChild(document.createElement("div"));
		divQuantite.classList.add("quantite");
		divQuantite.innerHTML = quantite;

		if (livraison === true) {
			var divLivraison = facture.appendChild(document.createElement("div"));
			divLivraison.classList.add("livraison");
			divLivraison.innerHTML = "50.00 $";
		}

		var divSousTotal = facture.appendChild(document.createElement("div"));
		divSousTotal.classList.add("soustotal");
		divSousTotal.innerHTML = soustotal.toFixed(2) + "$";

		var divTPS = facture.appendChild(document.createElement("div"));
		divTPS.classList.add("tps");
		divTPS.innerHTML = tps.toFixed(2) + "$";

		var divTVQ = facture.appendChild(document.createElement("div"));
		divTVQ.classList.add("tvq");
		divTVQ.innerHTML = tvq.toFixed(2) + "$";

		var divTotal = facture.appendChild(document.createElement("div"));
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
