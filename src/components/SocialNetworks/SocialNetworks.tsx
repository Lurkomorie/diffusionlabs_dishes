import React from 'react'
import {SOCIAL_NETWORKS} from "../../config/social";
import "./SocialNetworks.scss";

const SocialNetworks: React.FC = () => {
    return (
        <div className="social-container">
            {SOCIAL_NETWORKS.map((network) => (
                <a className="social" href={network.link}>
                    <img src={`/icons/social/${network.icon}.svg`} alt="icon"/>
                </a>
            ))}
        </div>
    )
}

export default SocialNetworks;
