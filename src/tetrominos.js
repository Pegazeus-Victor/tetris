export const TETROMINOS = {
    0: { shape: [[0]], color: '0,0,0' },
    I:{
        shape: [
                 [0, 'I', 0, 0],
                 [0, 'I', 0, 0],
                 [0, 'I', 0, 0],
                 [0, 'I', 0, 0]
               ],
               color: '9, 168, 157',
    },

    J:{
        shape: [
                 [0, 'J', 0],
                 [0, 'J', 0],
                 ['J', 'J', 0]  
               ],
        color: '13, 235, 16',
    },

    L:{
        shape: [
                 [0, 'L', 0],
                 [0, 'L', 0],
                 [0, 'L', 'L']
                 
               ],
        color: '4, 68, 5',
    },

    O:{
        shape: [
                 ['O', 'O'],
                 ['O', 'O'],  
               ],
        color: '148, 239, 149',
    },

    S:{
        shape: [
                 [0, 'S', 'S'],
                 ['S', 'S', 0],
                 [0, 0, 0]
                 
               ],
        color: '48, 211, 56',
    },

    T:{
        shape: [
                 [0, 0, 0],
                 ['T', 'T', 'T'],
                 [0, 'T', 0]
                 
               ],
        color: '23, 156, 25',
    },

    Z:{
        shape: [
                 ['Z', 'Z', 0],
                 [0, 'Z', 'Z'],
                 [0, 0, 0]                 
               ],
        color: '52, 224, 54',
    },

}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = 
        tetrominos[Math.floor(Math.random() *tetrominos.length)];
    return TETROMINOS[randTetromino];
}