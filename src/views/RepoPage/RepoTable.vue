<template>
<<<<<<< HEAD
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
      <cv-data-table-row v-for="row in data" :key="`${row.data}`">
        <cv-data-table-cell
          v-for="(cell, cellIndex) in row.data"
          :key="`${cellIndex}`"
        >
          <template v-if="!cell.url">
            {{ cell }}
          </template>
          <link-list v-else :url="cell.url" :homepage-url="cell.homepageUrl" />
        </cv-data-table-cell>
        <template v-slot:expandedContent> {{ row.description }} </template>
=======
  <cv-data-table :columns="columns" :title="title" :helper-text="helperText">
    <template slot="data">
      <cv-data-table-row v-for="(row, rowIndex) in data" :key="`${rowIndex}`">
        <cv-data-table-cell
          v-for="(cell, cellIndex) in row.data"
          :key="`${cellIndex}`"
          >{{ cell }}</cv-data-table-cell
        >
        <template slot="expandedContent">{{ row.description }}</template>
>>>>>>> 924f01afd7533cd0136b97ad7175d5c72e258701
      </cv-data-table-row>
    </template>
  </cv-data-table>
</template>

<script>
<<<<<<< HEAD
import LinkList from './LinkList';

export default {
  name: 'RepoTable',
  components: { LinkList },
=======
export default {
  name: 'RepoTable',
>>>>>>> 924f01afd7533cd0136b97ad7175d5c72e258701
  props: {
    headers: Array,
    rows: Array,
    title: String,
<<<<<<< HEAD
    helperText: String,
    loading: Boolean,
    totalRows: Number
=======
    helperText: String
>>>>>>> 924f01afd7533cd0136b97ad7175d5c72e258701
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
<<<<<<< HEAD
        description: row.description
=======
        description: 'Row description'
>>>>>>> 924f01afd7533cd0136b97ad7175d5c72e258701
      }));
    }
  }
};
</script>

<<<<<<< HEAD
<style lang="scss">
@import '../../styles/carbon-utils';

.repo-page .bx--row {
  padding-top: $spacing-05;
  padding-bottom: $spacing-05;
}
</style>
=======
<style lang="scss"></style>
>>>>>>> 924f01afd7533cd0136b97ad7175d5c72e258701
