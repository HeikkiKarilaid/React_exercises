import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
	const [items, setItems] = useState([]);

	function handleClear() {
		const confirmed = window.confirm(
			"Are you sure you want to delete all items?"
		);

		if (confirmed) setItems([]);
	}

	function handleAdd(item) {
		setItems((items) => [...items, item]);
	}

	function handleDelete(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAdd} />
			<PackingList
				items={items}
				onDeleteItem={handleDelete}
				onToggleItems={handleToggleItem}
				onClearList={handleClear}
			/>
			<Stats items={items} />
		</div>
	);
}
