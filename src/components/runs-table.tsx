import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import {
  columns,
  myScoresColumns,
  flattenRuns,
} from "../constants/runs-table-config";

const { SearchBar } = Search;

interface ScoresAggregate {
  commentary_score: string;
  overall_score: string;
}

interface UserScore {
  commentary_score: string;
  overall_score: string;
}

interface Run {
  game: string;
  category: string;
  duration: string;
  platform: string;
  run_id: string;
  runner: string;
  scores_aggregate: ScoresAggregate;
  myScores?: UserScore;
}

interface Props {
  runs: Run[];
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
    >
      {(props) => (
        <div>
          <SearchBar {...props.searchProps} className="search-bar" />
          <BootstrapTable {...props.baseProps} bordered={false} />
        </div>
      )}
    </ToolkitProvider>
  );
};
