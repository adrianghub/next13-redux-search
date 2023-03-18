import { Preloader } from "@/components/Preloader";
import SearchInput from "@/components/SearchInput";
import { StoreProvider } from "@/components/StoreProvider";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();

  console.log(data);
  

  return (
    <main>
      <Preloader data={data}/>
      <StoreProvider>
        <SearchInput />
      </StoreProvider>
    </main>
  );
}
