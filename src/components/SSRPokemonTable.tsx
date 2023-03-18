import { store } from "@/store";
import PokemonTable from "./PokemonTable";


function SSRPokemonTable() {
  return (
    <div>
      <PokemonTable data={store.getState().search.results} />
    </div>
  );
}

export default SSRPokemonTable;
