<template>
  <label class="radio">
    <input type="radio" :value="label" :name="name" v-model="radioButtonValue">
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: ['name', 'label', 'value'],

  computed: {
    radioButtonValue: {
      get: function() {
          return this.value
      },
      set: function() {
          this.$emit("change", this.label)
      }
    }
  }
}
</script>
