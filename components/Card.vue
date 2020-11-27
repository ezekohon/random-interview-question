<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <div class="content has-text-centered">
         <p class="card-header-title has-text-black">
          {{ question }}
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true
    }
  }
}
</script>
