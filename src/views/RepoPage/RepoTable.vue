<template>
  <CvDataTable :columns="columns" :title="title" :helper-text="helperText">
    <template slot="data">
      <CvDataTableRow v-for="(row, rowIndex) in data" :key="`${rowIndex}`">
        <CvDataTableCell
          v-for="(cell, cellIndex) in row.data"
          :key="`${cellIndex}`"
        >
          {{ cell }}
        </CvDataTableCell>
        <template slot="expandedContent">
          {{ row.description }}
        </template>
      </CvDataTableRow>
    </template>
  </CvDataTable>
</template>

<script>
export default {
  name: 'RepoTable',
  props: {
    headers: Array,
    rows: Array,
    title: String,
    helperText: String
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
        description: 'Row description'
      }));
    }
  }
};
</script>
