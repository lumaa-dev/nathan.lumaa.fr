<template>
  <div class="pbox">
    <span>
      <p class="title">{{ props.name }}</p>
      <p>{{ props.description }}</p>
    </span>
    <img :src="props.img" draggable="false" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style>
.pbox {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 0.4em 0.5em;
  background: #50505050;
  backdrop-filter: blur(0.7em);
  border: #ffffff15 solid 1px;
  border-radius: 20px;
  font-size: 1.4em;
  width: calc(450px + 1.0em);
}

.pbox .title {
  font-weight: 700;
}

.pbox p:not(.title) {
  font-size: 0.75em;
}

.pbox img {
  width: 450px;
  height: 250px;
  border-radius: calc(20px - 0.4em);
  object-fit: cover;
  margin-top: 0.4em;
}

@media screen and (max-width: 1000px) {
  .pbox {
    width: calc(300px + 1.0em);
  }

  .pbox img {
    width: 300px;
    height: 167px;
  }
}
</style>