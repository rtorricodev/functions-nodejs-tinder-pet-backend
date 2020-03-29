const FireStore = require('../Adapters/Database/FireStore');

class PetController{
    constructor(dataBaseRepository){
        this.dataBaseRepository = dataBaseRepository
        this.collectionName = 'pets'; 
    }

    async listPets(request,response){
        let list = await this.dataBaseRepository.list(this.collectionName); 
        response.send(list);
    }

    addPet(request,response){
        let document = request.body 
        this.dataBaseRepository.add(document,this.collectionName); //TODO: try y catch
        response.send('ok');
    }
}

module.exports = PetController;