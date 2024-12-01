<template>
  <div class="text-center  ">
    <v-btn color="primary">
      <slot />

      <v-menu activator="parent" open-on-hover>
        <v-list>
          <v-list-item v-for="item in items" :key="item.id" link>
            <NuxtLink :to="`/category${item?.path}`">
              <v-list-item-title>Item {{ item.title }}</v-list-item-title>
            </NuxtLink>
            <template v-slot:append v-if="item.children?.length">
              <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
            </template>

            <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
              <v-list>
                <v-list-item v-for="j in item.children" :key="j" link>
                  <v-list-item-title> {{ j.title }}</v-list-item-title>
                  <template v-slot:append v-if="j.children?.length">
                    <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
                  </template>

                  <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                    <v-list>
                      <v-list-item v-for="k in j.children" :key="k" link>
                        <v-list-item-title> {{ k.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

type TreeNode = {
  id: number;
  title: string;
  path: string;
  children?: TreeNode[];
};

// Props типі
const props = defineProps<{
  items: TreeNode[];
}>();
</script>