import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { book, build, colorFill, grid } from "ionicons/icons";
import React from "react";
import "./Tab1.css";
import "./Tab1B.css";

const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Javascript</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Game />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

const Cell = () => {
  return <div className="cell" style={{ width: "33.3%" }} />;
};

const Footer = () => {
  return (
    <>
      <div className="message">Game Message Here...</div>
      <div className="button">
        <button>Start Game</button>
      </div>
    </>
  );
};

const Game = () => {
  return (
    <div className="game">
      <div className="grid">
        <Cell />
        <Cell />
        <Cell />

        <Cell />
        <Cell />
        <Cell />

        <Cell />
        <Cell />
        <Cell />
      </div>
      <Footer />
    </div>
  );
};

// Math science
const utils = {
  /* Create an array based on a numeric size property.
     Example: createArray(5) => [0, 1, 2, 3, 4] */
  createArray: size => Array.from({ length: size }, (_, i) => i),

  /* Pick random elements from origArray up to sampleSize
     And use them to form a new array.
     Example: sampleArray([9, 12, 4, 7, 5], 3) => [12, 7, 5] */
  sampleArray: (origArray, sampleSize) => {
    const copy = origArray.slice(0);
    const sample = [];
    for (let i = 0; i < sampleSize && i < copy.length; i++) {
      const index = Math.floor(Math.random() * copy.length);
      sample.push(copy.splice(index, 1)[0]);
    }
    return sample;
  },

  /* Given a srcArray and a crossArray, count how many elements 
     in srcArray exist or do not exist in crossArray.
     Returns an array like [includeCount, excludeCount]
     Example: arrayCrossCounts([0, 1, 2, 3, 4], [1, 3, 5]) => [2, 3] */
  arrayCrossCounts: (srcArray, crossArray) => {
    let includeCount = 0;
    let excludeCount = 0;
    srcLoop: for (let s = 0; s < srcArray.length; s++) {
      for (let c = 0; c < crossArray.length; c++) {
        if (crossArray[c] === srcArray[s]) {
          includeCount += 1;
          continue srcLoop;
        }
      }
      excludeCount += 1;
    }
    return [includeCount, excludeCount];
  }
};
