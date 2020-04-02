<template>
  <div>
    <homeHeader/>
    <stories />
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>ПРОЧТИ МЕНЯ</h1>
    <p>
      На данном этапе я успел реализовать лишь страницу
      <em>"Интересное"</em> (лупа)
      <br />Пока что можно увидеть, что переход между страницами выполнен с помощью
      <em>Vue-router</em>
      <br />На странице
      <em>"Интересное"</em> Вас ждет:
    </p>
    <ul>
      <li>Загрузка изображений из JSON/файла методом fetch</li>
      <li>Отображение изображений по тэгу (вверху страницы)</li>
      <li>Динамическое отображение строки поиска</li>
    </ul>
    <footer>
      <b>P.S.</b> переключи на мобильный вид
    </footer>
    <bottom />
  </div>
</template>

<script>
import bottom from "@/components/Bottom.vue";
import homeHeader from "@/components/homeHeader.vue";
import stories from "@/components/stories.vue";

export default {
  data() {
    return {};
  },
  components: { bottom, homeHeader, stories },
  metaInfo: {
    title: "Инстаграм 2.0"
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
