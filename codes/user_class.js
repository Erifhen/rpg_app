class User {
    constructor(nickname, bio_description) {
        this.nickname = nickname;
        this.bio_description = bio_description;
        this.cardCollection = {
            artificial: [],
            social: [],
            mental: [],
            fisic: [],
            extras: []
        };
        this.shadowCardCollection = {
            sh_artificial: [],
            sh_social: [],
            sh_mental: [],
            sh_fisic: [],
            sh_extras: []
        };
    }

    // Adicionar card
    addCardToCollection(card) {
        const { type } = card;

        if (this.cardCollection[type].length < 5) {
            this.cardCollection[type].push(card);
            console.log(`Carta ${card.name} adicionada à coleção de tipo ${type}.`);
        } else {
            console.log(`Limite de 5 cartas do tipo ${type} atingido.`);
        }
    }

    // Remover card por nome e tipo
    removeCardFromCollection(cardName, type) {
        this.cardCollection[type] = this.cardCollection[type].filter(card => card.name !== cardName);
    }

    // Editar detalhes de um card na coleção do usuário
    editCardInCollection(cardName, type, newName, newDescription, newImage) {
        const cardToUpdate = this.cardCollection[type].find(card => card.name === cardName);
        if (cardToUpdate) {
            cardToUpdate.name = newName;
            cardToUpdate.description = newDescription;
            cardToUpdate.image = newImage;
        } else {
            console.log("Card não encontrado.");
        }
    }
}
