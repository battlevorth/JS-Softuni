function book(pageNumbers, pagesPerHour, daysGiven) {
    let totalTimeNeeded = pageNumbers / pagesPerHour;
    let reqHoursPerDay = totalTimeNeeded / daysGiven;

    console.log(reqHoursPerDay);
}
book(432,15 ,4)