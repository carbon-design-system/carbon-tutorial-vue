<template>
  <div class="bx--grid bx--grid--full-width bx--grid--no-gutter hof-page">
    <div class="bx--row hof-page__banner">
      <div class="bx--col-lg-16">
        <h1 class="hof-page__heading">
          Carbon Developer Essentials Hall of Fame
        </h1>
      </div>
      <div class="bx--col-lg-4">
        <p>These folks got one of these...</p>
        <img
          class="page-image"
          src="../../assets/carbon-badge.png"
          title="Carbon developer essentials react badge"
        />
      </div>
      <div class="bx--col-lg-4">
        <img
          class="page-image"
          src="../../assets/carbon-tee.png"
          title="Carbon t-shirt"
        />
        <p>...and one of these.</p>
      </div>
      <div class="bx--col-lg-8">
        <cv-dropdown
          placeholder="Select a branch"
          helper-text="Which branch are you intereted in"
          label="Select your branch"
          v-model="branch"
        >
          <cv-dropdown-item
            v-for="branch in branches"
            :key="branch.value"
            :value="branch.value"
            >{{ branch.label }}</cv-dropdown-item
          >
        </cv-dropdown>
        <cv-text-input v-model="author" label="Author:" />
      </div>
    </div>

    <div class="bx--row hof-page__r1">
      <cv-tile
        v-for="edge in search.edges"
        :key="edge.node.author"
        kind="clickable"
        :href="edge.node.url"
      >
        <h2>{{ edge.node.author.login }}</h2>
        <p>{{ edge.node.closedAt }}</p>
        <img :src="edge.node.author.avatarUrl" />
      </cv-tile>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'HallOfFamePage',
  apollo: {
    // Query with parameters
    search: {
      query: gql`
        query REPO_QUERY($query: String!) {
          search(query: $query, type: ISSUE, first: 100) {
            edges {
              node {
                ... on PullRequest {
                  repository {
                    nameWithOwner
                  }
                  headRefName
                  number
                  url
                  author {
                    avatarUrl
                    login
                    url
                  }
                }
              }
            }
          }
        }
      `,
      // Reactive parameters
      variables() {
        // Use vue reactive properties here
        return {
          query: `org:carbon-design-system type:pr is:closed ${this.branchQuery}${this.authorQuery}`
        };
      }
    }
  },
  data() {
    return {
      author: '',
      branches: [
        {
          label: 'Austin',
          value: 'austin'
        },
        {
          label: 'Boeblingen',
          value: 'boeblingen'
        },
        {
          label: 'Hursley',
          value: 'hursley'
        }
      ],
      branch: ''
    };
  },
  computed: {
    authorQuery() {
      return this.author.length ? ` author:${this.author}` : '';
    },
    branchQuery() {
      return this.branch.length ? `step+5+${this.branch}` : 'step+5';
    }
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';

.page-image {
  width: 100%;
}
</style>
