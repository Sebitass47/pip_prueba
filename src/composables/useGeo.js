// composables/useGeo.js
import { ref } from 'vue';

const geoData = ref(null);

export function useGeo() {
  async function loadGeoData() {
    // Si ya está en localStorage, úsalo
    const stored = localStorage.getItem('geoData');
    if (stored) {
      geoData.value = JSON.parse(stored);
      return;
    }

    // Si no, pide la info
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      geoData.value = data.country_name;
      localStorage.setItem('geoData', JSON.stringify(data));
    } catch (err) {
      console.error('Error fetching geo info:', err);
    }
  }
  return {
    geoData,
    loadGeoData
  };
}
