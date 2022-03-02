/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { FC, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

interface Vote {
  id: number;
  created_at: string;
  value: number;
}

const voteContainer = css({
  display: "flex",
  gap: "2rem",
});

interface VoteProps {
  vote_id: number
}

const Vote: FC<VoteProps> = (props) => {
  const [vote, setVote] = useState();

  useEffect(() => {
    async function fetchVote() {
      const url = `https://api.thecatapi.com/v1/votes/${props.vote_id}`;
      const res = await fetch(url, {
        method: "get",
        headers: {
          "x-api-key": "7b35810e-a4e5-40f8-84d8-9284d04b1f7c",
        },
      });

      const data = await res.json();
      console.log(data);
      setVote(data);
    }

    fetchVote();
  }, []);

  return (
    <div>

    </div>
  );
};

export default Vote;
