<script lang="ts">
import ReservationInformation from "./ReservationInformation.vue"

export default {
    props: ['reservationInfo'],

    components: {
        ReservationInformation
    },

    data() {
        return {
            reservationsInformation : []
        }
    },

    watch: {
        reservationInfo(newReservationInfo,oldReservationInfo) {
            this.reservationsInformation.push(this.reservationInfo)
        }
    }

}
</script>

<template>
    <h3>Mes réservations</h3>
    <ul>
        <li v-for="reservationInfo in this.reservationsInformation">
            <ReservationInformation :reservationInformation="reservationInfo"></ReservationInformation>
        </li>
    </ul>
</template>