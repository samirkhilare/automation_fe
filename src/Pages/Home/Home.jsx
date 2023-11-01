import React, { useState, useEffect } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import moment from "moment";

import {
  getDayProduction,
  getMonthProduction,
  getYearProduction,
} from "../../services/modalServices";

function Home() {
  const [productionCount, setProductionCount] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  console.log("productionCount : ", productionCount);

  const data = [
    {
      name: "Shift production",
      uv: 70,
    },
    {
      name: "Day production",
      uv: 280,
    },
    {
      name: "Month production",
      uv: 590,
    },
    {
      name: "Year production",
      uv: 1600,
    },
  ];

  const productionGraph = [{}];

  useEffect(() => {
    const fetchData = async () => {
      const date = moment(new Date());
      const mm = date.format("MM");
      const yy = date.format("YYYY");
      const dayProdCount = await getDayProduction();
      const monthProdCount = await getMonthProduction({ mm, yy });
      const yearProdCount = await getYearProduction({ yy });
      if (dayProdCount || monthProdCount || yearProdCount) {
        setProductionCount({
          ...productionCount,
          day: dayProdCount?.data?.length,
          month: monthProdCount?.data?.length,
          year: yearProdCount?.data?.length,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <button className="card">
          <div className="card-inner">
            <div>
              <span>Shift</span>
              <br />
              <span className="card-heading">PRODUCTIONS</span>
            </div>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>00</h1>
        </button>

        <button className="card">
          <div className="card-inner">
            <div>
              <span>Day</span>
              <br />
              <span className="card-heading">PRODUCTIONS</span>
            </div>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{productionCount?.day}</h1>
        </button>

        <button className="card">
          <div className="card-inner">
            <div>
              <span>Month</span>
              <br />
              <span className="card-heading">PRODUCTIONS</span>
            </div>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{productionCount?.month}</h1>
        </button>

        <button className="card">
          <div className="card-inner">
            <div>
              <span>Year</span>
              <br />
              <span className="card-heading">PRODUCTIONS</span>
            </div>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>{productionCount?.year}</h1>
        </button>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              dataKey="x"
              type="number"
              // ticks={[
              //   100, 400, 700, 1000, 4000, 7000, 10000, 13000, 16000, 19000,
              // ]}
              ticks={[10, 40, 70, 100, 400, 700, 1000, 1300, 1600, 1900]}
              domain={[10, 1000]}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
            <Bar dataKey="pv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
