import { gql } from "@apollo/client";

const USER_ID = gql`
  query UserInfo {
    users {
      id
      display_name
      created_at
      avatar_url
      updated_at
    }
  }
`;

const ALL_RUNS = gql`
  subscription GetAllRuns {
    runs {
      game
      category
      duration
      platform
      run_id
      runner
    }
  }
`;

export { ALL_RUNS, USER_ID };
