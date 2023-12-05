export default function Stats({ items }) {
	if (!items.length) {
		return (
			<p className="stats">
				<em>Packing list is empty. Start adding items!</em>
			</p>
		);
	}

	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percentPacked = Math.round((numPacked / numItems) * 100);
	return (
		<footer className="stats">
			<em>
				{percentPacked === 100
					? "You have packed all the items!"
					: `You have ${numItems} items on your list and you already packed
				 ${numPacked} 
				items, which is ${percentPacked} %`}
			</em>
		</footer>
	);
}
