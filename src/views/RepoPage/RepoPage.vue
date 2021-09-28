<template>
  <div class="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
    <div class="bx--row repo-page__r1">
      <div class="bx--col-lg-16">
        {{ this.organization }}
        <repo-table
          :headers="headers"
          :rows="rows"
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
import RepoTable from './RepoTable';
import gql from 'graphql-tag';
const REPO_QUERY = gql`
  query REPO_QUERY {
    # Let's use carbon as our organization
    organization(login: "carbon-design-system") {
      # We'll grab all the repositories in one go. To load more resources
      # continuously, see the advanced topics.
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
  data() {
    return {
      headers,
      pageSize: 0,
      pageStart: 0,
      page: 0
    };
  },
  computed: {
    // other computed properties
    // ...
    pagedRows() {
      return this.rows.slice(this.pageStart, this.pageStart + this.pageSize);
    }
  },
  methods: {
    onPagination(val) {
      this.pageSize = val.length;
      this.pageStart = val.start;
      this.page = val.page;
    }
  },
  watch: {
    rows() {
      if (this.organization) {
        console.dir(this.organization.repositories.nodes);
      }
    }
  },
  apollo: {
    organization: REPO_QUERY
  }
};
</script>
