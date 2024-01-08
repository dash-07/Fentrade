import { Link } from "react-router-dom";
import Service from "./Service";

export default function ExchangeChart() {
  return (
    <div className="rounded-xl w-[95%] mx-auto bg-[rgba(0,0,0,.3)] shadow-md backdrop-filter backdrop-blur-[10px] md:w-80 md:justify-self-end md:mx-3">
      <Service
        icon="https://cardeaze-data-1320110152.cos.eu-frankfurt.myqcloud.com/images/card/apple.png"
        title="Apple/iTunes"
        rates={["🇺🇸 US, ≈₦845", "🇨🇦 CAD, ≈₦645"]}
      />
      <Service
        icon="https://cardeaze-data-1320110152.cos.eu-frankfurt.myqcloud.com/images/card/paypal.png"
        title="Paypal"
        rates={["🇺🇸 US, ≈₦870"]}
      />
      <Service
        icon="https://cardeaze-data-1320110152.cos.eu-frankfurt.myqcloud.com/images/card/steam.png"
        title="Steam"
        rates={["🇺🇸 US,≈₦780", "🇪🇺 Euro, ≈₦840"]}
      />
      <Service
        icon="https://cardeaze-data-1320110152.cos.eu-frankfurt.myqcloud.com/images/card/razergold.png"
        title="Razer Gold"
        rates={["🇺🇸 US, ≈₦925"]}
      />
      <Link
        to="/rates"
        className="mx-auto w-fit flex text-[var(--blue)] transition hover:text-blue-300"
      >
        More »
      </Link>
    </div>
  );
}
