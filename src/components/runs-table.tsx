import React from "react";
import Table from "react-bootstrap/Table";

interface Run {
  game: string;
  category: string;
  duration: string;
  platform: string;
  run_id: string;
  runner: string;
}

interface Props {
  runs: Run[];
}

const Row: React.FC<Run> = ({ game, category, duration, platform, runner }) => {
  return (
    <tr>
      <td>{game}</td>
      <td>{category}</td>
      <td>{duration}</td>
      <td>{platform}</td>
      <td>{runner}</td>
    </tr>
  );
};

export const RunsTable: React.FC<Props> = ({ runs }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Game</th>
          <th>Cateogory</th>
          <th>Duration</th>
          <th>Platform</th>
          <th>Runner</th>
        </tr>
      </thead>
      <tbody>
        {runs.map((run: Run) => (
          <Row key={run.run_id} {...run} />
        ))}
      </tbody>
    </Table>
  );
};
