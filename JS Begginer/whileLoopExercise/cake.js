function cake(input) {
    let widht = Number(input[0]);
    let lenght = Number(input[1]);
    let cakePieces = widht * lenght
    let index = 2;
    let piecesTaken = 0;
    let currentPiece = input[index];

    while (piecesTaken <= cakePieces && currentPiece !== `STOP`) {
        currentPiece = Number(input[index]);
        index++;
        piecesTaken += currentPiece;
        if (piecesTaken > cakePieces) {
            console.log(`No more cake left! You need ${piecesTaken - cakePieces} pieces more.`);
            break;
        }
        currentPiece = input[index];
    }

    if (piecesTaken <= cakePieces) {
        console.log(`${cakePieces - piecesTaken} pieces are left.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])