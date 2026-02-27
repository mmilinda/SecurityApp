import CountUp from "react-countup";
import { ShieldCheck, Users, Clock, Award } from "lucide-react";

const Stats = () => {
  return (
    <section className="py-5 bg-light text-center">
      <h2 className="text-3xl font-bold mb-6">Statistiques</h2>
      <br />
      <div className="container">
        <div className="row">

          {/* Card 1 */}
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card bg-gradient-primary text-white shadow h-100 p-4 rounded">
              <ShieldCheck size={40} className="mb-3" />
              <h2 className="fw-bold">
                <CountUp end={250} duration={3} />+
              </h2>
              <p className="mb-0">Clients satisfaits</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card bg-gradient-success text-white shadow h-100 p-4 rounded">
              <Users size={40} className="mb-3" />
              <h2 className="fw-bold">
                <CountUp end={100} duration={3} />+
              </h2>
              <p className="mb-0">Agents qualifiés</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card bg-gradient-warning text-white shadow h-100 p-4 rounded">
              <Award size={40} className="mb-3" />
              <h2 className="fw-bold">
                <CountUp end={15} duration={3} />
              </h2>
              <p className="mb-0">Années d'expérience</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card bg-gradient-danger text-white shadow h-100 p-4 rounded">
              <Clock size={40} className="mb-3" />
              <h2 className="fw-bold">24/7</h2>
              <p className="mb-0">Disponibilité</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;