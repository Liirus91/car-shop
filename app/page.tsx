import { CustomFilter, Hero, Search } from '@/components';
import { fetchCars } from '@/utils';

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
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

          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>We have cars</section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops... cars not found
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
