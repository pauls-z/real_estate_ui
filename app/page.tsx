"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, ArrowDownRight, DollarSign, Home, TrendingUp, Users } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
  { name: 'Jul', value: 349 },
  { name: 'Aug', value: 430 },
  { name: 'Sep', value: 360 },
  { name: 'Oct', value: 450 },
  { name: 'Nov', value: 410 },
  { name: 'Dec', value: 500 },
]

const listings = [
  { id: '2024081001', name: 'Luxury Condo - Downtown', units: 1, startDate: '2024-08-10', status: 'Active', progress: 75 },
  { id: '2024081002', name: 'Suburban Family Home', units: 1, startDate: '2024-08-08', status: 'Pending', progress: 50 },
  { id: '2024081003', name: 'Beachfront Villa', units: 1, startDate: '2024-08-12', status: 'Sold', progress: 100 },
  { id: '2024081004', name: 'Mountain Retreat Cabin', units: 1, startDate: '2024-08-11', status: 'Active', progress: 25 },
]

// Custom XAxis component with default props
const CustomXAxis = ({ hide = false, ...props }) => <XAxis hide={hide} {...props} />;

// Custom YAxis component with default props
const CustomYAxis = ({ hide = false, ...props }) => <YAxis hide={hide} {...props} />;

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* ... (rest of the component remains the same) ... */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <CustomXAxis dataKey="name" />
                <CustomYAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Current Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {listings.map((listing) => (
                <div key={listing.id} className="flex items-center">
                  <div className="w-full">
                    <p className="text-sm font-medium">{listing.name}</p>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Start Date: {listing.startDate}</span>
                      <span>Status: {listing.status}</span>
                    </div>
                    <Progress value={listing.progress} className="mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}