<script lang="ts">
    import Modal from './Modal.vue'
    import Statut from './StatutLinge.vue'
    import Button from 'primevue/button'
    import Calendar from 'primevue/calendar'
    import InputNumber from 'primevue/inputnumber'
    import RadioButton from 'primevue/radiobutton'
    import Card from 'primevue/card'
    import ProgressSpinner from 'primevue/progressspinner'


    export default {
        components: {
            Modal,
            Statut,
            Button,
            Calendar,
            InputNumber,
            RadioButton,
            Card,
            ProgressSpinner
        },
        data() {
            return {
                showStatut: false,
                lingeEnvoyer: false,
                recup: false,
                waiting: false,
                isReady: false,
                inprocess: false,
                date_depot: null,
                heure_depot: null,
                quantite: 0,
                temperature: '60',
                couleur: 'Blanc'
            }
        },
        methods:
        {
            validePanier() {
                this.lingeEnvoyer = true
                this.waiting = true
            },
            getValid() {
                return this.date_depot == null || this.quantite == 0 || this.heure_depot == null
            },
            changeStatus() {
                if(this.recup) {
                    this.recup = false
                    this.lingeEnvoyer = false
                    this.date_depot = null
                    this.heure_depot = null
                    this.quantite = 0
                    this.temperature = '60'
                    this.couleur = 'Blanc'
                }
                if(this.inprocess) {
                    this.inprocess = false
                    this.recup = true
                }
                if(this.waiting) {
                    this.waiting = false
                    this.inprocess = true
                }
            }
        }
    }
</script>

<template>
    <div v-if="!lingeEnvoyer">
        <Card>
            <template #title>Depot de linge</template> 
            <template #content>
                <div class="p-fluid grid formgrid">
                    <div class="field md:col-4">
                        <label for="date_depot">Date de depot</label>
                        <Calendar inputId="date_depot" v-model="date_depot" dateFormat="dd/mm/yy" :showIcon="true"/>
                    </div>
                    <div class="field md:col-4">
                        <label for="heure_depot">Heure de depot</label>
                        <Calendar inputId="heure_depot" v-model="heure_depot" :timeOnly="true" :showIcon="true" />
                    </div>
                    <div class="field md:col-4">
                        <label for="quantite">Quantité</label>
                        <InputNumber inputId="quantite" v-model="quantite" mode="decimal" showButtons :min="0" :max="100" />
                    </div>
                    <div class="field md:col-4">
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
                    <div class="field md:col-4"></div>
                    <div class="field md:col-4">
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
                </div>
            </template>
            <template #footer><Button label="Valider" @click="validePanier()" class="p-button-success" :disabled="getValid()"/></template>
        </Card>
    </div>
    <div  v-if="lingeEnvoyer">
        <Card>
            <template #title>
                <Button icon="pi pi-history" class="p-button-rounded p-button-text" @click="changeStatus()" />Etat de la demande
            </template>
            <template #content>
                <div class="card">
                    <div class="flex">
                        <div class="flex-1 text-center p-4 border-round">
                            Date De Dépôt : {{ this.date_depot.toLocaleDateString() }} {{ this.heure_depot.toLocaleTimeString() }} 
                        </div>
                        <div class="flex-1 text-center p-4 border-round mx-4">
                            Quantité : {{ this.date_depot.toLocaleDateString() }}
                        </div>
                        <div class="flex-1 text-center p-4 border-round">
                            Couleur : {{ this.couleur }}<br/>
                            Temperature : {{ this.temperature }} °C
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex-1 text-center p-4 border-round"></div>
                    <div class="flex-1 text-center p-4 border-round"  v-if="recup" style="color: green;">Pret a étre Récupéré<i class="pi pi-check" style="font-size: 2rem; color: green;"></i></div>
                    <div class="flex-1 text-center p-4 border-round"  v-if="inprocess" style="color: orangered;">En Cours de lavage</div>
                    <div class="flex-1 text-center p-4 border-round"  v-if="waiting" style="color: orangered;">En Attente</div>
                    <div class="flex-1 text-center p-4 border-round"></div>
                </div>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Récupéré" v-if="recup" @click="changeStatus()"/>
            </template>
        </Card>
    </div>
</template>