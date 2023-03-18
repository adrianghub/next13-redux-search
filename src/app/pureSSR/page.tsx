import { store } from "@/store";
import { setResults } from "@/store/searchSlice";

import SSRPokemonTable from "@/components/SSRPokemonTable";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();

  store.dispatch(setResults(data));

  return (
    <main>
      <SSRPokemonTable />    
    </main>
  );
}
