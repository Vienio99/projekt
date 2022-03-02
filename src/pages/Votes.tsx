/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { FC, useEffect, useState } from "react";

interface Vote {
  id: number;
  created_at: string;
  value: number;
}

const voteContainer = css({
  display: "flex",
  gap: "2rem",
});

const Votes: FC = () => {
  const [votes, setVotes] = useState<any>([]);

  const handleVote = async (value: number) => {
    const url = "https://api.thecatapi.com/v1/votes";
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "x-api-key": "7b35810e-a4e5-40f8-84d8-9284d04b1f7c",
      },
      body: JSON.stringify({
        image_id: "asf2",
        value: `${value}`,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  const handleDelete = async (id: number) => {
    const url = `https://api.thecatapi.com/v1/votes/${id}`;
    const res = await fetch(url, {
      method: "delete",
      headers: {
        "x-api-key": "7b35810e-a4e5-40f8-84d8-9284d04b1f7c",
      },
    });

    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    async function fetchVotes() {
      const url = "https://api.thecatapi.com/v1/votes";
      const res = await fetch(url, {
        method: "get",
        headers: {
          "x-api-key": "7b35810e-a4e5-40f8-84d8-9284d04b1f7c",
        },
      });

      const data = await res.json();
      console.log(data);
      setVotes(data);
    }

    fetchVotes();
  }, []);

  return (
    <div>
      <button onClick={() => handleVote(1)}>Vote for</button>
      <button onClick={() => handleVote(0)}>Vote against</button>
      <div>
        {votes.length > 0 &&
          votes.map((vote: Vote) => (
            <div key={vote.id} css={voteContainer}>
              <div>Vote id: {vote.id}</div>
              <div>Vote: {vote.value}</div>
              <button onClick={() => handleDelete(vote.id)}>Delete vote</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Votes;
