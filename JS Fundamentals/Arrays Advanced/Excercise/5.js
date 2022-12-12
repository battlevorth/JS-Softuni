function sortingByTwoCriteria(array) {
    let twoCriteriaSort = (cur, next) =>
        cur.length - next.length || cur.localeCompare(next);
    array.sort(twoCriteriaSort);
    console.log(array.join('\n'));
}
sortingByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
