let words: string[] = [

    'COMPUTADORA',
    'MONTAÑA',
    'ENSALADA',
    'PARAGUAS',
    'RELOJ',
    'GUITARRA',
    'PINTURA',
    'CANCION',
    'BICICLETA',
    'VENTANA',
    'TECLADO',
    'TELEFONO',
    'LIBERTAD',
    'IMAGINACION',
    'CREATIVIDAD',
    'ELEFANTE',
    'ESPEJO',
    'ALFOMBRA',
    'AVENTURA',
    'FELICIDAD'
]

export function getRandomWord(){

    const randomIndex = (Math.floor( Math.random() * words.length ) );
    return words[ randomIndex ]
}