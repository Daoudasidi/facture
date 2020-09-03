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
		const PRIX_LIVRAISON = 50;

		// SAISIE====================================================
		var article, prixunitaire, quantite, livraison
		// Demander à l'usager quel article acheter.

		// Demander à l'usager le prix unitaire. Transformer le résultat en float.

		// Demander à l'usager la quantité. Transformer le résultat en integer.

		// Demander à l'usager s'il veut faire livrer.


		// TRAITEMENT================================================
		var soustotal, tps, tvq, total
		// Calculer le sous-total (le prix multiplié par la quantité)
		
		// Ajouter le prix de la livraison au besoin (si livraison est true)

		// Calculer la TPS (5% du sous-total)
		
		// Calculer la TVQ (9.975% du sous-total)

		// Calculer le total (aditionner le sous-total, la tps et la tvq)


		// AFFICHAGE=================================================
		// Reproduire le HTML de la facture
		// Déterminez vous-mêmes les variables à utiliser
		var app = document.getElementById("app");


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
