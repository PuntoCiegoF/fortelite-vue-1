<template>
  <!-- Reutilizamos tu plantilla de segmentos -->
  <SegmentTemplate :segment="segment" />
</template>

<script setup>
import SegmentTemplate from '@/components/segments/SegmentTemplate.vue'
import FINISHES_ONLY from '@/constants/segments/finishes-only'

const segment = FINISHES_ONLY
</script>
