"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getOrders } from "./(api)/order.api";

export default function Home() {
  const [data, setData] = useState([]);

  const init = async () => {
    await getOrders().then((d) => {
      setData(d.data);
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <p className="text-[40px] text-center mb-6">Admin</p>
      <table>
        <thead>
          <tr>
            <td className="text-center p-4">id</td>

            <td className="text-center p-4">Хэрэглэгчийн нэр</td>

            <td className="text-center p-4">Хэрэглэгчийн утас</td>

            <td className="text-center p-4">Хэрэглэгчийн үйлчилгээ</td>

            <td className="text-center p-4">Хугацаа</td>

            <td className="text-center p-4">Үйлдэл</td>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                <td className="p-4 text-center">{d["_id"]}</td>
                <td className="p-4 text-center">{d["user"]["username"]}</td>
                <td className="p-4 text-center ">{d["user"]["phone"]}</td>
                <td className="p-4 text-center">{d["service"]["text"]}</td>
                <td className="p-4 text-center">{d["createdAt"]}</td>
                <td className="p-4 text-center">
                  <div className="bg-green-500 p-2 rounded-md">Нэмэх</div>
                </td>
                <td className="p-4 text-center">
                  <div className="bg-red-500 p-2 rounded-md">Болих</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
