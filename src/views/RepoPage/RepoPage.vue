<template>
  <div class="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
    <div class="bx--row repo-page__r1">
      <div class="bx--col-lg-16">
        <repo-table
          :headers="headers"
          title="Carbon Repositories"
          helperText="A collection of public Carbon repositories."
          :loading="$apollo.loading"
          :rows="pagedRows"
          :totalRows="rows.length"
          @pagination="onPagination"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RepoTable from './RepoTable';

import { headers, REPO_QUERY } from '@/stores';

export default {
  name: 'RepoPage',
  components: { RepoTable },
  data() {
    return {
      headers,
      pageSize: 0,
      pageStart: 0,
      page: 0
    };
  },
  apollo: {
    organization: REPO_QUERY
  },
  watch: {
    rows() {
      if (this.organization) {
        console.dir(this.organization.repositories.nodes);
      }
    }
  },
  methods: {
    onPagination(val) {
      this.pageSize = val.length;
      this.pageStart = val.start;
      this.page = val.page;
    }
  },
  computed: {
    pagedRows() {
      return this.rows.slice(this.pageStart, this.pageStart + this.pageSize);
    },
    rows() {
      if (!this.organization) {
        return [];
      } else {
        return this.organization.repositories.nodes.map(row => ({
          ...row,
          key: row.id,
          stars: row.stargazers.totalCount,
          issueCount: row.issues.totalCount,
          createdAt: new Date(row.createdAt).toLocaleDateString(),
          updatedAt: new Date(row.updatedAt).toLocaleDateString(),
          links: { url: row.url, homepageUrl: row.homepageUrl }
        }));
      }
    }
  }
};
</script>
