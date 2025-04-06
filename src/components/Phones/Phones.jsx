import { useEffect, useState } from "react";
import axios from "axios"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
        const phoneData = data.data.data;
        const phonesWithFakeData= phoneData.map(phone=>{
            const obj={
                name: phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])

            }
            return obj;
        })
        console.log(phonesWithFakeData)
        setPhones(phonesWithFakeData)
        
    })

  }, []);

  return (
    <div>
        <h2 className="text-5xl">Phones: {phones.length}</h2>
        <BarChart
          width={1200}
          height={400}
          data={phones}
        //   margin={{
        //     top: 20,
        //     right: 30,
        //     left: 20,
        //     bottom: 5,
        //   }
        // }
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
         
          <Bar dataKey="price" stackId="a" fill="#8884d8" />

        </BarChart>
    </div>
  )
};

export default Phones;
