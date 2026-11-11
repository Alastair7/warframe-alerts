import { useQuery } from "@tanstack/react-query";
import { alertListOptions } from "../api/queries";
import type { Alert } from "../domain/alert";


function AlertRow(alert: Alert) {
  const missionDate = new Date(alert.expiry).toLocaleString()

  return <>
    <img className="mission__faction" src="" />

    <div className="mission__details">
      <div className="mission_header">
        <h1 className="mission__description">{alert.mission.description}</h1>
        <h2 className="mission__rewards"></h2>
      </div>
      <h2 className="mission__credits">{alert.mission.reward.credits}</h2>
    </div >

    <div className="mission__identification">
      <p className="mission__expiration">{missionDate}</p>
      <p className="mission__location">{alert.mission.nodeKey}</p>
    </div>
  </>
}

export function AlertTable() {
  const { data: alerts, isPending } = useQuery(alertListOptions())

  if (isPending) {
    return <p> waiting for data</p>
  }

  const missions = alerts.map((a) => AlertRow(a))

  return <>
    {missions}
  </>

}
