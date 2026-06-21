<script setup lang="ts">
import { store } from '@/stores/store'
import router from '@/router'

const supports = [
  {
    tag: 'doronette',
    name: 'Annette & Dorothea',
    leftPortrait: 'annette',
    rightPortrait: 'dorothea',
  },
  {
    tag: 'sylvbert',
    name: 'Sylvain & Hubert',
    leftPortrait: 'sylvain',
    rightPortrait: 'hubert',
  },
]

const selectSupport = (supportTag: string) => {
  /*if (store.selectedSupport === supportTag) {
    return
  }*/

  store.setSelectedSupport(supportTag)
  router.push(`/c-support`)
}
</script>

<template>
  <main>
    <p>Welcome! Please select the Support you'd like to view.</p>
    <div class="supports-list">
      <div
        v-for="support in supports"
        :key="support.tag"
        class="support-item"
        :class="{ selected: support.tag === store.selectedSupport }"
        @click="selectSupport(support.tag)"
      >
        <img
          :src="`portraits/${support.leftPortrait}/war/neutral.png`"
          alt="Left Portrait"
          width="200"
          height="200"
        />
        <h3>{{ support.name }}</h3>
        <img
          :src="`portraits/${support.rightPortrait}/war/neutral.png`"
          alt="Right Portrait"
          width="200"
          height="200"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 700px;
  max-width: 100%;
}

p {
  font-size: 2em;
  text-align: center;
  margin: 2rem 0;
}

.supports-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.support-item {
  display: flex;
  width: 100%;
  padding: 1em 2em;
  border-radius: 1em;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  h3 {
    font-size: 1.5em;
    font-family: 'Georgia', serif;
    text-align: center;
  }

  &:hover {
    background-color: #444;
  }

  &.selected {
    background-color: mediumseagreen;
    /*cursor: default;*/
  }
}

@media (max-width: 650px) {
  p {
    font-size: 1.5em;
  }

  .support-item {
    font-size: 0.8em;
    padding: 1em;

    img {
      width: 150px;
      height: 150px;
    }
  }
}

@media (max-width: 500px) {
  h3 {
    font-size: 1.2em;
  }

  .support-item {
    font-size: 0.8em;
    padding: 1em;

    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
