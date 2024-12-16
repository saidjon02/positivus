import React, { useEffect, useState } from 'react';

function Fetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  const [accc, setAccc] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setAccc(json));
  }, []);
  const [team, setTeam] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setTeam(json));
  }, []);
  return { data, accc, team };
}

export default Fetch;
