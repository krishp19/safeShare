"use client";

import { Shield, Upload, File } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SideNav() {
  const router = useRouter(); // Hook for navigation
  const [activeIndex, setActiveIndex] = useState(0);

  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files", 
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade", 
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
      {/* Logo */}
      <div className="p-5">
        <Image src="/logo.svg" width={150} height={100} alt="Logo" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col mt-4">
        {menuList.map((item, index) => (
          <button
            key={item.id} // Add key for React rendering optimization
            className={`flex items-center gap-2 p-4 px-6 ml-3 w-full text-left hover:rounded-md ${
              activeIndex === index
                ? "bg-white text-blue-700 dark:bg-black dark:text-blue-700"
                : "text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
            onClick={() => {
              setActiveIndex(index); // Highlight active button
              router.push(item.path); // Navigate to the route
            }}
          >
            <item.icon className="w-5 h-5" />
            <h2 className="font-medium">{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
