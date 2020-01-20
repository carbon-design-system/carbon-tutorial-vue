<template>
  <div class="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
    <div class="bx--row repo-page__r1">
      <div class="bx--col-lg-16">
        <repo-table
          :headers="headers"
          :rows="pagedRows"
          :totalRows="rows.length"
          @pagination="onPagination"
          title="Carbon Repositories"
          helperText="A collection of public Carbon repositories."
          :loading="$apollo.loading"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
<<<<<<< HEAD
=======

>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
import RepoTable from './RepoTable';

const REPO_QUERY = gql`
  query REPO_QUERY {
<<<<<<< HEAD
    # Let's use carbon as our organization
    organization(login: "carbon-design-system") {
      # We'll grab all the repositories in one go. To load more resources
      # continuously, see the advanced topics.
=======
    organization(login: "carbon-design-system") {
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          url
          homepageUrl
          issues(filterBy: { states: OPEN }) {
            totalCount
          }
          stargazers {
            totalCount
          }
          releases(first: 1) {
            totalCount
            nodes {
              name
            }
          }
          name
          updatedAt
          createdAt
          description
          id
        }
      }
    }
  }
`;

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

export default {
  name: 'RepoPage',
  components: { RepoTable },
  apollo: {
    organization: REPO_QUERY
  },
  data() {
    return {
      headers,
      pageSize: 0,
      pageStart: 0,
      page: 0
    };
  },
<<<<<<< HEAD
=======

  apollo: {
    organization: REPO_QUERY
  },

>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
  computed: {
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
<<<<<<< HEAD
          links: { url: row.url, homepageUrl: row.homepageUrl }
        }));
      }
    },
=======
          links: {
            url: row.url,
            homepageUrl: row.homepageUrl
          }
        }));
      }
    },

>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
    pagedRows() {
      return this.rows.slice(this.pageStart, this.pageStart + this.pageSize);
    }
  },
<<<<<<< HEAD
  watch: {
    rows() {
      if (this.organization) {
        //console.dir(this.organization.repositories.nodes);
      }
    }
  },
  methods: {
    onPagination(val) {
      this.pageSize = val.length;
      this.pageStart = val.start;
      this.page = val.page;
=======

  methods: {
    onPagination(value) {
      this.pageSize = value.length;
      this.pageStart = value.start;
      this.page = value.page;
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
    }
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
