import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Navbar from "../components/Navbar";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const revenueData = [
  {
    name: "Jan",
    revenue: 4000,
    users: 2400,
  },
  {
    name: "Feb",
    revenue: 3000,
    users: 1398,
  },
  {
    name: "Mar",
    revenue: 5000,
    users: 9800,
  },
  {
    name: "Apr",
    revenue: 7000,
    users: 3908,
  },
  {
    name: "May",
    revenue: 6000,
    users: 4800,
  },
  {
    name: "Jun",
    revenue: 8000,
    users: 3800,
  },
];

const pieData = [
  { name: "Product A", value: 30 },
  { name: "Product B", value: 25 },
  { name: "Product C", value: 20 },
  { name: "Product D", value: 25 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Welcome Back! 👋
        </h2>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Revenue</p>
                <p className="text-3xl font-bold text-blue-600">$25,000</p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
            <p className="text-green-600 text-sm mt-2">↑ 12% from last month</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Users</p>
                <p className="text-3xl font-bold text-green-600">12,500</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
            <p className="text-green-600 text-sm mt-2">↑ 8% from last month</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400">API Usage</p>
                <p className="text-3xl font-bold text-purple-600">2.1M</p>
              </div>
              <div className="text-4xl">⚡</div>
            </div>
            <p className="text-green-600 text-sm mt-2">↑ 15% from last month</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Conversions</p>
                <p className="text-3xl font-bold text-orange-600">4.2%</p>
              </div>
              <div className="text-4xl">📈</div>
            </div>
            <p className="text-green-600 text-sm mt-2">↑ 3% from last month</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue & Users Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Revenue & Users Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Revenue ($)"
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Users"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Comparison Chart
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
                <Bar dataKey="users" fill="#10b981" name="Users (100s)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Product Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Statistics Table */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Monthly Summary
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 px-4 text-gray-700 dark:text-gray-300">
                      Month
                    </th>
                    <th className="text-right py-2 px-4 text-gray-700 dark:text-gray-300">
                      Revenue
                    </th>
                    <th className="text-right py-2 px-4 text-gray-700 dark:text-gray-300">
                      Users
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {revenueData.map((data, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <td className="py-2 px-4 text-gray-600 dark:text-gray-400">
                        {data.name}
                      </td>
                      <td className="py-2 px-4 text-right text-gray-600 dark:text-gray-400">
                        ${data.revenue}k
                      </td>
                      <td className="py-2 px-4 text-right text-gray-600 dark:text-gray-400">
                        {data.users.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          <p>📊 Analytics Dashboard | Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;