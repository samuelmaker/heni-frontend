import { List, ListItem, ListItemText } from "@mui/material";
import { GetCountries_countries } from "../../graphql/generated/GetCountries";

interface ICountryListProps {
  countries: GetCountries_countries[] | undefined;
}

export default function CountryList(props: ICountryListProps) {
  const { countries } = props;
  return (
    <List>
      {countries &&
        countries.map((country: GetCountries_countries) => (
          <ListItem>
            <ListItemText primary={country.name} secondary={country.capital} />
          </ListItem>
        ))}
    </List>
  );
}
