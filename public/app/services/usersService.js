//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('usersService', function () {
	 this.getUsers = function () {
        return users
    };
   



    this.getFecha = function (){
        var f = new Date();
        var fecha = (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()); 
        return fecha;
    }

    this.insertExercise = function (id, musculo, descripcion, peso, fecha){
        var b=0;
        var i = users[id].musculos.length - 1;
       while( i >= 0 || b == 0 ){
        if (users[id].musculos[i].nombre == musculo) {
                b=1;
                users[id].musculos[i].ejercicios.push({
                    nombre: 'Curl con barra de pie' ,
                    intento:[{ fecha: fecha, peso: peso}]
                });
            }
         i--;
        }
        if (!b) {
            users[id].musculos.push({   
                    nombre: musculo, 
                    ejercicios: [ 
                                {   nombre: descripcion ,
                                    intento:[ { fecha: fecha, peso:15}]
                                }]
                            });

        };
    }

    this.insertUser = function (name, email) {
        var topID = users.length + 1;
        users.push({
            id: topID,
            name: name,
            email: email
        });
    };


    this.deleteUser = function (id) {
        for (var i = users.length - 1; i >= 0; i--) {
            if (users[i].id === id) {
                users.splice(i, 1);
                break;
            }
        }
    };


    this.getUser = function (id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                return users[i];
            }
        }
        return null;
    };

    var users = [
        {
            id: 1, name: 'Alvaro', email: 'alvc12@gmail.com',  nacimiento: "1992-03-18", altura: 177, sexo: 1, 
            musculos: [
                {   nombre: 'Biceps', 
                    ejercicios: [ 
                                {   nombre: 'Curl con barra de pie' ,
                                    intento:[
                                                        { fecha: "2015-01-01T18:25:43.511Z", peso:15},
                                                        { fecha: "2015-01-02T18:25:43.511Z", peso:16},
                                                        { fecha: "2015-01-03T18:25:43.511Z", peso:17}
                                                        ]
                                },
                                {   nombre: 'Curl con barra Z en banco scott' ,
                                    intento:[   { fecha: "2015-01-01T18:25:43.511Z", peso:15},
                                                { fecha: "2015-01-02T18:25:43.511Z", peso:16},
                                                { fecha: "2015-01-03T18:25:43.511Z", peso:17}
                                                        ]
                                },
                                 {  nombre: 'Curl con polea de pie' ,
                                    intento:[   { fecha: "2015-01-01T18:25:43.511Z", peso:15},
                                                { fecha: "2015-01-02T18:25:43.511Z", peso:16},
                                                { fecha: "2015-01-03T18:25:43.511Z", peso:17}
                                                ]
                                }

                            ]},
                {   nombre: 'Triceps', 
                    ejercicios: [ 
                                {   nombre: 'Curl con polea de pie' ,
                                    intento:[
                                                        { fecha: "2015-01-01T18:25:43.511Z", peso:15},
                                                        { fecha: "2015-01-02T18:25:43.511Z", peso:16},
                                                        { fecha: "2015-01-03T18:25:43.511Z", peso:17}
                                                        ]
                                },
                                {   nombre: 'Mancuerna tras nuca' ,
                                    intento:[   { fecha: "2015-01-01T18:25:43.511Z", peso:15},
                                                { fecha: "2015-01-02T18:25:43.511Z", peso:16},
                                                { fecha: "2015-01-03T18:25:43.511Z", peso:17}
                                                        ]
                                },
                                 {  nombre: 'Press frances con barra recta' ,
                                    intento:[   { fecha: "2015-01-01T18:25:43.511Z", peso:15},
                                                { fecha: "2015-01-02T18:25:43.511Z", peso:16},
                                                { fecha: "2015-01-03T18:25:43.511Z", peso:17}
                                                ]
                                }

                            ]}

            ]
           
        },
        {
            id: 2, name: 'Jesse', email: 'pinkman@gmail.com', edad: 30,  peso: 80, altura: 190, sexo: 1,
            exercises: [
                { musculo: 'Biceps', descripcion:'Curl con barra' , peso:7},
                { musculo: 'Triceps', descripcion:'Jalones en polea con cuerda' , peso:30},
                { musculo: 'Pectoral', descripcion:'Press con mancuernas' , peso:15},
                { musculo: 'Espalda', descripcion:'Dominadas estrictas' , peso:0}
            ]
            
        },
        {
            id: 3, name: 'Gonzalo', email: 'carmona@gmail.com', edad: 17,  peso: 80, altura: 180, sexo: 1,
             exercises: [
                { musculo: 'Biceps', descripcion:'Curl con barra' , peso:7},
                { musculo: 'Triceps', descripcion:'Jalones en polea con cuerda' , peso:30},
                { musculo: 'Pectoral', descripcion:'Press con mancuernas' , peso:15},
                { musculo: 'Espalda', descripcion:'Dominadas estrictas' , peso:0}
            ]
            
        },

        {
            id: 4, name: 'Amaya', email: 'basañez@gmail.com', edad: 48,  peso: 50, altura: 150, sexo: 0
            
        }
        /*,
        {
            id: 3, name: 'Charles', email: 'Sutton', address: '455 7th Ave.', edad: 'Quebec',
            orders: [
                { product: 'Call of Duty', price: 59.99, quantity: 1, orderTotal: 59.99 },
                { product: 'Controller', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Gears of War', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Lego City', price: 49.99, quantity: 1, orderTotal: 49.99 }
            ]
        }*/
         ];
   

});

