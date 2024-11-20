<template>
  <v-list-group>
    <template v-slot:activator="{ props }">
      <div v-bind="props">
        <slot name="user" />
      </div>
    </template>

    <slot />
  </v-list-group>
</template>

<script>
export default {
  data: () => ({
    open: ['Users'],
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
  }),
}
</script>