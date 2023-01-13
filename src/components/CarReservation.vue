<script lang="ts">
    import InputText from 'primevue/inputtext'
    import Calendar from 'primevue/calendar'
    import InputNumber from 'primevue/inputnumber'
    import Button from 'primevue/button'

    export default {
        components: {
            InputText,
            Calendar,
            InputNumber,
            Button
        },
        props: ['carInfo'],
        emits: ['newReservationCreated'],
        data() {
            return {
                dateReservation: null,
                startTime: null,
                endTime: null,
                distanceInKm: null
            }
        },

        computed: {
            carName() {
                return this.carInfo.carName
            }
        },

        methods: {
            validateReservation() {
                let isReservationComplete = true 
                if(this.dateReservation == null) {
                    console.log('test4')

                    isReservationComplete = false
                }
                if(this.startTime == null) {
                    console.log('test3')

                    isReservationComplete = false
                }
                if(this.endTime == null) {
                    console.log('test2')

                    isReservationComplete = false
                }
                if(this.distanceInKm == null) {
                    console.log('test1')
                    isReservationComplete = false
                }
                if(this.dateReservation != null && this.startTime != null && this.endTime != null) {
                    console.log(this.startTime)
                    let dateStart = new Date(this.dateReservation)
                    dateStart.setHours(this.startTime.getHours())
                    dateStart.setMinutes(this.startTime.getMinutes())
                    let dateEnd = new Date(this.dateReservation)
                    dateEnd.setHours(this.startTime.getHours())
                    dateEnd.setMinutes(this.startTime.getMinutes())
                    if(dateEnd.getTime() < dateStart.getTime()) {
                        isReservationComplete = false
                    }
                }
                if(this.distanceInKm <=0) {
                    console.log('test5')

                    isReservationComplete = false
                }

                if(!isReservationComplete) {
                    return;
                }
                console.log('test')
                this.$emit("newReservationCreated",this.createReservationObject())

            },

            createReservationObject() {
                return {
                    reservedCarName: this.carName,
                    date: this.dateReservation,
                    startTime: this.startTime,
                    endTime: this.endTime,
                    distance: this.distanceInKm,
                    consomptionInKWHPerKm: (this.carInfo.consomptionPer100Km/100)*this.distanceInKm
                }
            }

        }
    }

</script>

<template>
    <form>
        <h3>Réserver une voiture</h3>
        <div class="p-fluid grid formgrid">
            <div class="field col-12 md:col-4">
                <label for="nameCar">Nom de la voiture:</label>
                <InputText id="nameCar" type="text" v-model="carName" disabled/>
            </div>

            <div class="field col-12 md:col-4">
                <label for="dateReservation">Date:</label>
                <Calendar inputId="dateReservation" v-model="dateReservation" dateFormat="dd/mm/yy" :showIcon="true" />
            </div>
            
            <div class="field col-12 md:col-4">
                <label for="distanceInKm">Distance du trajet:</label>
                <InputNumber inputId="distanceInKm" suffix=" Km" v-model="distanceInKm" mode="decimal" showButtons :min="0" :max="100" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="startTimeReservation">Heure de début:</label>
                <Calendar inputId="startTimeReservation" v-model="startTime" :timeOnly="true" :showIcon="true" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="startTimeReservation">Heure de fin:</label>
                <Calendar inputId="startTimeReservation" v-model="endTime" :timeOnly="true" :showIcon="true" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="startTimeReservation">&nbsp;</label>
                <Button label="Valider" icon="pi pi-check" @click="validateReservation" />
            </div>
        </div>
    </form>
</template>