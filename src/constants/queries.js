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
  subscription GetAllRuns($userId: uuid, $loggedIn: Boolean!) {
    runs {
      game
      category
      duration
      platform
      run_id
      runner
      scores_aggregate {
        aggregate {
          sum {
            commentary_score
            overall_score
          }
        }
      }
      myScores: scores(where: { user_id: { _eq: $userId } })
        @include(if: $loggedIn) {
        commentary_score
        overall_score
      }
    }
  }
`;

export { ALL_RUNS, USER_ID };
