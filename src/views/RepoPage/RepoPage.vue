<style lang="scss">
@import '../../styles/carbon-utils';

.repo-page .bx--row {
  padding-top: $spacing-05;
  padding-bottom: $spacing-05;
}
</style>

<script>
export default {
  name: 'RepoTable',
  props: {
    headers: Array,
    rows: Array,
    title: String,
    helperText: String,
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
        description: 'Row description',
      }));
    },
  },
};
</script>

<script>
import RepoTable from './RepoTable';

export default {
  name: 'RepoPage',
};
</script>

<script>
export default {
  name: 'RepoTable',
  props: {
    headers: Array,
    rows: Array,
    title: String,
    helperText: String,
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
        description: 'Row description',
      }));
    },
  },
};
</script>

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const rows = [
  {
    id: '1',
    name: 'Repo 1',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '2',
    name: 'Repo 2',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '3',
    name: 'Repo 3',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
];

export default {
  name: 'RepoPage',
  components: { RepoTable },
  data() {
    return {
      headers,
      rows,
    };
  },
};

<template>
  <cv-data-table :columns="columns" :title="title" :helper-text="helperText">
    <template slot="data">
      <cv-data-table-row v-for="(row, rowIndex) in data" :key="`${rowIndex}`">
        <cv-data-table-cell
          v-for="(cell, cellIndex) in row.data"
          :key="`${cellIndex}`"
          >{{ cell }}</cv-data-table-cell
        >
        <template slot="expandedContent">
{{ row.description }}
</template>
      </cv-data-table-row>
    </template>
  </cv-data-table>
</template>

<template>
  <div class="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
    <div class="bx--row repo-page__r1">
      <repo-table
        :headers="headers"
        :rows="rows"
        title="Carbon Repositories"
        helperText="A collection of public Carbon repositories."
      />
    </div>
  </div>
</template>
