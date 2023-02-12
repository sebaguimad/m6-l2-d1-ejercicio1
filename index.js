// Nota: npm a veces no se iniciar con todos los nombres de carpeta usar camel case y guión bajo.

import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors())


function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const estado1 = (maxima) => {
    if(maxima >= 22 && maxima <= 28){
        return 'soleado'
    }else if(maxima >= 18 && maxima <= 21){
        return 'nublado'
    }else if(maxima >= 15 && maxima <= 18){
        return 'lluvioso'
    }
}

const estado2 = (maxima) => {
    if(maxima >= 26 && maxima <= 32){
        return 'soleado'
    }else if(maxima >= 22 && maxima <= 25){
        return 'nublado'
    }else if(maxima >= 19 && maxima <= 21){
        return 'lluvioso'
    }
}


app.get('/clima', (req, res)=> {
    let min1 = numeroRandom(1, 14);
    let max1 = numeroRandom(15, 28);
    let min2 = numeroRandom(2, 18);
    let max2 = numeroRandom(19, 32);
    let respuesta = {
        titulo: 'Predicciones del tiempo',
        dia: 'Mañana',
        temperatura_min: min1 + "°",
        temperatura_max: max2 + "°",
        estado: estado1(max1),
        dia2: 'Pasado mañana',
        temperatura_min2: min2 + "°",
        temperatura_max2: max2 + "°",
        estado2: estado2(max2)
    }
    res.status(200).json(respuesta);
})

// Coarse se instala debido a que llegan peticiones de distintos orígenes y por eso se bloquea como medio de protección

app.all('*', (req, res)=>{
    res.status(404).send({code: 404, message: 'Ruta no habilitada'});
})


app.listen(3000, ()=> console.log('Escuchando en http://localhost:3000'));

