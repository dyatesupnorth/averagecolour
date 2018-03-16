<template>
  <div class="averagecolour container">

    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="row">
            <div class="col">
              <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
    type = "number" maxlength = "6" class="form-control" placeholder="Hex Code 1" v-model="colourOne" >
              <p style="font-weight:bold;" v-bind:style="{ color: '#' + colourOne }">Colour One: {{colourOne}}</p>
            </div>
            <div class="col">
              <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number"
    maxlength = "6" class="form-control" placeholder="Hex Code 2" v-model="colourTwo">
              <p style="font-weight:bold;"  v-bind:style="{ color: '#' + colourTwo }">Colour Two: {{colourTwo}}</p>
            </div>

          </div>
          <div class="row">
            <div class="col">
              <div class="alert alert-light" style="color:white;" v-bind:style="{ 'background-color': '#' + averageColour }" role="alert">
                The average colour is: {{difference}}
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>


  </div>
</template>

<script>
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import averagecolour from './AverageColour.vue';

export default {
  name: 'AverageColour',
  data() {
    return {
      colourOne: "",
      colourTwo:"",
      averageColour: '555444'
    };
  },
  computed: {
    difference() {
      /******************
      A better way, and one more future proof would be to write this function to accept an array, rather than two numbers.
      I've included the code to make this work:
      var array=[000100,495848,393948,330494,339494];
      var total = 0;
      var average = 0;
      // add elements of array together
      for(var i=0;i<array.length;i++){
        total+=array[i];
      }
      // calculate average
      average=(total/array.length);
      // display result
      return average;
      ********************/

      var calculatedMean = Math.abs(this.colourOne-this.colourTwo);
      this.averageColour = calculatedMean;
      return calculatedMean;
    }
  },
  components: {
    averagecolour
  }
};
</script>
