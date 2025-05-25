<template>
  <div>
    <label for="score">ປ້ອນຄະເເນນ:</label>
    <input type="number" id="score" v-model="score">
    <p v-if="grade">ຄະເເນນ: {{ grade }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const score = ref(null);
    const grade = computed(() => {
      if (score.value === null) {
        return '';
      } else if (score.value >= 0 && score.value <= 49) {
        return 'F';
      } else if (score.value >= 50 && score.value <= 60) {
        return 'D';
      } else if (score.value >= 61 && score.value <= 65) {
        return 'D+';
      } else if (score.value >= 66 && score.value <= 70) {
        return 'C';
      } else if (score.value >= 71 && score.value <= 80) {
        return 'C+';
      } else if (score.value >= 81 && score.value <= 90) {
        return 'B';
      } else if (score.value >= 91 && score.value <= 100) {
        return 'A';
      } else if (score.value > 100) {
        return 'ບໍ່ສາມາດຕັດເກຮດໄດ້';
      } else {
        return 'ກະລຸນາປ້ອນຄະເເນນທີ່ຖືກຕ້ອງ';
      }
    });

    return {
      score,
      grade
    };
  }
};
</script>