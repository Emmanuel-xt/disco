"use client";

import React, { useEffect, useState } from "react";

interface Users {
  _id: string;
  level: string;
  role: string;
  fullname: string;
  department: string;
  password: string;
  createdAt: string;
}

const YearThree = () => {
  const formatCreatedAtDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    let suffix = "th";
    if (day === 1 || day === 21 || day === 31) suffix = "st";
    else if (day === 2 || day === 22) suffix = "nd";
    else if (day === 3 || day === 23) suffix = "rd";
    return `${day}${suffix} ${month}, ${year}`;
  };

  const [students, setStudents] = useState<Users[]>([]);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch Students");
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching Students:", error);
      }
    };

    fetchStudents();
  }, []);
  return (
    <div>
      <h6 className="font-bold">All 300lv Students</h6>
      <div className="w-full flex bg-slate-950 rounded-t-lg p-2 border-b-black">
        <h6 className="flex-1 md:text-sm text-[10px]">Name</h6>
        <h6 className="flex-1 md:text-sm text-[10px]">Department</h6>
        <h6 className="flex-1 md:text-sm text-[10px]">Password</h6>
        <h6 className="flex-1 md:text-sm text-[10px]">Registered on</h6>
      </div>
      {students.map((student) =>
        student.level == "300" && student.role == 'student' ? (
          <>
            <div>
              <div className="flex w-full bg-slate-900">
                <div className="w-full flex -t-lg p-2 ">
                  <h6 className="flex-1 md:text-sm text-[10px]">{student.fullname}</h6>
                  <h6 className="flex-1 md:text-sm text-[10px]">{student.department}</h6>
                  <h6 className="flex-1 md:text-sm text-[10px]">{student.password}</h6>
                  <h6 className="flex-1 md:text-sm text-[10px]">
                    {formatCreatedAtDate(student.createdAt)}
                  </h6>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default YearThree;
