import { gql } from "@apollo/client";

const ALL_RUNS = gql`
    query GetAllRuns {
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

export default ALL_RUNS
