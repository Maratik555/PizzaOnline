import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <div><ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="132" cy="142" r="115"/>
      <rect x="0" y="304" rx="7" ry="7" width="280" height="26"/>
      <rect x="0" y="266" rx="7" ry="7" width="280" height="84"/>
      <rect x="0" y="418" rx="7" ry="7" width="91" height="31"/>
      <rect x="137" y="408" rx="24" ry="24" width="140" height="46"/>
    </ContentLoader>
    </div>
  )
}

export default LoadingBlock