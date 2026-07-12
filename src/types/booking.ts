export type BookingStatus = "pending" | "confirmed" | "done" | "cancelled";

export type Booking = {
  id: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  description: string | null;
  status: BookingStatus;
  createdAt: Date;
};
