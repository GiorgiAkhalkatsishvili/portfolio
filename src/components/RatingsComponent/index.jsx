import React from 'react'
import './RatingsComponent.css'
import avatarOne from '../../assets/images/Avatar-one.jpg'
import avatarTwo from '../../assets/images/Avatar-two.png'
import avatarThree from '../../assets/images/Avatar-three.png'

const RatingsComponent = () => {
  return (
    <div className='ratingsComponent'>
      <div className="ratings-inner">
        <div className="rating-titles">
        <div className="first-title">
          <h2>Clients Feedback</h2>
        </div>
        <div className="second-title">
          <h1>Customer testimonials</h1>
        </div>
      </div>
      <div className="ratings-container">
        <div className="rating-box-one">
          <div className="ratings-inner">
            <div className="ratings">
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
</svg>

          </div>
          <div className="info-texts">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
          </div>
          <div className="user-info">
             <div className="user-image">
            <img src={avatarOne} alt="" />
            </div>
            <div className="user-name">
              <h3>Dianne Russell</h3>
              <p>Starbucks</p>
            </div>
         </div>
          </div>
        </div>
        <div className="rating-box-one">
          <div className="ratings-inner">
            <div className="ratings">
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
</svg>

          </div>
          <div className="info-texts">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
          </div>
          <div className="user-info">
             <div className="user-image">
            <img src={avatarTwo} alt="" />
            </div>
            <div className="user-name">
              <h3>Dianne Russell</h3>
              <p>Starbucks</p>
            </div>
         </div>
          </div>
        </div>
        <div className="rating-box-one">
          <div className="ratings-inner">
            <div className="ratings">
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0944 0.953177C12.5527 -0.135435 14.1137 -0.135434 14.572 0.95318L17.2771 7.37836C17.4704 7.8373 17.9073 8.15087 18.4088 8.19059L25.4301 8.74669C26.6197 8.84091 27.1021 10.3076 26.1957 11.0746L20.8462 15.6016C20.4642 15.925 20.2972 16.4324 20.414 16.9158L22.0483 23.6847C22.3252 24.8315 21.0624 25.7381 20.0439 25.1235L14.0326 21.4961C13.6032 21.237 13.0632 21.237 12.6338 21.4961L6.62253 25.1235C5.60403 25.7381 4.34115 24.8315 4.61806 23.6847L6.25244 16.9158C6.36918 16.4324 6.20231 15.925 5.82022 15.6016L0.470627 11.0746C-0.435746 10.3076 0.0466351 8.84091 1.23627 8.74669L8.25768 8.19059C8.75921 8.15087 9.19609 7.8373 9.3893 7.37836L12.0944 0.953177Z" fill="#006B6A"/>
</svg>

          </div>
          <div className="info-texts">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
          </div>
          <div className="user-info">
             <div className="user-image">
            <img src={avatarThree} alt="" />
            </div>
            <div className="user-name">
              <h3>Dianne Russell</h3>
              <p>Starbucks</p>
            </div>
         </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default RatingsComponent