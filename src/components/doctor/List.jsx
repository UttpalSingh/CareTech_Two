import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [patients, setPatients] = useState([
    {
      id: "CT98990",
      name: "Rahul Sharma",
      chiefComplaint: "Chest pain and shortness of breath",
      priority: "High",
      isCompleted: false,
    },
    {
      id: "CT47281",
      name: "Priya Verma",
      chiefComplaint: "Recurring headache and dizziness",
      priority: "Medium",
      isCompleted: false,
    },
    {
      id: "CT73164",
      name: "Amit Kumar",
      chiefComplaint: "Joint pain and stiffness",
      priority: "Low",
      isCompleted: false,
    },
    {
      id: "CT25843",
      name: "Sneha Singh",
      chiefComplaint: "Stomach pain and indigestion",
      priority: "Medium",
      isCompleted: false,
    },
    {
      id: "CT84629",
      name: "Vikas Gupta",
      chiefComplaint: "Persistent cough and breathing difficulty",
      priority: "High",
      isCompleted: false,
    },
    {
      id: "CT31572",
      name: "Neha Patel",
      chiefComplaint: "Sleep problems and fatigue",
      priority: "Low",
      isCompleted: false,
    },
  ]);

  const navigate = useNavigate()

  const handleCheckbox = (id) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === id
          ? { ...patient, isCompleted: !patient.isCompleted }
          : patient,
      ),
    );
  };

  const getPriorityStyle = (priority) => {
    if (priority === "High") {
      return "bg-red-50 text-red-600 border border-red-200";
    }

    if (priority === "Medium") {
      return "bg-amber-50 text-amber-600 border border-amber-200";
    }

    return "bg-green-50 text-green-600 border border-green-200";
  };

  function managePage(){
    navigate("/patient")
  }

  return (
    <div className="min-h-screen w-full bg-[#f3fafa] flex justify-center">
      <div className="min-h-screen w-full max-w-[140vh] px-4 md:px-8">
        {/* Navbar */}
        <nav className="h-[9vh] w-full border-b border-[#d8eeee] bg-white">
          <div className="mx-auto flex h-full items-center justify-between">
            {/* Left Side */}
            <div className="flex h-14 items-center">
              <img
                src="/images/Ayush.png"
                alt="AYUSH"
                className="h-full w-auto object-contain"
              />

              <div className="mx-5 h-10 w-px bg-gray-200"></div>

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-[#005f73]">
                  CareTech +
                </span>
              </div>
            </div>

            {/* Right Side */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#0a9396]"></div>

              <span className="text-sm font-semibold text-gray-600">
                Patient Records
              </span>
            </div>
          </div>
        </nav>

        {/* Main Section */}
        <main className="py-8">
          <div className="mb-7">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h1 className="text-3xl font-bold text-[#005f73] md:text-4xl">
                  Patient List
                </h1>
              </div>

              <div className="rounded-2xl border border-[#d8eeee] bg-white px-5 py-3 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Total Patients
                </p>

                <p className="mt-1 text-2xl font-bold text-[#005f73]">
                  {patients.length}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#d8eeee] bg-white shadow-[0_15px_45px_rgba(0,95,115,0.08)]">
            <div className="hidden grid-cols-[1.1fr_1.4fr_3fr_1.2fr_1fr] items-center gap-4 bg-[#eef9f9] px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#005f73] md:grid">
              <div>ID</div>

              <div>Name</div>

              <div>Chief Complaint</div>

              <div>Priority</div>

              <div className="text-center">Completed</div>
            </div>

            {/* Patient Rows */}
            <div className="divide-y divide-[#e6f1f1]">
              {patients.map((patient) => (
                <button
                  key={patient.id}
                  type="button"
                    onClick={managePage}
                  className="grid w-full gap-4 px-5 py-5 text-left transition-colors cursor-pointer hover:bg-[#f7fcfc] md:grid-cols-[1.1fr_1.4fr_3fr_1.2fr_1fr] md:items-center md:px-6"
                >
                  {/* ID */}
                  <div>
                    <p className="text-xs font-medium text-gray-400 md:hidden">
                      ID
                    </p>

                    <span className="font-mono text-sm font-semibold text-[#005f73]">
                      {patient.id}
                    </span>
                  </div>

                  {/* Name */}
                  <div>
                    <p className="text-xs font-medium text-gray-400 md:hidden">
                      Name
                    </p>

                    <p className="font-semibold text-gray-800">
                      {patient.name}
                    </p>
                  </div>

                  {/* Chief Complaint */}
                  <div>
                    <p className="text-xs font-medium text-gray-400 md:hidden">
                      Chief Complaint
                    </p>

                    <p className="text-sm leading-6 text-gray-600">
                      {patient.chiefComplaint}
                    </p>
                  </div>

                  {/* Priority */}
                  <div>
                    <p className="mb-1 text-xs font-medium text-gray-400 md:hidden">
                      Priority
                    </p>

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getPriorityStyle(
                        patient.priority,
                      )}`}
                    >
                      {patient.priority}
                    </span>
                  </div>

                  {/* Completed */}
                  <div
                    className="flex items-center md:justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p className="mr-3 text-xs font-medium text-gray-400 md:hidden">
                      Completed
                    </p>

                    <input
                      type="checkbox"
                      checked={patient.isCompleted}
                      onChange={() => handleCheckbox(patient.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="h-5 w-5 cursor-pointer accent-[#005f73]"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default List;
