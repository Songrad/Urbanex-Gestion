<script lang="ts">
import CarReservation from './CarReservation.vue'
import CarInformation from './CarInformation.vue'
import Panel from 'primevue/panel';

    export default {
        components: {
            CarInformation,
            CarReservation,
            Panel
        },
        emits: ['newReservationCreated'],
        data() {
            return {
                cars: [],
                carInfoSelected: null
            }

        },

        computed: {
            isCarInfoSelected() {
                return this.carInfoSelected != null
            }
        },

        methods: {
            fetchData() {
              this.cars = [
                {
                    id: 0,
                    carName: "Voiture 1",
                    status: "En charge",
                    loadPercentage: 78,
                    consomptionPer100Km: 15
                },
                {
                    id: 1,
                    carName: "Voiture 2",
                    status: "Abstente",
                    loadPercentage: -1,
                    consomptionPer100Km: 15
                },
                {
                    id: 2,
                    carName: "Voiture 3",
                    status: "En charge",
                    loadPercentage: 48,
                    consomptionPer100Km: 15
                }
              ]
            },
            toggleReservationForm(carInfo) {
                if(this.carInfoSelected == null || this.carInfoSelected != carInfo) {
                    this.carInfoSelected = carInfo
                } else {
                    this.carInfoSelected = null
                }
            },

        },

        mounted() {
           this.fetchData()
        },


    }

</script>

<style lang="scss" scoped>

    li {
        list-style-type: none;
        margin-bottom: 2%;
    }

    * {
        margin: 2%;
    }

    
</style>


<template>
<h2>Les voitures</h2>
<Panel header="Les voitures" :toggleable="true" :collapsed="true">
    <li v-for="carInformation in this.cars">
        <CarInformation :carInfo="carInformation" @askingForReservation="(carInfo) => toggleReservationForm(carInfo)"></CarInformation>
    </li>

    <CarReservation v-if="isCarInfoSelected" :carInfo="carInfoSelected" @newReservationCreated="(reservationInfo) => {
    this.$emit('newReservationCreated',reservationInfo)
    
    }"></CarReservation>
</Panel>


</template>