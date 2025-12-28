import React, { ReactNode } from "react";

interface StackedTableProps {
  data: {
    level: ReactNode;
    days: Record<string, string>;
    total: string;
    note: string;
  }[];
}

export function Table({ data }: StackedTableProps) {
  const visibleDays = Object.keys(data[0]?.days || {}).filter((day) =>
    data.some(
      (row) =>
        row.days[day] &&
        row.days[day].trim() !== "" &&
        row.days[day].trim() !== "-"
    )
  );

  return (
    <>
      {/* Desktop table */}
      <div className="hidden lg:block overflow-x-auto mb-8">
        <table className="w-full border border-[#ddd] text-left text-black leading-[22px] ">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-4 font-semibold text-gray-700">Nivo</th>
              {visibleDays.map((day) => (
                <th key={day} className="px-4 py-4 font-semibold text-gray-700">
                  {day}
                </th>
              ))}
              <th className="px-4 py-4 font-semibold text-gray-700">Ukupno</th>
              <th className="px-4 py-4 font-semibold text-gray-700">
                Napomena
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.level?.toString()}>
                <td className="px-4 py-2 font-semibold">{row.level}</td>
                {visibleDays.map((day) => (
                  <td key={day} className="px-4 py-2">
                    {row.days[day]}
                  </td>
                ))}
                <td className="px-4 py-2 ">{row.total}</td>
                <td className="px-4 py-2 font-medium">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col gap-6 mb-8">
        {data.map((row) => (
          <div
            key={row.level?.toString()}
            className="border border-[#ddd] p-4 rounded-md"
          >
            <h4 className="font-semibold text-lg mb-2">{row.level}</h4>
            <ul className="space-y-1">
              {visibleDays.map((day) => (
                <li key={day}>
                  <span className="font-semibold">{day}:</span> {row.days[day]}
                </li>
              ))}
            </ul>
            <p className="mt-2 ">Ukupno: {row.total}</p>
            <p className="font-medium ">{row.note}</p>
          </div>
        ))}
      </div>
    </>
  );
}
