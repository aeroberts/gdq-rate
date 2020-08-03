import React from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { useCachingSubscription } from "../hooks/useCachingSubscription";
import { GetUserRunsDocument, GetUserRunsQuery } from "../generated/graphql";
import { ArrayOf, firstOfArray } from "../utils/types";
import ScoreAccordion from "../components/score-accordion";

type ScoreData = ArrayOf<GetUserRunsQuery["scores"]> | null;
type UserData = ArrayOf<GetUserRunsQuery["users"]> | null;

export default function Profile() {
  const { userId } = useParams();
  const { userData } = React.useContext(AuthContext);
  let { loading, error, data } = useCachingSubscription(GetUserRunsDocument, {
    variables: {
      userId: userId || (userData && userData.user_id),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // User data
  //  Dispaly display_name
  // Scores data
  //  Loop through scores to display components

  const user = firstOfArray(data?.users);

  if (!user) {
    return <p>user not found!</p>;
  }

  return (
    <>
      <h2>{user.display_name}</h2>
      {data?.scores.map((score) => {
        return <ScoreAccordion key={score.run.run_id} score={score} />;
      })}
      <Link to="/logout">Logout</Link>
    </>
  );
}
