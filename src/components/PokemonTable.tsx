import { Pokemon } from "@/types";

const PokemonTable = ({ data }: { data: Pokemon[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pokemon) => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
