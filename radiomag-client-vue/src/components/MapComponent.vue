<template>
  <div class="map" :id="id"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { type Map, type LatLngLiteral, map, marker, tileLayer } from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultViewUkraine: LatLngLiteral = {
  lat: 48.524,
  lng: 31.179,
};
const defaultZoom = 6;
const maxUseZoom = 18;

const props = defineProps<{
  id: string;
  zoom: number;
  view: LatLngLiteral;
  markers: LatLngLiteral[];
}>();

const shopMap = ref<Map>();

onMounted(() => {
  shopMap.value = map(props.id).setView(
    props.view ?? defaultViewUkraine,
    props.zoom ?? defaultZoom
  );

  tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(shopMap.value);

  props.markers.forEach(
    (element) =>
      shopMap.value &&
      marker(element)
        .addTo(shopMap.value)
        .on("click", (event) =>
          shopMap.value?.setView(event.latlng, maxUseZoom)
        )
  );
});
</script>

<style lang="scss">
.map {
  width: 825px;
  height: 585px;

  @media (max-width: $breakpoint-tablet) {
    max-width: 100%;
    max-height: 336px;
  }
}
</style>
