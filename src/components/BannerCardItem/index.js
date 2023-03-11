// Write your code here.

import './index.css'

const BannerCard = props => {
  const {BannerData} = props
  const {headerText, description, className} = BannerData
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="submit" className="btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCard
