import { List, ListItem, ListItemText } from "@mui/material";
import { Countries, Country } from "../../models/Country";

export default function CountryList({
  countries,
}: {
  countries: Countries | undefined;
}) {
  return (
    <List>
      {countries &&
        countries.map((country: Country) => (
          <ListItem key={country.name}>
            <ListItemText primary={country.name} secondary={country.capital} />
          </ListItem>
        ))}
    </List>
  );
}
