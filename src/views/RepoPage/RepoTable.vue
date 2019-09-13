<template>
  <cv-data-table :columns="columns" :title="title" :helper-text="helperText">
  </cv-data-table>
</template>

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
            row.links,
          ],
          description: 'Row description',
        }));
      },
    },
  };
</script>