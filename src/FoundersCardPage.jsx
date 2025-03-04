// import axios from "axios"
// import { useState, useEffect } from "react"
// import { MembershipsIndex } from "./MembershipsIndex"
// import { SignupPage } from "./SignupPage"
// import { LoginPage } from "./LoginPage"
// import { LogoutLink } from "./LogoutLink"

export function FoundersCardPage() {
  // const [memberships, setMemberships] = useState([])
  
  // const handleIndex = () => {
  //   console.log('getting memberships')
  //   axios.get("http://localhost:3000/memberships.json").then(response => {
  //     console.log(response.data)
  //     setMemberships(response.data)
  //   })
  // }
  // useEffect(handleIndex,[]);


  return (
    <main>
      <div className="card text-bg-dark">
      <img src="https://d2q86wmri3hsp2.cloudfront.net/assets/webflow/poster-multiple-video-e8ec78b2ca398ed42084db464888ecfd0856edbcc20ddf6428619ff13f69cd79.jpg" className="card-img"/>
      <div className="card-img-overlay">
        <h1 className="card-title">The Membership that
        Rewards Your Ambition</h1>
        <p className="redesign-home-sub-hero">
          A Membership community of over 250,000 entrepreneurs and business executives who receive unprecedented benefits and networking opportunities.
        </p>
        <a href="/memberships" className="redesign-home-btn-white btn btn-primary" id="hero-inquire-link">PREVIEW MEMBERSHIP</a>
      </div>
      </div>
      <br />
      <br />
      <h2>What is FoundersCard</h2>
      <p id="redesign-what-is-p">Founded in 2009 to empower entrepreneurs with the exceptional benefits and access they deserve, FoundersCard has grown into a global community of over 250,000 members. Members enjoy unparalleled privileges, including exclusive status upgrades, preferred pricing, and unique experiences with over 500 carefully curated partner brands.</p>
      <br />
      <br />
      <div className="row g-0 bg-body-secondary position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src="https://images.stockcake.com/public/e/a/6/ea62b562-b5d0-4bac-be07-cd604361eaaa_large/luxurious-private-flight-stockcake.jpg" className="w-100" alt="..."/>
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0">VIP Travel Privileges</h5>
          <p id="">For FoundersCard Members, travel gets an upgrade. We have teamed up with top airlines, loyalty programs, car rental services, and innovative travel brands to bring you:
          Complimentary elite status
          Priority check-in
          Savings off standard fares
          Access to unique global travel experiences
          Complimentary travel membership solutions.
          Partners include: United Airlines, Virgin Atlantic, Singapore Airlines, Avis and more...
</p>
          <a href="/memberships" className="redesign-home-btn-white btn btn-primary" id="vill-btn-link">PREVIEW MEMBERSHIP</a>
        </div>
      </div>
      <br />
      <br />
      <div className="row g-0 bg-body-secondary position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src="https://media.istockphoto.com/id/1035603262/photo/3d-render-of-luxury-hotel-lobby-entrance-reception.jpg?s=612x612&w=0&k=20&c=2HjCO3fUpmDovGnfjvwJRytKB5ciUvppGPhrkzKjMqc=" className="w-100" alt="..."/>
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0">Columns with stretched link</h5>
          <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we are using it here to give the component a bit of body and size.</p>
          <a href="/memberships" className="redesign-home-btn-white btn btn-primary" id="vill-btn-link">PREVIEW MEMBERSHIP</a>
        </div>
      </div>
      <br />
      <br />
      <div className="row g-0 bg-body-secondary position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src="https://img.freepik.com/premium-photo/serious-woman-night-business-laptop-planning-research-strategy-dark-startup-office-female-working-overtime-computer-technology-online-website-network-table-analytics_590464-132782.jpg" className="w-100" alt="..."/>
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0">Columns with stretched link</h5>
          <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we are using it here to give the component a bit of body and size.</p>
          <a href="/memberships" className="redesign-home-btn-white btn btn-primary" id="vill-btn-link">PREVIEW MEMBERSHIP</a>
        </div>
      </div>
      <br />
      <br />
      <div className="row g-0 bg-body-secondary position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src="https://elements-resized.envatousercontent.com/elements-video-cover-images/9ce1a738-935c-4375-b0ae-9b3e884b52b1/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=52c459221e5cba8d5438a4388adabbd28da816cc9a09498884d4ac2574218b7c" className="w-100" alt="..."/>
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0">Columns with stretched link</h5>
          <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we are using it here to give the component a bit of body and size.</p>
          <a href="/memberships" className="redesign-home-btn-white btn btn-primary" id="vill-btn-link">PREVIEW MEMBERSHIP</a>
        </div>
      </div>
      <br />
      <br />
      <div className="card text-bg-dark">
        <img src="https://upgradedpoints.com/wp-content/uploads/2021/04/FoundersCard-Elite-rotated.jpg?auto=webp&disable=upscale&width=1200" className="card-img" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small>Last updated 3 mins ago</small></p>
          </div>
      </div>
    </main>
  )
}
      
{/* // d-flex justify-content-center align-items-center h-50<nav  */}