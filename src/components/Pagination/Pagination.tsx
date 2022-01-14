import { Pagination as MUIPagination } from "@mui/material";

interface IPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onChange: (pageNumber: number) => void;
}

export default function Pagination(props: IPaginationProps) {
  const { totalItems, itemsPerPage, currentPage, onChange } = props;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <MUIPagination
      count={Math.ceil(totalItems / itemsPerPage)}
      page={currentPage}
      onChange={handleChange}
    />
  );
}
