<template>

<div class="card">
    <div class="card-container yellow-container">
        <div class="block mb-3">
          <div class="flex align-items-center justify-content-center">
              <div class="flex-1 h-4rem p-4 border-round mx-4">
                <span class="p-float-label">
                  <Calendar inputId="monthpicker" @update:modelValue="getDataByDate" v-model="dateMonth" view="month" dateFormat="mm/yy" :showIcon="true" />
                  <label for="monthpicker">Mois</label>
                </span>
              </div>
          </div>
        </div>
        <div class="block font-bold p-4 border-round mb-3">
          <div class="grid"  v-if="asData">
            <div class="col">
              <h1>Conso moyen Energetique</h1>
              <Chart type="doughnut" :data="energeticChartData"/>
            </div>
            <div class="col">
              <h1>Nombre d'empreint</h1>
              <Chart type="doughnut" :data="itemChartData"/>
            </div>
            <div class="col">
              <h1>Conso moyen thérmique</h1>
              <Chart type="doughnut" :data="thermicChartData"/>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Chart from 'primevue/chart'
import Calendar from 'primevue/calendar'

  export default {
    components: {
      Chart,
      Calendar
    },
    methods : {
      getDataByDate: function(){
        let dateFormat = this.dateMonth.getMonth() + '/' + this.dateMonth.getFullYear()
        console.log(dateFormat)
        if(this.dateMonth <  new Date()) {
          this.asData = true
          this.energeticChartData.datasets = [
            {
                data: this.data[dateFormat]['energetic'],
                backgroundColor: ["#FF6384","#36A2EB","#FFCE56","#00CE56"]
            }
          ]
          this.itemChartData.datasets = [
            {
                data: this.data[dateFormat]['item'],
                backgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
            }
          ]
          this.thermicChartData.datasets = [
            {
                data: this.data[dateFormat]['thermic'],
                backgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
            }
          ]
        }
        else {
          this.asData = false
        }
      }
    },
    data() {
      return {
        dateMonth: null,
        data: null,
        asData: true,
        energeticChartData: {
            labels: ['Appartements','Espace commun','Couloir', 'Voiture'],
            datasets: []
        },
        itemChartData: {
            labels: ['Voiture','Outils','Couloir'],
            datasets: []
        },
        thermicChartData: {
            labels: ['Appartements','Espace Co Working','Laverie'],
            datasets: []
        },
        options: {
          responsive: true,
	        hoverMode: 'index',
        }
      }
    },
    created() {
      this.data = {}
      this.dateMonth = new Date();

      for (let i = 2020; i < 2023; i++) {
        for (let j = 0; j < 12; j++) {
          this.data[j+'/'+i] = {
            energetic: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
            thermic: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
            item: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
          }
        }
      }
      this.data['0/2023'] = {
        'energetic': [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
        'thermic': [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
        'item': [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
      }
      this.getDataByDate()
    }
  }
</script>

<style>
</style>
  