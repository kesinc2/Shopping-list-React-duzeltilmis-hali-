export default function FilterButtons({ filterButton, setFilterButton , onClear  }) {
  return (
    <div className=" border rounded p-3 mb-3 d-flex justify-content-between">
      <div>
        <button
          item-filter="all"
          className={`btn me-1 ${
            filterButton === "all" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilterButton("all")}
        >
          All
        </button>

        <button
          item-filter="incomplete"
          className={`btn me-1 ${
            filterButton === "incomplete"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setFilterButton("incomplete")}
        >
          Incomplete
        </button>
        <button
          item-filter="completed"
          className={`btn me-1 ${
            filterButton === "completed" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilterButton("completed")}
        >
          Completed
        </button>
      </div>
      <button className="btn btn-outline-danger clear" onClick={onClear}>Clear</button>
    </div>
  );
}
