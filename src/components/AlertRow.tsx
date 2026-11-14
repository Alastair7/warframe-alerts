import { formatDuration, intervalToDuration } from "date-fns"
import type { Alert } from "../domain/alert"
import "./AlertRow.css"
import { MissionDetails } from "./Mission"

export function AlertRow(alert: Alert) {
  const alertExpiration = new Date(alert.expiry)
  const alertStart = new Date(alert.activation)

  const duration = intervalToDuration({
    start: alertStart,
    end: alertExpiration
  })

  const remaining = formatDuration(duration)




  return <div className="alert__row">
    <MissionDetails details={alert.mission} expiry={remaining} />
  </div>
}

