<template>
  <ion-page main class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>Cardápio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      
      
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "cardapio",
  data() {
    return {
      user: { custom: "" }
    };
  }
}
</script>
<style scoped>
ion-input#theOne :invalid {
  background-color:  red !important;
  }

</style>
