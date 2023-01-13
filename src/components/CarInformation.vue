<script lang="ts">
import Card from 'primevue/card';

    export default {
        props: ['carInfo'],
        emits: ['askingForReservation'],
        components: {
            Card
        },
        data() {
            return {
                notPresent: this.carInfo.status == "Abstente"
            }
        },

        computed: {
            displayLoadChargeColor() {
                return {
                    displayLoadNotFull: this.carInfo.loadPercentage != 100
                }
            },

            isReservationPossible() {
                return this.carInfo.status == "Abstente"
            }
        }


    }
</script>

<style lang="scss" scoped>

    #carCard {
        margin: 2%;
    }
    
    #cardContent {
        display: inline-grid;
        row-gap: 25px;
        width: 20%;
    }

    #statusText {
        grid-column: 1;
        grid-row: 1;
    }
#statusContent {
        grid-column: 2;
        grid-row: 1;
}

#loadPercentage {
        grid-column: 3;
        grid-row: 1;
}

#consomptionPer100Km {
        grid-column: 1;
        grid-row: 2;
}

#consomptionPer100KmContent {
    grid-column: 2;
    grid-row: 2;
}

.displayLoadNotFull {
    color:orange;
}



</style>

<template>
    <Card class="carCard">
        <template #title>
            {{ carInfo.carName }}
        </template>
        <template #content>
            <div id="cardContent">
                <span id="statusText">Statut </span>
                <span id="statusContent">{{  carInfo.status }}
                </span>
                <span id="loadPercentage" v-if="!notPresent" :class="displayLoadChargeColor">{{  carInfo.loadPercentage }}%</span>
                <span id="consomptionPer100Km">Consommation </span>
                <span id="consomptionPer100KmContent">{{ carInfo.consomptionPer100Km }} kWH </span>
            </div>
        </template>
        <template #footer>
            <Button class="p-button-raised" label="Réserver" :disabled="isReservationPossible"  @click="$emit('askingForReservation',carInfo)"/>
        </template>
    </Card>

</template>