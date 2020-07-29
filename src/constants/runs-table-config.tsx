interface Column {
  dataField: string;
  text: string;
}

const columns: Column[] = [
  {
    dataField: "game",
    text: "Game",
    sort: true,
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

function flattenRuns(runs) {
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
        aCommentaryScore: scores_aggregate.commentary_score,
        aOverallScore: scores_aggregate.overall_score,
        uCommentaryScore: myScores?.commentary_score,
        uOverallScore: myScores?.overall_score,
      };
    }
  );
}

export { columns, myScoresColumns, flattenRuns };
