import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import {
  columns,
  myScoresColumns,
  flattenRuns,
} from "../constants/runs-table-config";
import { GetAllRunsSubscription } from "../generated/graphql";

const { SearchBar } = Search;

interface ScoresAggregate {
  commentary_score: string;
  overall_score: string;
}

interface UserScore {
  commentary_score: string;
  overall_score: string;
}

export interface Run {
  game: string;
  category: string;
  duration: string;
  platform?: string | null;
  run_id: number;
  runner: string;
  scores_aggregate: ScoresAggregate;
  myScores?: UserScore;
}

interface Props {
  runs: GetAllRunsSubscription["runs"];
  loggedIn: Boolean;
}

export const RunsTable: React.FC<Props> = ({ runs, loggedIn }) => {
  const data = flattenRuns(runs);

  return (
    <ToolkitProvider
      keyField="run_id"
      data={data}
      columns={loggedIn ? columns.concat(myScoresColumns) : columns}
      search
      bootstrap4
    >
      {(props) => (
        <div className="table-responsive">
          <SearchBar {...props.searchProps} className="search-bar" />
          <BootstrapTable {...props.baseProps} bordered={false} bootstrap4 />
        </div>
      )}
    </ToolkitProvider>
  );
};
