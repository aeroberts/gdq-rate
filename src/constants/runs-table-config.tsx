import { GetAllRunsSubscription } from "../generated/graphql";
import { ColumnDescription, ColumnFormatter } from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import React from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { ArrayOf } from "../utils/types";
import { Stars } from "../components/stars";

interface Column extends ColumnDescription {}

const gameFormatter: ColumnFormatter<RunRow, any, RunRow["aOverallScore"]> = (
  cell,
  row
) => {
  return <Link to={"/run/" + row.run_id}>{cell}</Link>;
};

const overallScoreFormatter: ColumnFormatter<
  RunRow,
  any,
  RunRow["aOverallScore"]
> = (cell, row) => {
  if (typeof cell.total !== "number" || typeof cell.count !== "number")
    return "-";
  if (!cell.total || !cell.count) return "-";
  return <Stars val={cell.total / cell.count} />;
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
    formatter: overallScoreFormatter,
    sortFunc: (a, b, order) => {
      const invert = 2 * (Number(order === "asc") - 0.5);
      if (typeof a.total === "string" || typeof a.count === "string") {
        return 1;
      }
      if (typeof b.total === "string" || typeof b.count === "string") {
        return -1;
      }
      const avgA = a.total / a.count;
      const avgB = b.total / b.count;
      if (avgA === avgB) {
        return invert * (a.count - b.count);
      }
      return invert * (avgA - avgB);
    },
  },
  {
    dataField: "aOverallScore.count",
    text: "Votes",
    sort: true,
    headerStyle: {
      width: "10%",
    },
  },
];

const myScoresColumns = [
  {
    dataField: "uOverallScore",
    text: "My Overall Score",
  },
];

type RunRow = ArrayOf<ReturnType<typeof flattenRuns>>;
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
        aCommentaryScore:
          scores_aggregate?.aggregate?.sum?.overall_score || "-",
        aOverallScore: {
          total: scores_aggregate?.aggregate?.sum?.overall_score || "-",
          count: scores_aggregate?.aggregate?.count || "-",
        },
        uCommentaryScore:
          (myScores && myScores.length && myScores[0].commentary_score) || "-",
        uOverallScore:
          (myScores && myScores.length && myScores[0].overall_score) || "-",
      };
    }
  );
}

export { columns, myScoresColumns, flattenRuns };
