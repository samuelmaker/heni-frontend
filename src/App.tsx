import { useState } from "react";
import { useQuery } from "@apollo/client";

import Pagination from "./components/Pagination/Pagination";
import CountryList from "./components/CountryList/CountryList";

import GET_COUNTRIES from "./graphql/queries/getCountries";
import { GetCountries } from "./graphql/generated/GetCountries";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<GetCountries>(GET_COUNTRIES);

  const TOTAL_COUNTRIES = data?.countries.length || 0;
  const COUNTRIES_PER_PAGE = 5;

  const indexOfLastPost = currentPage * COUNTRIES_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - COUNTRIES_PER_PAGE;
  const countriesDisplay = data?.countries.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :(</p>;

  return (
    <>
      <CountryList countries={countriesDisplay} />
      <Pagination
        totalItems={TOTAL_COUNTRIES}
        itemsPerPage={COUNTRIES_PER_PAGE}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    </>
  );
}

export default App;
