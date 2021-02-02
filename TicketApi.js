
const { SearchAPI } = require("./SearchApi");


class TicketAPI {

    constructor() {

    }



    search(source, destination, journeyDate) {
        // var trains = [
        //     { trainNo: 123, from: "Chennai Central", to: "Bangalore", type: "DAILY", status: "CANCELLED" },
        //     { trainNo: 124, from: "Chennai Central", to: "Bangalore", type: "MON,THU" },
        //     { trainNo: 125, from: "Chennai Central", to: "Bangalore", type: "WED" }
        // ];
        // let filteredTrains = trains;
        //implement logic
        const searchApi = new SearchAPI();
        const filteredTrains = searchApi.searchTrain(source, destination, journeyDate);
        return filteredTrains;
    }
}


exports.TicketAPI = TicketAPI;