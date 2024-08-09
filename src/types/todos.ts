export type TTodo = {
	id: string;
	value: string;
	check: boolean;
};

export interface ITodosState {
	todos: TTodo[];
}
