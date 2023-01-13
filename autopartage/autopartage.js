"use strict";

class CarInfo {

    constructor(displayName,status,load_percentage) {
        this.displayName = displayName
        this.status = status
        this.load_percentage = load_percentage
        this.consomptionPer100Km = 15
    }

}

class Reservation {
    constructor(carName,date,startTime,endTime,distance) {
        this.carName = carName
        this.date = date
        this.startTime = startTime
        this.endTime = endTime
        this.distance = distance
    }
}

function add_car_info_link(carInfoBlock,carInfo) {

    let card_info = document.createElement("div")
    card_info.classList.add("card")
    card_info.classList.add("m-3")
    card_info.classList.add("bg-light")

    let card_info_body = document.createElement("div")
    card_info_body.classList.add("card-body")

    let card_info_title = document.createElement("h5")
    card_info_title.classList.add("card-title")
    card_info_title.appendChild(document.createTextNode(carInfo.displayName))

    card_info_body.appendChild(card_info_title)


    let card_info_text = document.createElement("div")
    card_info_text.classList.add("card-text")
    card_info_text.classList.add("container")

    let status = document.createElement("span")
    status.appendChild(document.createTextNode(carInfo.status))
    status.classList.add("col")

    card_info_text.appendChild(status)


    if(carInfo.load_percentage != -1) {
        let load_percentage = document.createElement("span")
        load_percentage.appendChild(document.createTextNode(carInfo.load_percentage+"%"))
        if(carInfo.load_percentage == 100) {
            load_percentage.classList.add("text-success")
        } else {
            load_percentage.classList.add("text-warning")
        }

        load_percentage.classList.add("col")

        card_info_text.appendChild(load_percentage)

    }else {
        let empty_percentage = document.createElement("span")
        empty_percentage.appendChild(document.createTextNode("-%"))
        empty_percentage.classList.add("text-warning")
        empty_percentage.classList.add("col")
        card_info_text.appendChild(empty_percentage)
    }

    let consomption = document.createElement("p")
    consomption.appendChild(document.createTextNode("Consommation: "+carInfo.consomptionPer100Km+"kWh/100km"))
    consomption.classList.add("col")

    card_info_text.appendChild(consomption)


    let reservation_button = document.createElement("button")
    reservation_button.appendChild(document.createTextNode("Réserver"))
    reservation_button.classList.add("btn")
    reservation_button.classList.add("btn-primary")
    reservation_button.classList.add("col-md")
    reservation_button.setAttribute("type","button")

    if(carInfo.status == "Abstente") {
        reservation_button.setAttribute("disabled","true")
    }

    reservation_button.addEventListener("click",() => {
        display_reservation_block(carInfo.displayName)
    })

    card_info_text.appendChild(reservation_button)

    card_info_body.appendChild(card_info_text)

    card_info.appendChild(card_info_body)
    carInfoBlock.appendChild(card_info)

}

function add_cars(carsInfo) {

    let carInfoBlock = document.getElementById("carsInfo");

    carsInfo.forEach(carInfo => {
        add_car_info_link(carInfoBlock,carInfo)
    });

}

function generate_carsInfo() {

    return [new CarInfo("Voiture 1","En charge",78),new CarInfo("Voiture 2","Abstente",-1),new CarInfo("Voiture 3","Chargé",100)];

}

function add_error_display(inputElement) {
    inputElement.classList.add("border")
    inputElement.classList.add("border-danger")

    inputElement.addEventListener("click",() => {
        inputElement.classList.remove("border")
        inputElement.classList.remove("border-danger")

    })
}

function validate_reservation_form() {

    let reservation_form = document.getElementById("form_reservation")
    let isReservationComplete = true

    let carName = (document.getElementById("nameCar")).value
    if(carName == "") {
        add_error_display(document.getElementById("nameCar"))
        isReservationComplete = false
    }

    let dateReservation = (document.getElementById("dateReservation")).value

    if(dateReservation == "") {
        add_error_display(document.getElementById("dateReservation"))
        isReservationComplete = false
    }

    let startTimeReservation = (document.getElementById("startTimeReservation")).value

    if(startTimeReservation == "") {
        add_error_display(document.getElementById("startTimeReservation"))
        isReservationComplete = false
    }

    let endTimeReservation = (document.getElementById("endTimeReservation")).value
    if(endTimeReservation == "") {
        add_error_display(document.getElementById("endTimeReservation"))
        isReservationComplete = false
    }

    if(dateReservation != "" && startTimeReservation != "" && endTimeReservation != "") {
        let dateStart = new Date(dateReservation)
        dateStart.setHours(parseInt(startTimeReservation))
        dateStart.setMinutes(parseInt(startTimeReservation.substring(startTimeReservation.indexOf(":")+1)))
        let dateEnd = new Date(dateReservation)
        dateEnd.setHours(parseInt(endTimeReservation))
        dateEnd.setMinutes(parseInt(endTimeReservation.substring(endTimeReservation.indexOf(":")+1)))

        if((dateEnd.getTime() - dateStart.getTime()) <= 0) {

            add_error_display(document.getElementById("startTimeReservation"))
            add_error_display(document.getElementById("endTimeReservation"))
            isReservationComplete = false
        }
    }

    let distanceInKM = (document.getElementById("distanceInKm")).value

    if(distanceInKM == "" || distanceInKM <= 0) {
        add_error_display(document.getElementById("distanceInKm"))
        isReservationComplete = false
    }



  

    if(!isReservationComplete) {
        return;
    }

    reservation_form.classList.add("hide_form_reservation")
    reservation_form.classList.remove("display_form_reservation")

    let current_reservation = new Reservation(carName,new Date(dateReservation),startTimeReservation,endTimeReservation,parseInt(distanceInKM))


    add_reservation(current_reservation)

}

function add_reservation(reservationToAdd) {

    const formatter = new Intl.DateTimeFormat('fr', { month: 'long' });
    let displayString = (reservationToAdd.date).getUTCDate() + " " + formatter.format(reservationToAdd.date) + " " + reservationToAdd.startTime + " -> " + reservationToAdd.endTime

    displayString = displayString + " " + reservationToAdd.carName

    let totalConsomption = reservationToAdd.distance * (15/100) //15 kWh/100km, should change with the car
    displayString = displayString + " Consommation de votre trajet: "+ totalConsomption + " kWh"

    let my_reservation_block = document.getElementById("reservationItems")

    let reservationItem = document.createElement("li")

    let dateDisplay = document.createElement("span")
    dateDisplay.appendChild(document.createTextNode(displayString))

    let cancelReservation = document.createElement("button")

    cancelReservation.appendChild(document.createTextNode("Annuler"))
    cancelReservation.classList.add("btn")
    cancelReservation.classList.add("btn-primary")
    cancelReservation.setAttribute("type","button")
    cancelReservation.classList.add("ml-2")
    cancelReservation.classList.add("mb-2")


    cancelReservation.addEventListener("click",() => {
        reservationItem.remove()
    })

    reservationItem.appendChild(dateDisplay)

    reservationItem.appendChild(cancelReservation)

    my_reservation_block.appendChild(reservationItem)




}

function display_reservation_block(carName) {
    let reservation_form = document.getElementById("form_reservation")
    reservation_form.classList.remove("hide_form_reservation")
    reservation_form.classList.add("display_form_reservation")
    let nameCarInput = document.getElementById("nameCar")
    nameCarInput.setAttribute("value",carName)
}


add_cars(generate_carsInfo())

let validate_reservation = document.getElementById("reservationValidation")
validate_reservation.addEventListener("click",validate_reservation_form)