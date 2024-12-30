<template>
  <div class="steps flex-column gap-10">
    <AtomTitle
      title="Соберите мебель своей мечтыза несколько шагов"
      subtitle="Создавайте уникальный дизайн под ваши размеры, стиль и потребности."
    >
    </AtomTitle>
    <div class="steps__wrap">
      <div class="flex-column gap-2">
        <div
          class="relative flex-start gap-4"
          v-for="(item, i) in items"
          :key="i"
        >
          <div class="flex-column flex-center">
            <AtomCircle>{{ i + 1 }}</AtomCircle>
            <span v-if="i < 3" class="steps__line flex-center"></span>
          </div>
          <AtomTitle
            class="pt-[10px]"
            :title="item.title"
            :subtitle="item.subtitle"
            size="sm"
          />
        </div>
      </div>

      <img
        class="w-full max-w-[560px]"
        src="../../../public/Images/Image.png"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const items = ref<any>([
  {
    title: "Выберите базовую модель",
    subtitle: "Выберите основу: шкаф, стол, кровать или другую мебель.",
  },
  {
    title: "Настройте параметры",
    subtitle: "Укажите размеры, добавьте секции, полки или ящики.",
  },
  {
    title: "Выберите материалы и цвет",
    subtitle: "Дерево, металл или стекло? Выберите материал и цвет, которые",
  },
  {
    title: "Оформите заказ",
    subtitle:
      "Отправьте готовый проект в производство. Мы изготовим мебель и доставим её в кратчайшие сроки.",
  },
]);
</script>

<style lang="scss" scoped>
.steps {
  padding: 96px 0;
  @media (max-width: 768px) {
    padding: 96px 16px;
  }
  &__wrap {
    display: flex;
    align-items: center;
    grid-gap: 96px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
}

.steps__line {
  display: block;
  width: 2px;
  background-color: #6941c6;

  height: 100%;
  min-height: 56px;
  position: absolute; /* Абсолютті позиция */
  top: 56px;
  // bottom: 0;
  // left: 0;
  // right: 0;
}
</style>
