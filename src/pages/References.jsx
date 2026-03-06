import React from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";

export default function References() {

const logoSettings = {
dots: false,
infinite: true,
speed: 2000,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 0,
cssEase: "linear"
};

const testimonialSettings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true
};

return (

<div>

    {/* HERO */}

    <section className="bg-dark text-white text-center py-5">

    <div className="container">

    <h1 className="fw-bold">Nos Références</h1>

    <p className="lead">
    Des entreprises, organisations et événements qui nous font confiance
    </p>

    </div>

    </section>

    {/* LOGOS CLIENTS */}

    <section className="py-5">

    <div className="container text-center">

    <h2 className="mb-5">Ils nous font confiance</h2>

    <Slider {...logoSettings}>

    {[1,2,3,4,5,6,7,8].map((logo)=> (

    <div key={logo}>

    <img
    src="https://via.placeholder.com/200x80"
    className="img-fluid mx-auto"
    style={{filter:"grayscale(100%)"}}
    />

    </div>

    ))}

    </Slider>

    </div>

    </section>

    {/* TEMOIGNAGES */}

    <section className="py-5 bg-light">

        <div className="container">

        <h2 className="text-center mb-5">Témoignages</h2>

        <Slider {...testimonialSettings}>

            {/* <div> */}

                <div className="text-center">

                    <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="rounded-circle mb-3"
                    width="80"
                    />

                    <h5>Jean Dupont</h5>

                    <p className="text-muted">Directeur Logistique</p>

                    <p className="w-75 mx-auto">
                    Service de sécurité extrêmement professionnel.
                    Nous collaborons avec cette société depuis plusieurs années.
                    </p>

                </div>

            {/* </div> */}

            {/* <div> */}

                <div className="text-center">

                <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="rounded-circle mb-3"
                width="80"
                />

                <h5>Fatou Ndiaye</h5>

                <p className="text-muted">Responsable Événementiel</p>

                <p className="w-75 mx-auto">
                Une équipe très sérieuse et efficace pour nos événements.
                Je recommande fortement.
                </p>

                </div>

            {/* </div> */}

            {/* <div> */}

                <div className="text-center">

                    <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="rounded-circle mb-3"
                    width="80"
                    />

                    <h5>Marc Leroy</h5>

                    <p className="text-muted">Chef d'entreprise</p>

                    <p className="w-75 mx-auto">
                    Un service fiable avec des agents très bien formés.
                    </p>

                </div>

            {/* </div> */}

        </Slider>

        </div>

    </section>

    {/* STATISTIQUES */}

    <section className="py-5 bg-primary text-white">

    <div className="container text-center">

    <div className="row">

    <div className="col-md-3">

    <h2>
    <CountUp end={250} duration={3}/>+
    </h2>

    <p>Clients satisfaits</p>

    </div>

    <div className="col-md-3">

    <h2>
    <CountUp end={500} duration={3}/>+
    </h2>

    <p>Missions réalisées</p>

    </div>

    <div className="col-md-3">

    <h2>
    <CountUp end={120} duration={3}/>+
    </h2>

    <p>Agents qualifiés</p>

    </div>

    <div className="col-md-3">

    <h2>
    <CountUp end={10} duration={3}/>+
    </h2>

    <p>Années d'expérience</p>

    </div>

    </div>

    </div>

    </section>

    {/* ETUDE DE CAS */}

    <section className="py-5">

        <div className="container">

        <h2 className="text-center mb-5">Études de cas</h2>

            <div className="row">

                <div className="col-md-6">

                    <div className="card shadow border-0 p-4">

                    <h5>Sécurité d’un centre commercial</h5>

                    <p>
                    Déploiement de 15 agents de sécurité pour surveillance 24h/24.
                    </p>

                    <ul>

                    <li>Réduction de 40% des incidents</li>

                    <li>Patrouilles régulières</li>

                    <li>Contrôle d'accès</li>

                    </ul>

                    </div>

                </div>

            <div className="col-md-6">

            <div className="card shadow border-0 p-4">

            <h5>Sécurité événementielle</h5>

            <p>
            Gestion de la sécurité d’un événement de plus de 5000 participants.
            </p>

            <ul>

            <li>Zéro incident</li>

            <li>Gestion des flux</li>

            <li>Coordination avec autorités</li>

            </ul>

            </div>

            </div>

            </div>

        </div>

    </section>

</div>

);

}