export class CreateArticleDto {
    readonly libArticle: string;
    readonly prix: number;
    readonly quantite: number;
    readonly taille: string;
    readonly couleur: string;
    readonly valide: boolean;
    readonly typeIds: number[]; // Liste des IDs des types associés
  }
  