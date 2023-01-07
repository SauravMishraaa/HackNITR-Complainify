import mongoose, { Date } from 'mongoose';

interface Complaint {
  title?: string;
  description?: string;
  image?: string;
  lat: number;
  long: number;
  date?: Date;
}

const complaintSchema = new mongoose.Schema<Complaint>({
  title: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  lat: {
    type: Number,
    min: -90,
    max: 90,
    // required: true,
  },
  long: {
    type: Number,
    min: -180,
    max: 180,
    // required: true,
  },
  date: {
    type: Date,
    // required: true,
  },
});

export default mongoose.model<Complaint>('complaints', complaintSchema);
