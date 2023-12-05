import { create } from 'zustand'

const useOrderTypeState = create((set) => ({
	orderType: "Delivery",
	toDineIn: () => set({ orderType: "Dine In"}),
	toPickUp: () => set({ orderType: "Pick Up" }),
	toDelivery: () => set({ orderType: "Delivery" }),
}))

const useOrderItems = create((set) => ({
	items: [],
	price: 0,
	numItems: 0,
	addItem: (newItem) =>
		set((state) => {
			const existingItemIndex = state.items.findIndex((item) => item.name === newItem.name);

			if (existingItemIndex !== -1) {
				// If the item already exists, modify the numberOfItems
				const updatedItems = [...state.items];
				updatedItems[existingItemIndex] = {
					...updatedItems[existingItemIndex],
					numberOfItems: updatedItems[existingItemIndex].numberOfItems + newItem.numberOfItems,
				};

				return {
					items: updatedItems,
					price: state.price + newItem.numberOfItems * newItem.price,
					numItems: state.numItems + newItem.numberOfItems,
				};
			} else {
				// If the item doesn't exist, add it to the items array
				return {
					items: [...state.items, newItem],
					price: state.price + newItem.numberOfItems * newItem.price,
					numItems: state.numItems + newItem.numberOfItems,
				};
			}
		}),
}));



export { useOrderTypeState, useOrderItems };