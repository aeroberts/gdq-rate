import { gql } from "@apollo/client";

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

export default ALL_RUNS;
