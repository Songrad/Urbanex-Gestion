<template>
  <DataTable :value="objectsEmprunt" v-model:filters="filters" dataKey="id" :paginator="true" :rows="10" responsiveLayout="scroll" >
      <template #header>
        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
          <h5 class="m-0">Liste d'objet</h5>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" placeholder="Recherche"/>
          </span>
        </div>
      </template>
      <template #empty> Aucun objet disponible. </template>
      <template #loading> Chargement des objets... </template>
      <Column field="name" header="Name" :sortable="true"></Column>
      <Column field="statut" header="status" :sortable="true">
        <template #body="slotProps">
          <div :class="stockClass(slotProps.data)">{{slotProps.data.statut}}</div>
        </template>
      </Column>
  </DataTable>
</template>

<script lang="ts">
import { FilterMatchMode, FilterOperator } from "primevue/api";
import ObjectService from "../service/ObjectService";
import { ObjectStatut } from "../../types/Object";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Row from "primevue/row";

export default {
  data() {
    return {
      objectsEmprunt: [],
      selectedObjectEmprunt: null,
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
      },
      loading: true,
      statuses: [ObjectStatut.DISPONIBLE, ObjectStatut.UTILISE],
    };
  },
  objectService: null,
  created() {
    this.objectService = new ObjectService();
  },
  mounted() {
    this.objectService.getObjects().then((data) => {
      this.objectsEmprunt = data;
      this.loading = false;
    });
  },
  components: {
    DataTable,
    Column,
    Dropdown,
    Button,
    InputText,
    Row,
  },
  methods: {
    stockClass(data) {
        return [
            {
              'instock': data.statut == ObjectStatut.DISPONIBLE,
              'outofstock': data.statut == ObjectStatut.UTILISE
            }
        ];
    }
  }
};
</script>

<style lang="scss" scoped>
.outofstock {
    font-weight: 700;
    color: #FF5252;
    text-decoration: line-through;
}

.instock {
    font-weight: 700;
    color: #66BB6A;
}
</style>
