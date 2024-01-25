// Литеральные типы

type actionType = 'up' | 'down'; // данный литерал может принимать только 2 строковых значения.

function someAction(move: actionType): -1 | 1 {
    switch (move) {
        case 'up':
            return 1;
        case 'down':
            return -1;
    }
}

