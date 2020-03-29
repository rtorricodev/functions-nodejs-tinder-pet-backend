class MainController{
    constructor(dataBaseRepository){
        this.dataBaseRepository = dataBaseRepository;
    }

    root(request,response){
        response.send('The Api Works');
    }
}

module.exports = MainController;