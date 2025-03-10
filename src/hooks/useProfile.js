import { useEffect, useState } from "react";

export function useProfile(id) {
  const start = {
    email: "tv@gmail.com",
    nickname: "username",
    avatar: "https://i.pinimg.com/236x/af/de/72/afde727d75f5aa585c407cd89910cb80.jpg",
  };

  const [datos, setData] = useState(start);

  const [resync, reFetch] = useState(true);

  useEffect(() => {
    fetch("https://pf-30b-backend-production.up.railway.app/users/profile/" + id, { method: "GET" })
      .then((answer) => answer.json())
      .then((answerjs) => setData(answerjs));
  }, [id, resync]);

  return { datos, reFetch, resync };
}
