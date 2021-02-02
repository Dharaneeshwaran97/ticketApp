class SearchAPI {
    constructor() {

    }

    // To check input values are !null and !empty
    isValidString(inputString) {
        var exist = false;
        if (inputString != null && inputString.trim() != "") {
            exist = true;
        }
        return exist;
    }
    //To check journeyDate is a Date
    isValidDate(inputDate) {
        let exist = false;
        if (Date.parse(inputDate)) {
            exist = true;
        }
        return exist;
    }
    // get the exact day in journeyDate
    getDay(date) {
        return date.toString().substring(0, 3).toUpperCase();
    }
    // check the day train to be run or not
    checkDay(type, journeyDate) {
        let jDay = this.getDay(journeyDate);
        let splitDetails = type.split(",");
        let typeValues = type == "DAILY" || splitDetails.includes(jDay);
        return typeValues;
    }
    searchTrain(source, destination, journeyDate) {
        var trains = [
            { trainNo: 123, from: "Chennai Central", to: "Bangalore", type: "DAILY" },
            { trainNo: 124, from: "Chennai Central", to: "Bangalore", type: "MON,THU" },
            { trainNo: 125, from: "Chennai Central", to: "Erode", type: "WED" }
        ];

        let journeyDateValue = new Date(journeyDate);

        if (this.isValidString(source) && this.isValidString(destination) && this.isValidDate(journeyDate)) {
            var filteredTrain = trains.filter(tr => tr.from.toUpperCase() == source.toUpperCase() && tr.to.toUpperCase() == destination.toUpperCase() && this.checkDay(tr.type, journeyDateValue));
            return filteredTrain;
        } else {
            throw new Error("Please Enter Correct Details");


        }

    }
}

exports.SearchAPI = SearchAPI;