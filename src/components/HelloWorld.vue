<template>
  <div>
   <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Confira!</ion-card-subtitle>
      <ion-card-title>Prato do Dia</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      Arroz, Feijão, Purê de Batata, Contra-filé e Salada. 
    </ion-card-content>
  </ion-card>
 
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
