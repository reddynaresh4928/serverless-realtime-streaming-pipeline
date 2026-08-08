"use client";

import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download, FileText } from "lucide-react";

export default function ExportButtons({ events }) {
  const exportCSV = () => {
    if (!events.length) return;

    const headers = [
      "Device ID",
      "Temperature",
      "Humidity",
      "Timestamp",
    ];

    const rows = events.map((event) => [
      event.deviceId,
      event.temperature,
      event.humidity,
      new Date(event.timestamp).toLocaleString("en-IN"),
    ]);

    const csv =
      [headers, ...rows]
        .map((row) => row.join(","))
        .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "iot-events.csv");
  };

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("IoT Monitoring Report", 14, 18);

    doc.setFontSize(11);
    doc.text(
      `Generated: ${new Date().toLocaleString("en-IN")}`,
      14,
      28
    );

    autoTable(doc, {
      startY: 38,
      head: [[
        "Device",
        "Temperature",
        "Humidity",
        "Timestamp",
      ]],
      body: events.map((event) => [
        event.deviceId,
        `${event.temperature}°C`,
        `${event.humidity}%`,
        new Date(event.timestamp).toLocaleString("en-IN"),
      ]),
      styles: {
        fontSize: 10,
      },
      headStyles: {
        fillColor: [37, 99, 235],
      },
    });

    doc.save("iot-report.pdf");
  };

  return (
    <div className="mb-6 flex flex-wrap justify-end gap-4">

      <button
        onClick={exportCSV}
        className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700"
      >
        <Download size={18} />
        Export CSV
      </button>

      <button
        onClick={exportPDF}
        className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-red-700"
      >
        <FileText size={18} />
        Export PDF
      </button>

    </div>
  );
}