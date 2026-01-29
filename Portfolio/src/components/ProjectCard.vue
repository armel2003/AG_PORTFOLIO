<template>
  <div class="card">
    <div class="image-container">
      <img :src="image" alt="" class="thumbnail" />
      <div class="overlay"></div>
    </div>

    <div class="card-content">
      <h3 class="title">{{ title }}</h3>
      <p class="desc">{{ description }}</p>

      <div class="tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <button class="btn-detail" @click="$emit('view-details')">
        Voir détail
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  tags: Array
})

defineEmits(['view-details'])
</script>

<style scoped>
.card {
  position: relative;
  background: var(--card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid hsla(0, 0%, 15%, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-8px);
  border-color: var(--border);
  box-shadow: var(--shadow-soft);
}

.image-container {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, hsla(0, 0%, 12%, 0.5) 0%, var(--card) 100%);
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover .thumbnail {
  transform: scale(1.08);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, hsla(0, 0%, 4%, 0.9) 0%, transparent 50%);
  opacity: 0.7;
  transition: opacity 0.4s ease;
}

.card:hover .overlay {
  opacity: 0.5;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--foreground);
  transition: all 0.3s ease;
}

.card:hover .title {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.desc {
  font-size: 0.875rem;
  color: var(--muted-foreground);
  margin-bottom: 1.25rem;
  line-height: 1.6;
  flex: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tag {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border-radius: 9999px;
  border: 1px solid hsla(0, 0%, 15%, 0.5);
  transition: all 0.3s ease;
  font-weight: 500;
}

.card:hover .tag {
  background-color: var(--accent);
  border-color: var(--border);
}

.btn-detail {
  margin-top: 1rem;
  padding: 0.75rem 1.25rem;
  width: 100%;
  background: var(--primary);
  color: var(--primary-foreground);
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--primary);
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-detail:hover {
  background: hsl(from var(--primary) h s calc(l * 1.1));
  transform: translateY(-2px);
  box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.3);
}

.btn-detail svg {
  transition: transform 0.3s ease;
}

.btn-detail:hover svg {
  transform: translateX(4px);
}
</style>
