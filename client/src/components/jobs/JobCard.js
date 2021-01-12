import React from 'react'
import { Link } from 'react-router-dom'

function JobCard({ _id, jobTitle, jobPhoto, jobOwner, numberOfBids, jobFee }) {
  return (

    <div className="job-card glass-morphism">
      <div className="card-image-container">
        <Link to={`/jobs/${_id}`}>
          <img src={jobPhoto} alt={jobTitle} className="card-image" />
        </Link>
      </div>
      <div className="card-body">
        <div className="card-body-user">
          <div className="">
            <img src={jobPhoto} alt={jobTitle} className="card-user-avatar" />
          </div>
          <div className="card-user-name">
            <p className="">{jobOwner.name}</p>
          </div>
        </div>
        <div className="card-body-text">
          <Link to={`/jobs/${_id}`}>
            <p>{jobTitle}</p>
          </Link>
        </div>
        <div className="card-body-footer-container">
          <hr />
          <div className="card-footer-body">
            <div className="card-footer-element">
              <p>Bids: <span>{numberOfBids}</span></p>
            </div>
            <div className="card-footer-element">
              <p>Starting Fee: <span>{jobFee}£</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default JobCard