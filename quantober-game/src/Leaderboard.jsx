import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate()
  const [leaderboardData, setLeaderboardData] = useState([]) ;

  useEffect(()=>{

    if(!localStorage.getItem('email')) navigate('/signup')

    async function getScores() {
      const res = await axios.get(process.env.REACT_APP_BACKEND_URL + '/score')
      const arr = res.data.users.filter((entry)=>{
        if(entry.score !== -1) return entry
        return null
      })
      console.log(arr.sort((a,b)=>   b.score - a.score ))
      setLeaderboardData( arr.sort((a,b)=>  b.score - a.score) )
    }

    getScores()
  }, [navigate] )

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center  min-h-screen bg-[#1a202c] text-white">
        <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
        <div className="min-w-[600px] max-h-[70%] overflow-y-auto bg-[#2d3748] rounded-lg p-6 shadow-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#4a5568] text-white">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => (
                <tr key={index} className="border-t border-gray-600">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
