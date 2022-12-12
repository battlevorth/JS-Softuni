function cutAndReverse(string) {
    let halfedStringLenghth = string.length / 2;
    let firstHalf = string.substring(0, halfedStringLenghth);
    let secondHalf = string.substring(halfedStringLenghth);
    
    firstHalf = firstHalf.split('').reverse().join('');
    secondHalf = secondHalf.split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')