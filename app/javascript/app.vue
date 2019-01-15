<template>
  <div id="venue">
    <h2 id="top10"> TOP 10 picks for you: </h2>
    <button class="btn btn-warning btn-lg button-white" v-if="!loading" v-on:click="getLocation()"> Refresh</button>
    <venue-item
      v-for="item in foursquare"
      v-bind:venue="item.venue"
      v-bind:key="item.id"
    ></venue-item>
    <h2 class="home-title-animated text-center" v-if="loading"> Loading...</h2>
    <p class="home-title-animated text-center" v-if="locationDisabled"> <strong> Please enable your location </strong></p>
    <div v-if="locationDisabled" id="location" class="bottom-container">
       <h2> <i class="fas fa-map-marked"></i> My Coordinates  </h2>
    </div>
    <div v-else id="location" class="bottom-container">
      <h2> <i class="fas fa-map-marked"></i>  My Coordinates </h2>
      <ul>
        <li> latitude: {{location.lat}} </li>
        <li> longitude: {{location.long}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import VenueItem from 'venue-item'

export default {
  data: function () {
    return {
      loading: true,
      foursquare: [],
      location: {},
      locationDisabled: false
    }
  },
  created: function () {
    this.getLocation();
  },

  components: {
    VenueItem
  },

  methods: {
    getLocation: function() {
      const error = () => {
        this.locationDisabled = true;
        this.location = {};
        this.loading = false;
      }

      if (!navigator.geolocation) {
        error();
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.locationDisabled = false;
          this.location.lat =position.coords.latitude;
          this.location.long = position.coords.longitude

          this.fetchData()
        },
        error
      );
    },

    fetchData: function () {
      fetch(`/venues?lat=${this.location.lat}&long=${this.location.long}`)
      .then(function(response) { return response.json(); })
      .then((data) => {
        let array = data.response.groups[0].items.sort(() => .5 - Math.random());
        // let random = Math(random)
        this.foursquare = array.slice(0,10)
        this.loading = false;
      })
    }
  }
}
</script>
