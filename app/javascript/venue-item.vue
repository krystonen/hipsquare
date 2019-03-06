<template>

  <div class="card mt-3 p-3">
    <p class="card-header text-right"> {{venue.categories[0].name}}</p>
    <p class="card-title card-venue mt-2"><i class="fas fa-map-marker-alt"></i><b>{{venue.name}}</b></p>
    <p class="card-text"><span class="card-orange"> {{venue.location.distance}} </span> meters from you</p>
    <p class="card-text"> {{venue.location.address}}, {{venue.location.city}}</p>
  </div>
</template>

<script>
  export default {
    props: ['venue']
  }
</script>


