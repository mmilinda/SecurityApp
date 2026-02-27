export default function Team() {
  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Notre Équipe</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <img
            src="Alice.jpg"
            alt="Alice"
            className="w-full rounded mb-2"
          />
          <h3 className="font-bold">Alice</h3>
          <p>Chef de sécurité</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img
            src="Bob.jpg"
            alt="Bob"
            className="w-full rounded mb-2"
          />
          <h3 className="font-bold">Bob</h3>
          <p>Agent de terrain</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img
            src="Charlie.jpg"
            alt="Charlie"
            className="w-full rounded mb-2"
          />
          <h3 className="font-bold">Charlie</h3>
          <p>Surveillance</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img
            src="Diana.jpg"
            alt="Diana"
            className="w-full rounded mb-2"
          />
          <h3 className="font-bold">Diana</h3>
          <p>Coordination</p>
        </div>
      </div>
    </section>
  );
}