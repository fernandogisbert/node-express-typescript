
import express from 'express';
// le pongo el nombre indexRouter desde aquí
import indexRouter from './routes';
// en este caso como viene de una clase el nombre lo cojo de la instancia de la clase
import productRoutes from './routes/products.routes'

const app = express();

app.set('port', 3000);

app.listen(app.get('port'), ()=>{
    console.log('Server is running');
});

// hacemos uso del método use de Express,
// ahora las rutas serán /clients ponemos el clients delante
// indexRouter es un nombre que le pongo desde este archivo
app.use('/clients', indexRouter);
// productRoutes es en nombre que exporto dese product routes
app.use('/products', productRoutes);