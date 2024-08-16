import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import axios from "axios";
import { LuAlarmClock } from "react-icons/lu";
import { PiBowlFood } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function Recipe() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipe")
      .then((response) => {
        setData(response.data.recipes);
      })
      .catch((error) => {
        console.error("Error Occurred");
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.title}>
          <h1 className={styles.heading}>Food Recipes</h1>
          <div>Browse for more recipes</div>
        </div>
        <button className={styles.btn}>More Recipes</button>
        <div className={styles.cards}>
          {data.map((item) => {
            return (
              <div
                className={styles.card}
                onClick={() => {
                  navigate(`/recipe/${item.id}`);
                }}
                key={item.id}
              >
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  className={styles.image}
                ></div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.time}>
                  <LuAlarmClock className={styles.icon} />
                  <div>{item.cookTimeMinutes} Minutes</div>
                </div>
                <div className={styles.servings}>
                  <PiBowlFood className={styles.icon} />
                  <div>{item.servings} Servings</div>
                </div>
                <div className={styles.calories}>
                  {item.caloriesPerServing} Calories
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
