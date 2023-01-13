
<template>
    <div>
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="@/assets/logo.svg" height="40" class="mr-2" style="margin: 0 10px;">
            </template>
            <template #item="{item}">
                <div class="menu-item">
                    <i :class="[item.icon]" style="font-size: 20px;"></i>
                    <RouterLink :to="{path: item.to}">{{item.label}}</RouterLink>
                </div>
            </template>
        </Menubar>
    </div>
    <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: {
        RouterLink,
        RouterView
    },
    data() {
        return {
            items: [
                {
                    label:'Dashboard',
                    icon:'pi pi-fw pi-file',
                    to:'/'
                },
                {
                    label:'Auto partage',
                    icon:'pi pi-fw pi-car',
                    to:'/autopartage'
                },
                {
                    label:'Laverie',
                    icon:'pi pi-fw pi-stop-circle',
                    to:'/laverie'
                },
                {
                    label:'Empreint d\'object',
                    icon:'pi pi-fw pi-tablet',
                    to:'/emprunt'
                }
            ]
        }
    }
}
</script>

<style scoped>
.menu-item a.router-link-exact-active {
  color: var(--color-text);
}
.menu-item a.router-link-exact-active:hover {
  background-color: transparent;
}

.menu-item a {
  display: inline-block;
  padding: 1rem;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  color: grey;
}

.menu-item a:first-of-type {
  border: 0;
}

.menu-item {
    margin: 10px;
}

</style>
