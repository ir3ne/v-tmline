<script setup>
import Example from './basic.vue'
</script>

# Basic

---

<Example/>

### Code

<<< ./basic-with-import.vue{vue}

::: info
The `id` is optional while the `label` is **required**.

`isDark` here is just an utility to make the style dynamic based on the theme of the site.

::: tip
Make sure to add the `mode`. The default is `light` and it can be set also as `dark`. It can be dynamic depending on the theme settings.
:::
