import { LineChart as LC, Line,XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const studentMarksData = [
        { id: 1, name: "Alice", math: 78, physics: 82, ai: 75 },
        { id: 2, name: "Bob", math: 85, physics: 79, ai: 80 },
        { id: 3, name: "Charlie", math: 92, physics: 91, ai: 89 },
        { id: 4, name: "David", math: 67, physics: 72, ai: 65 },
        { id: 5, name: "Eva", math: 88, physics: 85, ai: 90 },
        { id: 6, name: "Frank", math: 74, physics: 70, ai: 78 },
        { id: 7, name: "Grace", math: 95, physics: 94, ai: 92 },
        { id: 8, name: "Hannah", math: 81, physics: 83, ai: 77 },
        { id: 9, name: "Ian", math: 70, physics: 68, ai: 69 },
        { id: 10, name: "Jack", math: 90, physics: 88, ai: 91 }
      ];
      
     
    return (
        <div>
            <LC width={800} height={400} data={studentMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis ></YAxis>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='yellow'></Line>
                <Line dataKey={'ai'} stroke='blue'></Line>
            </LC>
        </div>
    );
};

export default LineChart;