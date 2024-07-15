import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import {ComposedChart, ResponsiveContainer, Area, Line, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const Dashboard = () => {
  const d = new Date();
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const { refetch, data: stats = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  return (
    <div className='w-full md:w-[870px] mx-auto px-4'>
      <h2 className='text-2xl font-semibold my-4'>Hi, {user.displayName}</h2>
      
      {/* stats div */}
      <div className="stats bg-slate-100 shadow-xl stats-vertical lg:stats-horizontal">

        <div className="stat outline-dotted outline-slate-300">
          <div className="stat-figure text-green text-3xl">
            <FaHandHoldingDollar/>
          </div>
          <div className="stat-title font-bold">Revenue</div>
          <div className="stat-value text-green"><span className='text-3xl'>$ </span>{stats.revenue}</div>
          <div className="stat-desc">1/07/2024 - {d.toLocaleDateString()}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-blue-600 text-3xl">
            <FaUsers/>
          </div>
          <div className="stat-title font-bold">Users</div>
          <div className="stat-value text-blue-600">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat outline-dotted outline-slate-300">
          <div className="stat-figure text-yellow-500 text-3xl">
            <BiSolidFoodMenu/>
          </div>
          <div className="stat-title font-bold">Menu Items</div>
          <div className="stat-value text-yellow-500">{stats.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-orange-600 text-3xl">
            <IoMdCart/>
          </div>
          <div className="stat-title font-bold">Orders</div>
          <div className="stat-value text-orange-600">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

      </div>


      {/* charts and graphs */}
      <div className='mt-8'>
        {/* Bar Chart */}
        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-4'>Revenue by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis dataKey='revenue'/>
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-4'>Quantity by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie data={chartData} dataKey="quantity" nameKey="category" cx="50%" cy="50%" innerRadius={80} outerRadius={120} fill="#8884d8">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      
        {/* Composed Chart */}
        <div>
          <h3 className='text-xl font-semibold mb-4'>Revenue and Quantity Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              data={chartData}
              margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" label={{ value: 'Category', position: 'insideBottomRight', offset: 0 }} scale="band" />
              <YAxis label={{ value: 'Revenue', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend iconSize={20} iconType='square'/>
              <Line type="monotone" dataKey="quantity" stroke="#ff7300" />
              <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={0.4} fill="#8884d8" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}

export default Dashboard