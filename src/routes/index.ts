import { Router } from 'express';

const router: Router = Router();


class Persona {
    id:number;
    nombre: string;
    apellidos: string;

    constructor(nuevaId:number, nuevoNombre:string, nuevoApellidos:string) {
       this.id=nuevaId;
       this.nombre=nuevoNombre;
       this.apellidos=nuevoApellidos;
    }
}

let cliente1 = new Persona(1,'perico', 'el de los palotes');
let cliente2 = new Persona(2,'manolito', 'gafotas');
let cliente3 = new Persona(3,'pepe', 'perez');
let cliente4 = new Persona(4,'david', 'bisbal');
let cliente5 = new Persona(5,'rosa', 'lopez');


let arrayClientes: Array<Persona> = [cliente1, cliente2, cliente3, cliente4, cliente5];

router.get('/', (req, res)=>{

    res.send(arrayClientes);
});

router.get('/:idCliente', (req, res)=>{

    console.log(`el id del cliente es ${req.params.idCliente}`);

    res.send(
        arrayClientes.filter(cliente=>{

            if(cliente.id === Number(req.params.idCliente)){
                return cliente
            };
        })
    );
})

// para tener disponibles las rutas en todo el proyecto
export default router;