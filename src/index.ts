console.log('hola mundo');

import express from 'express';

const app = express();

app.set('port', 3000);

app.listen(app.get('port'), ()=>{
    console.log('Server is running')
});

interface cliente {
    id: number;
    nombre: string;
    apellidos: string;
  }

let cliente1: cliente =  {
    id:1,
    nombre: "fernando",
    apellidos: "gisbert"
}

let cliente2: cliente =  {
    id:2,
    nombre: "pepe",
    apellidos: "perez"
}
let cliente3: cliente =  {
    id:3,
    nombre: "pepito",
    apellidos: "perez"
}

let cliente4: cliente =  {
    id:4,
    nombre: "manolito",
    apellidos: "gafotas"
}


let cliente5: cliente =  {
    id:5,
    nombre: "harry",
    apellidos: "potter"
}

let arrayClientes = [cliente1, cliente2, cliente3, cliente4, cliente5];

app.get('/clients/', (req, res)=>{

    res.send(arrayClientes);
});

app.get('/clients/:idCliente', (req, res)=>{

    console.log(`ruta con parametro ${req.params.idCliente}`);

    res.send(
        arrayClientes.filter(cliente=>{

            if(cliente.id === Number(req.params.idCliente)){
                return cliente
            };
    
        })
    );
})