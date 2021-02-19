<template>
  <div v-if="loading">
    <cv-data-table-skeleton
      v-if="loading"
      :columns="columns"
      :title="title"
      :helper-text="helperText"
      :rows="10"
    />
  </div>
  <cv-data-table
    v-else
    :columns="columns"
    :title="title"
    :helper-text="helperText"
    :pagination="{ numberOfItems: this.totalRows }"
    @pagination="$emit('pagination', $event)"
  >
  </cv-data-table>
</template>

<script>
import LinkList from './LinkList';

export default {
  name: 'RepoTable',
  props: {
    headers: Array,
    rows: Array,
    title: String,
    helperText: String,
    loading: Boolean,
    totalRows: Number
  },
  computed: {
    columns() {
      return this.headers.map(header => header.header);
    },
    data() {
      return this.rows.map(row => ({
        data: [
          row.name,
          row.createdAt,
          row.updatedAt,
          row.issueCount,
          row.stars,
          row.links
        ],
        description: row.description
      }));
    }
  },
  components: { LinkList }
};
</script>

<style lang="scss"></style>
