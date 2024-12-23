<template>
  <div class="py-[96px] ">
    <AtomTitle title="Соберите мебель своей мечтыза несколько шагов"
      subtitle="Создавайте уникальный дизайн под ваши размеры, стиль и потребности.">

    </AtomTitle>
    <div class="steps__wrap pt-[40px] flex-start gap-[96px]">

      <div class="flex-column gap-2">
        <div class="flex-start gap-4" v-for="(item, i) in 4" :key="i">
          <div class="flex-column flex-center">
            <AtomCircle>{{ item }}</AtomCircle>
            <span v-if="item !== 4" class="steps__line flex-center"></span>
          </div>
          <AtomTitle class="pt-[10px]" title="Выберите базовую модель"
            subtitle="Выберите основу: шкаф, стол, кровать или другую мебель." size="sm" />
        </div>
      </div>

      <img class="w-full max-w-[560px]" src="../../../public/Images/Image.png" alt="">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.steps {
  &__wrap {
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
}

.steps__line {
  display: block;
  width: 2px;
  min-height: 56px;
  height: 100%;
  background-color: #6941C6
}
</style>
