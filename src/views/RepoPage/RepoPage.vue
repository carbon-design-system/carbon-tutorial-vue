<template>
  <div class="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
    <div class="bx--row repo-page__r1">
      <div class="bx--col-lg-16">
        <repo-table
          :headers="headers"
          :rows="rows"
          title="Carbon Repositories"
          helperText="A collection of public Carbon repositories."
        />
      </div>
    </div>
  </div>
</template>

<script>
import RepoTable from './RepoTable';

const headers = [
  {
    key: 'name',
    header: 'Name'
  },
  {
    key: 'createdAt',
    header: 'Created'
  },
  {
    key: 'updatedAt',
    header: 'Updated'
  },
  {
    key: 'issueCount',
    header: 'Open Issues'
  },
  {
    key: 'stars',
    header: 'Stars'
  },
  {
    key: 'links',
    header: 'Links'
  }
];

const rows = [
  {
    id: '1',
    name: 'Repo 1',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links'
  },
  {
    id: '2',
    name: 'Repo 2',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links'
  },
  {
    id: '3',
    name: 'Repo 3',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links'
  }
];

export default {
  name: 'RepoPage',
  components: {
    RepoTable
  },
  data() {
    return {
      headers,
      rows
    };
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';

.repo-page .bx--row {
  padding-top: $spacing-05;
  padding-bottom: $spacing-05;
}
</style>
