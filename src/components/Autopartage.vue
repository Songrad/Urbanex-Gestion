<script>
import CarsPanel from "./CarsPanel.vue"
import ReservationPanel from "./ReservationPanel.vue"

export default {
    components: {
        CarsPanel,
        ReservationPanel
    },
    data() {
        return {
            newReservation: null,
        }
    },
}

</script>

<style lang="scss" scoped>

    * {
        margin: 2%;
    }

    
</style>


<template>
<h1>Autopartage</h1>
<CarsPanel @newReservationCreated="(newReservation) => this.newReservation = newReservation"></CarsPanel>
<ReservationPanel :reservationInfo="this.newReservation"></ReservationPanel>
</template>