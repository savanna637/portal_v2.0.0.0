import React, { useState } from "react";


export default function PopupForm({ onSubmit, onClose }) {
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [workSpot, setWorkSpot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, startHour, endHour, workSpot });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">POPOUPFORM KOMPONENS</h2>
        <form onSubmit={handleSubmit}>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="border p-2 w-full mb-2" />
          <input type="time" value={startHour} onChange={e => setStartHour(e.target.value)} required className="border p-2 w-full mb-2" />
          <input type="time" value={endHour} onChange={e => setEndHour(e.target.value)} required className="border p-2 w-full mb-2" />
          <input type="text" placeholder="Work spot" value={workSpot} onChange={e => setWorkSpot(e.target.value)} required className="border p-2 w-full mb-4" />
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
