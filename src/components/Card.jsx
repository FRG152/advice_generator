import Dice from "../assets/icon-dice.svg";
import { useEffect, useState } from "react";

const Card = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const { slip } = data;
        setApiData(slip);
      })
      .finally(() => setLoading(true));
  }, []);

  const handleNext = () => {
    setLoading(false);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const { slip } = data;
        setApiData(slip);
      })
      .finally(() => setLoading(true));
  };
  return (
    <section className="bg-DarkGrayishBlue relative rounded-lg w-[100%] p-12 md:w-[700px]">
      <article>
        <h1 className="text-NeonGreen text-center text-3xl font-bold mb-8">
          Adivce # {apiData?.id}
        </h1>
        {loading ? (
          <p className="text-LightCyan text-4xl text-center font-semibold">
            "{apiData?.advice}"
          </p>
        ) : (
          <p className="text-LightCyan text-4xl text-center font-semibold">
            Loading...
          </p>
        )}
        <div className="line"></div>
        <div
          onClick={() => handleNext()}
          className="flex items-center justify-center rounded-full cursor-pointer h-[80px] w-[80px] bg-NeonGreen absolute left-0 right-0 -bottom-10 m-auto transition-all hover:shadow-lg hover:shadow-NeonGreen"
        >
          <img src={Dice} alt="icon-dice.svg" />
        </div>
      </article>
    </section>
  );
};

export default Card;
