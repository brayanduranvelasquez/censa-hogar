const express = require('express');
const router = express.Router();

var registro = [
    {
        nombre: "Pedro",
        apellido: 'Rojas',
        telefono: '04249883455',
        casa: '24',
        trabajo: 'Trabajador Social',
        cedula: 19234212,
        cantidadFamilia: 4,
    },
    {
        nombre: "Rosa",
        apellido: 'Jimenez',
        telefono: '04241298465',
        casa: '92',
        trabajo: 'Profesora de Castellano',
        cedula: 15923482,
        cantidadFamilia: 5,
    },
    {
        nombre: "Cecilia",
        apellido: 'Garcia',
        telefono: '04164924545',
        casa: '12',
        trabajo: 'Docente de Aula',
        cedula: 9298555,
        cantidadFamilia: 5,
    },
    {
        nombre: "Rafael",
        apellido: 'Cabrera',
        telefono: '04249489234',
        casa: '54',
        trabajo: 'Estudiante',
        cedula: 291923423,
        CantidadFamilia: 1,
    },
    {
        nombre: "Miguel",
        apellido: 'Perez',
        telefono: "Sin Telefono",
        casa: 'Sin Número',
        trabajo: 'Desempleado',
        cedula: 22772324,
        cantidadFamilia: 2,
    },
    {
        nombre: "Laura",
        apellido: 'Martinez',
        telefono: 02127676234,
        casa: '46',
        trabajo: 'Regidora Municipal',
        cedula: 21234435,
        cantidadFamilia: 5,
    },
    {
        nombre: "Juan",
        apellido: 'Romero',
        telefono: '04124712422',
        casa: '56',
        trabajo: 'Trabajador Social',
        cedula: 10234423,
        cantidadFamilia: 3,
    },
    {
        nombre: "Sarai",
        apellido: 'Duran',
        telefono: 'Sin Numero',
        casa: '93',
        trabajo: 'Estudiante',
        cedula: 25334536,
        cantidadFamilia: 1,
    },
    {
        nombre: "Eduardo",
        apellido: 'Perez',
        telefono: '04249062444',
        casa: '12',
        trabajo: 'Jubilado',
        cedula: 6758865,
        cantidadFamilia: 6,
    }
];

var jefes = [
    {
        nombre: "Federico",
        apellido: 'Martinez',
        telefono: '04242398458',
        casa: '24',
        trabajo: 'Trabajador Social',
        cedula: 12323452,
        verificado: 'Verificado'
    },
    {
        nombre: "Maria",
        apellido: 'Veliz',
        telefono: '04160902323',
        casa: '23',
        trabajo: 'Maestra',
        cedula: 12323452,
        verificado: 'Verificado'
    },
    {
        nombre: "Jose",
        apellido: 'Fernandez',
        telefono: '04124561232',
        casa: '101',
        trabajo: 'Agricultor',
        cedula: 12323452,
        verificado: 'No verificado'
    }
]; // Lideres

    router.get('/', (req, res) => {
        res.render('index');
    })

    router.get('/inicio', (req, res) => {
        res.render('inicio/index');
    })

    router.get('/perfil', (req, res) => {
        res.render('perfil/index');
    })

    router.get('/registro', (req, res) => {
        res.render('registro/index', { registro: registro });
    })

    router.get('/registrar', (req, res) => {
        res.render('registrar/index');
    })

    router.post('/exitoso', (req, res) => {
        res.render('registrar/exitoso');
    })

    router.get('/comunidad', (req, res) => {
        res.render('comunidad/index', { jefes: jefes });
    })

    router.get('/informacion', (req, res) => {
        res.render('informacion/index');
    })

module.exports = router;