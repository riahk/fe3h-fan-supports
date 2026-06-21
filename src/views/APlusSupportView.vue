<script setup lang="ts">
import doronette from '@/assets/scripts/doronette-Aplus.json'
import sylvbert from '@/assets/scripts/sylvbert-Aplus.json'
import SupportScript from '@/components/SupportScript.vue'
import { store } from '@/stores/store'

let support = null

if (store.selectedSupport === 'doronette') {
  support = doronette
} else if (store.selectedSupport === 'sylvbert') {
  support = sylvbert
}
</script>

<template>
  <div class="support">
    <SupportScript :support="support" />
  </div>
</template>
