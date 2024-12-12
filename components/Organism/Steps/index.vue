<template>
  <div class="py-[96px] ">
    <AtomTitle title="Соберите мебель своей мечтыза несколько шагов"
      subtitle="Создавайте уникальный дизайн под ваши размеры, стиль и потребности.">

    </AtomTitle>
    <div class="pt-[40px] flex-start gap-[96px]">

      <div class="flex-column gap-2">
        <div class="flex-start gap-4" v-for="(item, i) in 4" :key="i">
          <div class="flex-column flex-center">
            <div class="steps__circle flex-center">{{ item }}</div>
            <span v-if="item !== 4" class="steps__line flex-center"></span>
          </div>
          <AtomTitle class="pt-[10px]" title="Выберите базовую модель"
            subtitle="Выберите основу: шкаф, стол, кровать или другую мебель." size="xs">
          </AtomTitle>
        </div>
      </div>

      <img class="w-full max-w-[560px]" src="../../../public/Images/Image.png" alt="">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.steps__circle {
  width: 48px;
  height: 48px;
  padding: 9px 0px 9px 0px;
  border-radius: 28px;
  background: #F4EBFF;
  border: 8px solid #F9F5FF;

  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #6941C6;
}

.steps__line {
  display: block;
  width: 2px;
  min-height: 56px;
  height: 100%;
  background-color: #6941C6
}
</style>
