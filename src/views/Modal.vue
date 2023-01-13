<script lang="ts">
    import Calendar from 'primevue/calendar'
    import InputNumber from 'primevue/inputnumber'
    import RadioButton from 'primevue/radiobutton'
    import Button from 'primevue/button'

    export default {
        props: {
            show: Boolean
        },
        components: {
            Calendar,
            InputNumber,
            RadioButton,
            Button,
        },
        data() {
            return {
                date_depot: '',
                heure_depot: '',
                quantite: 0,
                temperature: '60',
                couleur: 'Blanc'
            }
        },
        methods:
        {
            getData() {
                return {
                   couleur: this.couleur,
                   temperature: this.temperature,
                   quantite: this.quantite,
                   date_depot: this.date_depot,
                   heure_depot: this.heure_depot
                }
            }
        }
    }
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header"></slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        <div class="field">
                            <label for="date_depot">Date de depot</label>
                            <Calendar inputId="date_depot" v-model="date_depot" dateFormat="dd/mm/yy" :showIcon="true" />
                        </div>
                        <div class="field">
                            <label for="heure_depot">Heure de depot</label>
                            <Calendar inputId="heure_depot" v-model="heure_depot" :timeOnly="true" :showIcon="true" />
                        </div>

                        <div class="field">
                            <label for="quantite">Quantité</label>
                            <InputNumber inputId="quantite" v-model="quantite" mode="decimal" showButtons :min="0" :max="100" />
                        </div>

                        <div class="field">
                            <label for="couleur">Couleur</label>
                            <div class="field-radiobutton">
                                <RadioButton inputId="couleur1" name="couleur" value="Blanc" v-model="couleur" />
                                <label for="couleur1">Blanc</label>
                            </div>
                            <div class="field-radiobutton">
                                <RadioButton inputId="couleur2" name="couleur" value="Couleur" v-model="couleur" />
                                <label for="couleur2">Couleur</label>
                            </div>
                            <div class="field-radiobutton">
                                <RadioButton inputId="couleur3" name="couleur" value="Mixte" v-model="couleur" />
                                <label for="couleur3">Mixte</label>
                            </div>
                        </div>

                        <div class="field">
                            <label for="quantite">Temperature</label>
                            <div class="field-radiobutton">
                                <RadioButton inputId="temp1" name="temp" value="60" v-model="temperature" />
                                <label for="temp1">60 °C</label>
                            </div>
                            <div class="field-radiobutton">
                                <RadioButton inputId="temp2" name="temp" value="40" v-model="temperature" />
                                <label for="temp2">40 °C</label>
                            </div>
                            <div class="field-radiobutton">
                                <RadioButton inputId="temp3" name="temp" value="30" v-model="temperature" />
                                <label for="temp3">30 °C</label>
                            </div>
                        </div>
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <Button label="Valider" icon="pi pi-check" @click="$emit('valide', getData())" class="p-button-success" />
                        <Button label="Annuler" icon="pi pi-times" @click="$emit('annule')" class="p-button-danger" />
                    </slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
       .modal-mask {
           position: fixed;
           z-index: 9998;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           background-color: rgba(0, 0, 0, 0.5);
           display: flex;
           transition: opacity 0.3s ease;
       }

       .modal-container {
           width: 400px;
           margin: auto;
           padding: 20px 30px;
           background-color: #fff;
           border-radius: 2px;
           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
           transition: all 0.3s ease;
       }

       .modal-header h3 {
           margin-top: 0;
           color: #42b983;
       }

       .modal-body {
           margin: 20px 0;
       }

       .modal-enter-from {
           opacity: 0;
       }

       .modal-leave-to {
           opacity: 0;
       }

        .modal-enter-from .modal-container, .modal-leave-to .modal-container {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
</style>