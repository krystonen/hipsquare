<template>
  <div class="card">
    <p class="card-category"> {{venue.categories[0].name}}</p>
    <p class="card-title"><i class="fas fa-map-marker-alt"></i><b>{{venue.name.substring(0,30)}}</b></p>
    <p class="card-description"><span class="card-orange"> {{venue.location.distance}} </span> meters from you</p>
    <p class="card-address"> {{venue.location.address}}, {{venue.location.city}}</p>
  </div>
</template>

<script>
  export default {
    props: ['venue']
  }
</script>
