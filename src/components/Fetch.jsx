import React, { useEffect, useState } from 'react';

function Fetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  const [acc, setAcc] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setAcc(json));
  }, []);
  const [team, setTeam] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setTeam(json));
  }, []);
  return { data, acc, team };
}

export default Fetch;
