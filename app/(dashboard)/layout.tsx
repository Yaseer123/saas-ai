import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex">
            <div className="hidden h-full md:flex md:w-72 md:flex-col z-[80] bg-gray-900 w-64">
                <Sidebar />
            </div>
            <div className="flex-1">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
