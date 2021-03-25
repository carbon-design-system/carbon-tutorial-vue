<template>
  <div>
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
    :pagination="{numberOfItems: this.totalRows }"
    @pagination="$emit('pagination', $event)">

  <cv-data-table-cell v-for="(row, rowIndex) in row.data" :key="`${rowIndex}`">
    <template v-if="!cell.url">
      {{cell}}
    </template>
    <link-list v-else :url="cell.url" :homepage-url="cell.homepageUrl" />
    </cv-data-table-cell>

  </cv-data-table>

  </div>
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
  components: { LinkList },
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
  }
};
</script>

<style lang="scss"></style>
