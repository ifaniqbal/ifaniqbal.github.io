<template>
  <NuxtContent :document="content" class="mt-4 lg:pt-8 py-8 lg:py-16 px-6 md:px-16 lg:px-24 prose lg:prose-lg mx-auto max-w-2xl lg:max-w-3xl" />
</template>

<script>
export default {
  async asyncData({ $content }) {
    const path = 'index'
    const content = await $content(path).fetch()
    return {
      content
    }
  },
  head() {
    return {
      title: this.content.title,
      meta: [
        {
          name: 'description',
          content: this.content.description,
        },
        {
          name: 'og:image',
          content: '/ifan-iqbal.jpg',
        },
        {
          name: 'og:title',
          content: this.content.title,
        },
        {
          name: 'og:description',
          content: this.content.description,
        },
      ],
    }
  }
}
</script>