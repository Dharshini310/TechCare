import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from "chart.js";

import "../styles/DiagnosisHistory.css";
import respiratory_rate from "../assets/respiratory.png"
import temp from "../assets/temp.png";
import heart from "../assets/heart.png";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function DiagnosisHistory() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const username = "coalition";
    const password = "skills-test";
    const token = btoa(`${username}:${password}`);

    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: { Authorization: `Basic ${token}` }
    })
      .then((res) => res.json())
      .then((resData) => {
        const jessica = resData.find((p) => p.name === "Jessica Taylor");
        setData(jessica);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  const filteredHistory = data.diagnosis_history.filter(item => {
    const year = item.year;
    const month = item.month.toLowerCase();
    const allowedMonths2023 = ["oct", "nov", "dec"];
    const allowedMonths2024 = ["jan", "feb", "mar"];
    if (year === 2023 && allowedMonths2023.includes(month.slice(0, 3))) return true;
    if (year === 2024 && allowedMonths2024.includes(month.slice(0, 3))) return true;
    return false;
  }).reverse();

  const months = filteredHistory.map(item => `${item.month} ${item.year}`);
  const systolic = filteredHistory.map(item => item.blood_pressure.systolic.value);
  const diastolic = filteredHistory.map(item => item.blood_pressure.diastolic.value);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Systolic",
        data: systolic,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 6,
      },
      {
        label: "Diastolic",
        data: diastolic,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: false, grid: { color: "#eee" } },
      x: { grid: { display: false } },
    },
  };

  const lastRecord = data.diagnosis_history[0];

  return (
    <div className="diagnosis" style={{ background: "#F4F0FE", padding: 24, borderRadius: 12, maxWidth: 730 ,marginTop: 15 , height:"fit-content"}}>
      <div className="diagnosis-header" style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <h3 style={{ margin: 0, fontWeight: "600" }}>Blood Pressure</h3>
        <span style={{ fontSize: 12, color: "#666" }}>Last 6 months</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>

        <div style={{ flex: 1 }}>
          <Line data={chartData} options={chartOptions} height={180} />
        </div>

        <div style={{ width: 140, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
          <div style={{ color: "#E66FD2", textAlign: "center" }}>
            <div style={{ fontWeight: "600", fontSize: 14 }}>Systolic</div>
            <div style={{ fontWeight: "700", fontSize: 28 }}>{lastRecord.blood_pressure.systolic.value}</div>
            <div style={{ fontSize: 12 }}>Higher than Average</div>
          </div>

          <div style={{ color: "#8C6FE6", textAlign: "center" }}>
            <div style={{ fontWeight: "600", fontSize: 14 }}>Diastolic</div>
            <div style={{ fontWeight: "700", fontSize: 28 }}>{lastRecord.blood_pressure.diastolic.value}</div>
            <div style={{ fontSize: 12 }}>Lower than Average</div>
          </div>
        </div>
      </div>

      <div className="vitals" style={{ display: "flex", gap: 20, marginTop: 24 }}>
        <div className="vital-card" style={{ flex: 1, background: "#D9F0FD", borderRadius: 12, padding: 16, textAlign: "center" }}>
            <img src={respiratory_rate} alt="loading.."/>
          <h4 style={{ margin: "0 0 8px 0" }}>Respiratory Rate</h4>
          <h2 style={{ margin: 0 }}>{lastRecord.respiratory_rate.value} bpm</h2>
          <span style={{ fontSize: 12, color: "#333" }}>{lastRecord.respiratory_rate.levels}</span>
        </div>
        <div className="vital-card" style={{ flex: 1, background: "#FBD9D9", borderRadius: 12, padding: 16, textAlign: "center" }}>
          <img src={temp} alt="loading.."/>
          <h4 style={{ margin: "0 0 8px 0" }}>Temperature</h4>
          <h2 style={{ margin: 0 }}>{lastRecord.temperature.value}°F</h2>
          <span style={{ fontSize: 12, color: "#333" }}>{lastRecord.temperature.levels}</span>
        </div>
        <div className="vital-card" style={{ flex: 1, background: "#F9D9F1", borderRadius: 12, padding: 16, textAlign: "center" }}>
          <img src={heart} alt="loading.."/>
          <h4 style={{ margin: "0 0 8px 0" }}>Heart Rate</h4>
          <h2 style={{ margin: 0 }}>{lastRecord.heart_rate.value} bpm</h2>
          <span style={{ fontSize: 12, color: "#333" }}>{lastRecord.heart_rate.levels}</span>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisHistory;
