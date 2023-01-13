export enum ObjectStatut {
  DISPONIBLE = "DISPONIBLE",
  UTILISE = "UTILISE",
}

export interface ObjectEmprunt {
  name: string;
  statut: ObjectStatut;
}
