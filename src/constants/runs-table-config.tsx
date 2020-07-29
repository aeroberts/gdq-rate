import { Run } from "../components/runs-table";
import { GetAllRunsSubscription } from "../generated/graphql";
import { ColumnDescription, ColumnFormatter } from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import React from "react";

interface Column extends ColumnDescription {}

const gameFormatter: ColumnFormatter<any> = (cell, row) => {
  return <Link to={"/run/" + row.run_id}>{cell}</Link>;
};

const columns: Column[] = [
  {
    dataField: "game",
    text: "Game",
    sort: true,
    formatter: gameFormatter,
  },
  {
    dataField: "category",
    text: "Category",
  },
  {
    dataField: "duration",
    text: "Duration",
    sort: true,
  },
  {
    dataField: "platform",
    text: "Platform",
    sort: true,
  },
  {
    dataField: "runner",
    text: "Runner",
    sort: true,
  },
  {
    dataField: "aOverallScore",
    text: "Overall Score",
    sort: true,
  },
];

const myScoresColumns = [
  {
    dataField: "uOverallScore",
    text: "My Overall Score",
  },
];

function flattenRuns(runs: GetAllRunsSubscription["runs"]) {
  return runs.map(
    ({
      game,
      category,
      duration,
      platform,
      runner,
      run_id,
      scores_aggregate,
      myScores,
    }) => {
      return {
        game,
        category,
        duration,
        platform,
        runner,
        run_id,
        aCommentaryScore: scores_aggregate?.aggregate?.sum?.overall_score,
        aOverallScore: scores_aggregate?.aggregate?.sum?.overall_score,
        uCommentaryScore:
          myScores && myScores.length && myScores[0].commentary_score,
        uOverallScore: myScores && myScores.length && myScores[0].overall_score,
      };
    }
  );
}

export { columns, myScoresColumns, flattenRuns };
