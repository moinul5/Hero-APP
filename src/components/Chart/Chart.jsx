import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';


const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};

export default function CustomizeLegendAndTooltipStyle({ratings}) {
    const data = ratings
    
  return (
    <BarChart
      width={1000}
      height={300}
      data={data}
      margin={margin}
      layout="vertical" 
    >
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis type="number" /> 
      <YAxis dataKey="name" type="category" /> 
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
     
      <Bar dataKey="count" fill="#FF8811" barSize={20} />
    </BarChart>
  );
}
