<script setup lang="ts">
// import support from '@/assets/scripts/doronette-C.json'
type Portrait = {
  character: string
  type: string
  expression?: string
}

defineProps(['support'])

const constructImageSource = (portrait: Portrait | undefined) => {
  if (!portrait) {
    return ''
  }
  if (portrait.type !== 'npc') {
    return `portraits/${portrait.character}/${portrait.type}/${portrait.expression || 'neutral'}.png`
  } else {
    return `portraits/npc/${portrait.character}.png`
  }
}
</script>

<template>
  <div class="script">
    <div class="dialogue-box" v-for="(item, index) in support.script" :key="index">
      <template v-if="item.character">
        <img
          v-if="item.portrait"
          class="portrait"
          :src="constructImageSource(item.portrait)"
          width="175"
          height="175"
        />
        <p>{{ item.dialogue }}</p>
      </template>
      <template v-else>
        <p class="blocking">{{ item.dialogue }}</p>
      </template>
    </div>
  </div>
</template>

<style>
.script {
  width: 100%;
  max-width: 700px;
  max-height: 100%;
  font-family: 'Georgia', serif;
  font-size: 1.2em;
}

.dialogue-box {
  display: flex;
  gap: 1em;
  align-items: center;
  margin: 1em 0;
}

.blocking {
  width: 100%;
  margin: 2em 0;
  font-size: 2em;
  font-style: italic;
  text-align: center;
}

@media (max-width: 700px) {
  .script {
    font-size: 1.1em;
  }

  img {
    width: 125px;
    height: 125px;
  }
}

@media (max-width: 500px) {
  .script {
    font-size: 0.8em;
  }

  img {
    width: 100px;
    height: 100px;
  }
}
</style>
