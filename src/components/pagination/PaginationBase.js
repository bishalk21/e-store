import Pagination from "react-bootstrap/Pagination";

export const PaginationBase = ({ pages, active, handleOnPageChange }) => {
  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleOnPageChange(number)}
        // anonymous function means that the function is called when the event occurs, not before the event occurs.
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};
