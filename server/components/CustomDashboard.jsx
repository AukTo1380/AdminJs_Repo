import React from "react";
import { Box, H2, Text, Illustration } from "@adminjs/design-system";
import { Chart } from "../components/Chart"; // You'll need to create this

export default () => (
  <Box
    p="xl"
    className="bg-gradient-to-r from-slate-50 to-blue-50 min-h-screen"
  >
    <H2 className="text-3xl font-bold text-slate-800 mb-8">
      📊 Dashboard Overview
    </H2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <Text className="text-slate-500 mb-2">Total Users</Text>
        <Text variant="xl" className="text-3xl font-bold text-blue-600">
          1,234
        </Text>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <Text className="text-slate-500 mb-2">Active Sessions</Text>
        <Text variant="xl" className="text-3xl font-bold text-green-600">
          89
        </Text>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <Text className="text-slate-500 mb-2">Storage Used</Text>
        <Text variant="xl" className="text-3xl font-bold text-purple-600">
          64%
        </Text>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Chart />
    </div>
  </Box>
);
