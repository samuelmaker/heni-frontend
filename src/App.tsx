import { useState } from "react";
import { useQuery } from "@apollo/client";
import getCountries from "./graphql/queries/getCountries";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Pagination } from "@mui/material";

interface CountryData {
  name: string;
  capital: string;
  continent: { name: string };
}

interface CountryResponse {
  countries: CountryData[];
}

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<CountryResponse>(getCountries);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const TOTAL_COUNTRIES = data?.countries.length || 0;
  const POSTS_PER_PAGE = 10;
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const countriesDisplay = data?.countries.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <>
      <List>
        {countriesDisplay &&
          countriesDisplay.map((country) => (
            <ListItem>
              <ListItemText
                primary={country.name}
                secondary={country.capital}
              />
            </ListItem>
          ))}
      </List>
      <Pagination
        count={Math.ceil(TOTAL_COUNTRIES / POSTS_PER_PAGE)}
        page={currentPage}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
