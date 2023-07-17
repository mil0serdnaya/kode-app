'use client';
import { useState, useEffect } from "react";
import { StyledContainer } from "./components/styled/StyledContainer";
import { TopBar } from "./components/TopBar";
import { Users } from "./components/Users";

export default function Page() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [filterText, setFilterText] = useState('');
  const [sortBy, setSortBy] = useState('alphabetically');

  const fetchUserData = () => {
    fetch(
      "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all",
    )
      .then((response) => {
        if (!response.ok) {
          setLoading(false);
          setError(true);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
        console.log(data)
      })
      .catch((err) => {
        setError(true);
        setUsers(null);
      });
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return(
    <StyledContainer>
      <TopBar />
      <Users />
    </StyledContainer>
  );
}