<template>
  <ion-grid>
    <ion-row>
      <ion-col col-2>
        <ion-card>
          <ion-item>
            <ion-icon :icon="pin" slot="start"></ion-icon>
            <ion-label>ion-item in a card, icon left, button right</ion-label>
            <ion-button fill="outline" slot="end">View</ion-button>
          </ion-item>

          <ion-card-content>
            This is content, without any paragraph or header tags, within an
            ion-card-content element.
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col col-1>
        <ion-card>
          <ion-item>
            <ion-icon :icon="pin" slot="start"></ion-icon>
            <ion-label>ion-item in a card, icon left, button right</ion-label>
            <ion-button fill="outline" slot="end">View</ion-button>
          </ion-item>

          <ion-card-content>
            This is content, without any paragraph or header tags, within an
            ion-card-content element.
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col size-1>
        <ion-card>
          <ion-item>
            <ion-icon :icon="pin" slot="start"></ion-icon>
            <ion-label>ion-item in a card, icon left, button right</ion-label>
            <ion-button fill="outline" slot="end">View</ion-button>
          </ion-item>

          <ion-card-content>
            This is content, without any paragraph or header tags, within an
            ion-card-content element.
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col col-1>
        <ion-card>
          <ion-item>
            <ion-icon :icon="pin" slot="start"></ion-icon>
            <ion-label>ion-item in a card, icon left, button right</ion-label>
            <ion-button fill="outline" slot="end">View</ion-button>
          </ion-item>

          <ion-card-content>
            This is content, without any paragraph or header tags, within an
            ion-card-content element.
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
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
