import React, { useEffect, useState } from 'react';
import { db, auth } from "../firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function ChartComponent() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "users", auth.currentUser.uid, "evacuazioni"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Raggruppa i dati per data e somma il contatore
      const dates = {};
      data.forEach(item => {
        if (item.createdAt) {
          const date = item.createdAt.toDate().toLocaleDateString();
          dates[date] = (dates[date] || 0) + item.contatore;
        }
      });
      const labels = Object.keys(dates).reverse();
      const values = labels.map(label => dates[label]);
      setChartData({
        labels,
        datasets: [{
          label: 'Evacuazioni giornaliere',
          data: values,
          fill: false,
          borderColor: 'blue'
        }]
      });
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Grafico Settimanale</h3>
      {chartData ? (
        <Line data={chartData} />
      ) : (
        <p>Caricamento grafico...</p>
      )}
    </div>
  );
}

export default ChartComponent;
