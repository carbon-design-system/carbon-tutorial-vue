<template>
  <cv-data-table-skeleton
    v-if="loading"
    :columns="columns"
    :title="title"
    :helper-text="helperText"
    :rows="10"
  />
  <cv-data-table
    v-else
    :columns="columns"
    :title="title"
    :helper-text="helperText"
    :pagination="{ numberOfItems: this.totalRows }"
    @pagination="$emit('pagination', $event)"
  >
    <template v-slot:data>
      <cv-data-table-row v-for="(row, rowIndex) in data" :key="`${rowIndex}`">
        <cv-data-table-cell
          v-for="(cell, cellIndex) in row.data"
          :key="`${cellIndex}`"
        >
          <template v-if="!cell.url">
            {{ cell }}
          </template>
          <link-list v-else :url="cell.url" :homepage-url="cell.homepageUrl" />
        </cv-data-table-cell>
        <template v-slot:expandedContent> {{ row.description }} xx </template>
      </cv-data-table-row>
    </template>
  </cv-data-table>
</template>

<script>
import LinkList from './LinkList';

export default {
  name: 'RepoTable',
  components: { LinkList },
  props: {
    headers: Array,
    rows: Array,
    title: String,
    helperText: String,
    loading: Boolean,
    totalRows: Number,
  },
  computed: {
    columns() {
      return this.headers.map((header) => header.header);
    },
    data() {
      return this.rows.map((row) => ({
        data: [
          row.name,
          row.createdAt,
          row.updatedAt,
          row.issueCount,
          row.stars,
          row.links,
        ],
        description: row.description,
      }));
    },
  },
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';

.repo-page .bx--row {
  padding-top: $spacing-05;
  padding-bottom: $spacing-05;
}
</style>
