<template>
<<<<<<< HEAD
  <cv-data-table-skeleton
    v-if="loading"
    :columns="columns"
    :title="title"
    :helper-text="helperText"
    :rows="10"
  />
=======
  <div v-if="loading">
    <cv-data-table-skeleton
      v-if="loading"
      :columns="columns"
      :title="title"
      :helper-text="helperText"
      :rows="10"
    />
  </div>
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
  <cv-data-table
    v-else
    :columns="columns"
    :title="title"
    :helper-text="helperText"
    :pagination="{ numberOfItems: this.totalRows }"
    @pagination="$emit('pagination', $event)"
  >
    <template slot="data">
      <cv-data-table-row v-for="row in data" :key="`${row.key}`">
        <cv-data-table-cell
          v-for="(cell, cellIndex) in row.data"
          :key="`${cellIndex}`"
        >
<<<<<<< HEAD
          <template v-if="!cell.url">{{ cell }}</template>
=======
          <template v-if="!cell.url">
            {{ cell }}
          </template>
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
          <link-list v-else :url="cell.url" :homepage-url="cell.homepageUrl" />
        </cv-data-table-cell>
        <template slot="expandedContent">{{ row.description }}</template>
      </cv-data-table-row>
    </template>
  </cv-data-table>
</template>

<script>
import LinkList from './LinkList';
<<<<<<< HEAD
export default {
  name: 'RepoTable',
  components: { LinkList },
=======

export default {
  name: 'RepoTable',
  components: {
    LinkList
  },
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
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
        key: row.key,
        data: [
          row.name,
          row.createdAt,
          row.updatedAt,
          row.issueCount,
          row.stars,
          row.links
        ],
<<<<<<< HEAD
        description: row.description,
        key: row.key
=======
        description: row.description
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
      }));
    }
  }
};
</script>
