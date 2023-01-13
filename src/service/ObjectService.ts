import { ObjectStatut, type ObjectEmprunt } from "../../types/Object";

export default class ObjectService {
  constructor() {}

  getObjects() {
    let data: ObjectEmprunt[] = [
      { name: "Ordinateur", statut: ObjectStatut.DISPONIBLE },
      { name: "Foulard", statut: ObjectStatut.UTILISE },
      { name: "Guitar", statut: ObjectStatut.DISPONIBLE },
      { name: "Ballon", statut: ObjectStatut.UTILISE },
      { name: "Drapeau", statut: ObjectStatut.DISPONIBLE },
      { name: "Microphone", statut: ObjectStatut.DISPONIBLE },
      { name: "Livre", statut: ObjectStatut.UTILISE },
      { name: "Chaise", statut: ObjectStatut.DISPONIBLE },
      { name: "Marteau", statut: ObjectStatut.UTILISE },
      { name: "Téléphone", statut: ObjectStatut.UTILISE },
      { name: "Crayon", statut: ObjectStatut.DISPONIBLE },
      { name: "Imprimante", statut: ObjectStatut.UTILISE },
      { name: "Chargeur", statut: ObjectStatut.UTILISE },
      { name: "Lanterne", statut: ObjectStatut.DISPONIBLE },
      { name: "Magazines", statut: ObjectStatut.UTILISE },
      { name: "Télévision", statut: ObjectStatut.DISPONIBLE },
      { name: "Vase", statut: ObjectStatut.DISPONIBLE },
      { name: "Plaques", statut: ObjectStatut.UTILISE },
      { name: "Aspirateur", statut: ObjectStatut.DISPONIBLE },
      { name: "Perceuse", statut: ObjectStatut.UTILISE },
      { name: "Ponceuse", statut: ObjectStatut.DISPONIBLE },
      { name: "Echelle", statut: ObjectStatut.DISPONIBLE },
      { name: "Escabeau", statut: ObjectStatut.DISPONIBLE },
      { name: "Chalumeau", statut: ObjectStatut.UTILISE },
      { name: "Multimètre", statut: ObjectStatut.UTILISE },
      { name: "Pistolet à colle", statut: ObjectStatut.DISPONIBLE },
      { name: "Malette d'outils", statut: ObjectStatut.UTILISE },
      { name: "Nettoyeur de vitres", statut: ObjectStatut.DISPONIBLE },
      { name: "Broyeur papier", statut: ObjectStatut.DISPONIBLE },
      { name: "Matelas gonflable", statut: ObjectStatut.DISPONIBLE },
      { name: "Machine à coudre", statut: ObjectStatut.UTILISE },
      { name: "Friteuse", statut: ObjectStatut.UTILISE },
      { name: "Fontaine à chocolat", statut: ObjectStatut.DISPONIBLE },
      { name: "Pierrade", statut: ObjectStatut.DISPONIBLE },
      { name: "Machine à glaçons", statut: ObjectStatut.DISPONIBLE },
      { name: "Cuiseur vapeur", statut: ObjectStatut.DISPONIBLE },
      { name: "Appareil à raclette", statut: ObjectStatut.UTILISE },
      { name: "Nettoyeur vapeur", statut: ObjectStatut.DISPONIBLE },
      { name: "Centrifugeuse", statut: ObjectStatut.UTILISE },
      { name: "Yaourtière", statut: ObjectStatut.DISPONIBLE },
      { name: "Blender", statut: ObjectStatut.DISPONIBLE },
      { name: "Appareil à fondue", statut: ObjectStatut.UTILISE },
      { name: "Mixeur", statut: ObjectStatut.UTILISE },
    ];
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
}
