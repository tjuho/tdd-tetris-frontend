export class Tetromino {
    static T_SHAPE = {
        rotations: [[[0, 0, 0], [1, 1, 1], [0, 1, 0]], [[0, 1, 0], [1, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[0, 1, 0], [0, 1, 1], [0, 1, 0]]],
        orientation: 0,
        color: 'T',
        cornerx: 0,
        cornery: -1
    };
    static LR_SHAPE = {
        rotations: [[[0, 0, 0], [1, 1, 1], [1, 0, 0]], [[1, 1, 0], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 0, 1], [1, 1, 1]], [[0, 1, 0], [0, 1, 0], [0, 1, 1]]],
        orientation: 0,
        color: 'K',
        cornerx: 0,
        cornery: -1
    };
    static LL_SHAPE = {
        rotations: [[[0, 0, 0], [1, 1, 1], [0, 0, 1]], [[0, 1, 0], [0, 1, 0], [1, 1, 0]], [[0, 0, 0], [1, 0, 0], [1, 1, 1]], [[0, 1, 1], [0, 1, 0], [0, 1, 0]]],
        orientation: 0,
        color: 'L',
        cornerx: 0,
        cornery: -1
    };
    static SL_SHAPE = {
        rotations: [[[0, 0, 0], [1, 1, 0], [0, 1, 1]], [[0, 0, 1], [0, 1, 1], [0, 1, 0]]],
        orientation: 0,
        color: 'S',
        cornerx: 0,
        cornery: -1
    };
    static SR_SHAPE = {
        rotations: [[[0, 0, 0], [0, 1, 1], [1, 1, 0]], [[1, 0, 0], [1, 1, 0], [0, 1, 0]]],
        orientation: 0,
        color: 'A',
        cornerx: 0,
        cornery: -1
    };
    static I_SHAPE = {
        rotations: [[[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]]],
        orientation: 0,
        color: 'I',
        cornerx: 0,
        cornery: -1
    };
    static O_SHAPE = {
        rotations: [[[1, 1], [1, 1]]],
        orientation: 0,
        color: 'O',
        cornerx: 0,
        cornery: 0
    };
    static X_SHAPE =
        {
            rotations: [[[1]]],
            orientation: 0,
            color: 'X',
            cornerx: 0,
            cornery: 0
        };
    static Y_SHAPE =
        {
            rotations: [[[1]]],
            orientation: 0,
            color: 'Y',
            cornerx: 0,
            cornery: 0
        };
}