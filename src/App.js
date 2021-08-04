import React from "react";
import './App.css'

export default function App() {
  return (
      <div className='app-wrapper'>
          <header className='header'>
              <img src="https://point.bangbangeducation.ru/img/sbMRG5DK7O-2MNbywcvgS1IPqbmj_h1atA9UMOLTW6M/fill/746/560/ce/1/bG9jYWw6Ly9zdG9y/ZS81YWE4M2U0OWJh/Mjk2MTVmYTQ0MDFk/ODVjODM1ZDBkMzk2/MDQ3ZTE3MGM1OTRl/NmJlNzNjOGYxNDQ0/ZDY.png"
                   alt="logo"/>
          </header>
          <nav className='nav'>
              <div>
                  <a href="">Profile</a>
              </div>
              <div>
                  <a href="">Messages</a>
              </div>
              <div>
                  <a href="">News</a>
              </div>
              <div>
                  <a href="">Music</a>
              </div>
              <div>
                  <a href="">Settings</a>
              </div>
          </nav>
          <div className='content'>
              <div>
              <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                   alt="foto"/>
              </div>
              <div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU"
                        alt=""/>
                    </div>
                    <div>
                      desc
                    </div>
              </div>
              <div>
                  POst
                  <div>
                      new post
                  </div>
              </div>
              <div>
                  <div>post 1</div>
                  <div>post 2</div>
              </div>
          </div>
      </div>
        );
}


