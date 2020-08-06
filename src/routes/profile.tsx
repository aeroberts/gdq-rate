import React from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { useCachingSubscription } from "../hooks/useCachingSubscription";
import { GetUserRunsDocument } from "../generated/graphql";
import { firstOfArray } from "../utils/types";
import ScoreAccordion from "../components/score-accordion";
import { Avatar } from "../components/avatar";

export default function Profile() {
  const { userId } = useParams();
  const { userData } = React.useContext(AuthContext);
  let { loading, error, data } = useCachingSubscription(GetUserRunsDocument, {
    variables: {
      userId: userId || userData?.user_id,
    },
  });

  if (!userId && !userData?.user_id) {
    return <p>You must be logged in to view this page</p>;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // User data
  //  Display display_name
  // Scores data
  //  Loop through scores to display components

  const user = firstOfArray(data?.users);

  if (!user) {
    return <p>user not found!</p>;
  }

  return (
    <>
      <h2 style={{ display: "flex", alignItems: "center" }} className="mb-3">
        <div style={{ marginRight: 12 }}>
          <Avatar uri={user.avatar_url} name={user.display_name} size={40} />
        </div>
        {user.display_name}
      </h2>
      {data?.scores.map((score) => {
        return <ScoreAccordion key={score.run.run_id} score={score} />;
      })}
    </>
  );
}
