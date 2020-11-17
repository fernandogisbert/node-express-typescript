import {Router, Request, Response} from 'express';


interface products {
    id:number,
    title:string
}

class ProductRoutes {

    router: Router = Router();

    private products: Array<products> = [
        {id:1, title: 'pelota'},
        {id:2, title: 'raqueta'}
    ];

    // generar rutas a través del constructor de la clase
    constructor(){
        this.router.get('/',(req: Request, res: Response) =>{
            res.send(this.products);
        })
    } 
}

// creo una instancia de la clase para poder exportarla

const productRoutes = new ProductRoutes();

// la exporto

export default productRoutes.router;