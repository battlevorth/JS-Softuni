function songRotation(band, album, song) {
    let songDuration = (album.length * band.length) * song.length / 2;
    let rotationMade = songDuration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotationMade)} times.`);
}
songRotation('Black Sabbath', 'Paranoid','War Pigs')