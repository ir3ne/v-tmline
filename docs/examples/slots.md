<script setup>
import Example from './slots.vue'
</script>

# Slots

---

<Example/>

## Code

<<< ./slots.vue{vue}

::: tip
You can combine both default and dynamic slots in the same timeline component. The component will use the dynamic slot when `slotName` is specified in the item, otherwise it will fall back to the default `item` slot.
:::
