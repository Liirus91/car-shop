import { Hero, Search } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalog</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <Search />
        </div>
      </div>
    </main>
  );
}
