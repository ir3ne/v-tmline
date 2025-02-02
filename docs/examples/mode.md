<script setup>
import Example from './mode.vue'
</script>

# Mode

---

<Example/>

## Code

<<< ./mode.vue{vue}

::: info
The `mode` property can be dynamic. In this example it depends on [Vitepress](https://vitepress.dev/) theme's light/dark mode.
For implementation in other environments it can directly depend on the settings of the theme used. In this way the timeline component is completely flexible.
:::
