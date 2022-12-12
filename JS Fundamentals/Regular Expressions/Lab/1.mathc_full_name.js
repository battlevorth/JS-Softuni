function matchNames(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let namesMatched = names.match(pattern);
    console.log(namesMatched.join(' '));
}
matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
