<script lang="ts">
export default {

    props: ["reservationInformation"],
    data() {
        return {
            reservedCarName: this.reservationInformation.reservedCarName,
            date: this.reservationInformation.date,
            startTime: this.reservationInformation.startTime,
            endTime: this.reservationInformation.endTime,
            distance: this.reservationInformation.distance,
            consomptionInKWHPerKm: this.reservationInformation.consomptionInKWHPerKm
        }
    }
}
</script>

<template>
<div>
    <h3 class="mb-2">{{  reservedCarName }}</h3>
    <span>Date de la réservation: {{ this.date.toLocaleDateString() }} {{ this.startTime.toLocaleTimeString() }} <i class="pi pi-arrow-right"></i> {{ this.endTime.toLocaleTimeString() }}</span>
    <p>Consommation du trajet: {{ this.consomptionInKWHPerKm.toFixed(2) }} kWH</p>
</div>
</template>