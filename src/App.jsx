import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import FilterButtons from "./components/FilterButtons";
import ListItems from "./components/ListItems";
import { useState } from "react";

const urunler = [
  { id: 1, name: "yumurta", completed: true },
  { id: 2, name: "süt", completed: false },
  { id: 3, name: "balık", completed: false },
  { id: 4, name: "tavuk", completed: true },
];

export default function App() {
  const [items, setItems] = useState(urunler);
  const [filterButton, setFilterButton] = useState("all");

  function handleItem(item) {
    setItems((items) => [...items, item]);
    setFilterButton("all");
  }
  function handleDelete(id) {
    setItems((items) => items.filter((i) => i.id != id));
  }
  function handleUpdate(id) {
    const updatedItems = (items) =>
      items.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      );
    setItems(updatedItems);
  }

  function handleClear() {
    setItems([]);
  }

  return (
    <div className="container">
      <Header />
      <AddItemForm onAddItem={handleItem} />
      {items.length > 0 && (
        <FilterButtons
          filterButton={filterButton}
          setFilterButton={setFilterButton}
          onClear={handleClear}
        />
      )}

      <ListItems
        urunler={items}
        onDeleteItem={handleDelete}
        filterButton={filterButton}
        onUpdateItem={handleUpdate}
      />
    </div>
  );
}
