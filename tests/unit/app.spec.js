import { mount, createLocalVue } from '@vue/test-utils';
import RepoPage from '../../src/views/RepoPage/RepoPage.vue';
import VueApollo from 'vue-apollo';
import { createMockClient } from 'mock-apollo-client';
import gql from 'graphql-tag';

const localVue = createLocalVue();
localVue.use(VueApollo);

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

const REPO_QUERYMock = {
  data: {
    organization: {
      repositories: {
        totalCount: 1,
        nodes: [
          {
            url: 'https://github.com/carbon-design-system/carbon',
            homepageUrl: 'https://www.carbondesignsystem.com',
            issues: { totalCount: 357, __typename: 'IssueConnection' },
            stargazers: {
              totalCount: 3054,
              __typename: 'StargazerConnection',
            },
            releases: {
              totalCount: 640,
              nodes: [{ name: '7.0.0-rc.1', __typename: 'Release' }],
              __typename: 'ReleaseConnection',
            },
            name: 'carbon',
            updatedAt: '2020-05-27T18:55:53Z',
            createdAt: '2017-03-13T14:23:59Z',
            description: 'A design system built by IBM',
            id: 'MDEwOlJlcG9zaXRvcnk4NDgzNTUzNQ==',
            __typename: 'Repository',
          },
        ],
      },
    },
  },
};

describe('Vue Step 3 Tests', () => {
  let wrapper;
  let mockClient;
  let apolloProvider;
  let requestHandlers;

  const createComponent = (handlers, data) => {
    requestHandlers = {
      REPO_QUERYHandler: jest.fn().mockResolvedValue(REPO_QUERYMock),
      ...handlers,
    };

    mockClient = createMockClient({ resolvers: {} });

    mockClient.setRequestHandler(REPO_QUERY, requestHandlers.REPO_QUERYHandler);

    apolloProvider = new VueApollo({
      defaultClient: mockClient,
    });

    wrapper = mount(RepoPage, {
      localVue,
      apolloProvider,
      data() {
        return {
          ...data,
        };
      },
    });
  };

  afterEach(() => {
    wrapper.destroy();
    mockClient = null;
    apolloProvider = null;
  });

  it('renders a skeleton table when query is in progress', () => {
    createComponent();

    expect(requestHandlers.REPO_QUERYHandler).toHaveBeenCalled();

    expect(wrapper.find('.bx--data-table.bx--skeleton ').exists()).toBe(true);
  });

  it('renders a table with a single row when query is resolved', async () => {
    createComponent();

    expect(requestHandlers.REPO_QUERYHandler).toHaveBeenCalled();

    await wrapper.vm.$nextTick();
    // second next tick seems to be needed to pass tests.
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.bx--data-table.bx--skeleton').exists()).toBe(false);
    expect(wrapper.findAll('.bx--data-table tr')).toHaveLength(1);
  });
});
