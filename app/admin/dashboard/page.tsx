import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminBookings from "@/components/AdminBookings";

export default async function AdminDashboard() {

  const user = await getUser();

  if (!user || user.role !== "admin") {
    redirect("/login");
  }

  return (
    <div className="main-layout">
      <Navbar />

      <div className="container mt-5 mb-5">
        <h2>Admin Booking Dashboard</h2>

        <AdminBookings />
      </div>

      <Footer />
    </div>
  );
}