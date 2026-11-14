import type { Mission } from "../domain/mission";
import grineer_icon from "./../assets/icons/grineer-icon.png"

import "./Mission.css"

type MissionDetailsProps = {
  details: Mission
  expiry: string
}
export const MissionDetails = ({ details, expiry }: MissionDetailsProps) => {
  const rewards = details.reward.countedItems.map((item) => item.key).join(",")


  return <div className="mission">
    <div className="faction__wrapper">
      <img className="mission__faction" src={grineer_icon} />
    </div>

    <div className="mission__details">
      <div className="mission__header">
        <h1 className="mission__description">{details.description}</h1>
        <h2 className="mission__rewards">{rewards}</h2>
      </div>

      <div className="mission__identification">
        <p className="mission__location">{details.nodeKey}</p>
        <h2 className="mission__credits">Credits: {details.reward.credits}</h2>
        <p className="mission__expiry">{expiry}</p>
      </div>


    </div>

  </div>
}
