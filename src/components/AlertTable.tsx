import { useQuery } from "@tanstack/react-query";
import { alertListOptions } from "../api/queries";
import { AlertRow } from "./AlertRow";

import "./AlertTable.css"


export function AlertTable() {
  const { data: alerts, isPending } = useQuery(alertListOptions())

  if (isPending) {
    return <p> waiting for data</p>
  }

  const missions = alerts.map((a) => AlertRow(a))

  return <div className="missions">
    {missions}
  </div>

}
