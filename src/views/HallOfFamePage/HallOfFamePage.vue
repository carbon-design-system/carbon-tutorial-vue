<template>
  <div class="bx--grid bx--grid--full-width">
    <div class="hof-page__banner">
      <div class="bx--row">
        <div class="bx--col-lg-16">
          <h1 class="hof-page__heading">
            Carbon Developer Essentials Hall of Fame
          </h1>
        </div>
      </div>
      <div class="bx--row">
        <cv-tile class="bx--col-lg-4 bx--offset-lg-4">
          <p class="hof-page__banner-text">These folks got one of these...</p>
          <img
            class="hof-page__image"
            src="../../assets/carbon-badge.png"
            title="Carbon developer essentials react badge"
          />
        </cv-tile>
        <cv-tile class="bx--col-lg-4">
          <img
            class="hof-page__image"
            src="../../assets/carbon-tee.png"
            title="Carbon t-shirt"
          />
          <p class="hof-page__banner-text hof-page__right">
            ...and one of these.
          </p>
        </cv-tile>
      </div>
      <div class="bx--row">
        <div class="bx--col-lg-8 bx--offset-lg-4">
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
        </div>
      </div>
      <div class="bx--row">
        <div class="bx--col-lg-8 bx--offset-lg-4">
          <cv-text-input v-model="author" label="Author:" />
        </div>
      </div>
    </div>

    <div class="bx--row hof-page__content">
      <div class="bx--col-lg-8 bx--offset-lg-4">
        <ul class="hof-page__list">
          <li
            class="hof-page__list-item"
            v-for="edge in search.edges"
            :key="edge.node.author"
          >
            <cv-tile
              class="hof-page__tile"
              kind="clickable"
              :href="edge.node.url"
            >
              <h2>{{ edge.node.author.login }}</h2>
              <p>{{ edge.node.closedAt }}</p>
              <img
                :src="edge.node.author.avatarUrl"
                class="hof-page__tile-image"
              />
            </cv-tile>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// nudge for a PR.
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

.hof-page__banner {
  padding-top: $spacing-05;
  background-color: $ui-01;

  .bx--row {
    padding-bottom: $spacing-05;
  }
}

.hof-page__heading {
  @include carbon--type-style('productive-heading-05');
}

.hof-page__content {
  background-color: $ui-02;
}

.hof-page__image {
  width: 100%;
}

.hof-page__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hof-page__list-item {
  width: $spacing-07 * 8;
  margin-top: $spacing-05;
}

.hof-page__tile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $ui-01;
}

.hof-page__tile-image {
  width: $spacing-09 * 2;
  height: $spacing-09 * 2;
  border-radius: 50%;
}

.hof-page__right {
  float: right;
}

.hof-page__banner-text {
  @include carbon--type-style('productive-heading-03');
}
</style>
