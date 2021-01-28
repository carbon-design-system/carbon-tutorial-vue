<template>
  <cv-data-table-skeleton
    v-if="loading"
    :columns="columns"
    :title="title"
    :helper-text="helperText"
    :rows="5"
  />
  <cv-data-table
    v-else
    :columns="columns"
    :title="title"
    :helper-text="helperText"
  >
    <template slot="data">
      <cv-data-table-row v-for="(row, rowIndex) in data" :key="`${rowIndex}`">
        <cv-data-table-cell
          v-for="(cell, cellIndex) in row.data"
          :key="`${cellIndex}`"
        >
          <template v-if="!cell.url">{{ cell }}</template>
          <link-list v-else :url="cell.url" :homepage-url="cell.homepageUrl" />
        </cv-data-table-cell>
        <template slot="expandedContent">{{ row.description }}</template>
      </cv-data-table-row>
    </template>

    <cv-pagination
      backwards-text="Previous page"
      forwards-text="Next page"
      page-number-label="Page number"
      page-sizes-label="Items per page"
      :number-of-items="103"
      :page-sizes="[10, { value: 20, selected: true }, 30, 40, 50]"
    ></cv-pagination>
  </cv-data-table>
</template>

<script>
import LinkList from './LinkList.vue';
export default {
  name: 'RepoTable',
  components: { LinkList },
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
  }
};
</script>

<style lang="scss"></style>
