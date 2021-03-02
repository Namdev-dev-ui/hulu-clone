import React from 'react'
import "./Header.css"
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (

        //BEM For naming convention
        <div className="header">
           
            <div className="Header_icons">

                {/*All Icons are Here */}

                {/*wrapinng in div tag because it  makes each tag are Flexible  */}
                {/* hearder_icon--Active  the home icon showing permenatly */}
                <div className="hearder_icon hearder_icon--Active">
                    <HomeIcon/>
                    <p>
                        Home
                    </p>
                </div>

                <div className="hearder_icon">
                <SearchIcon/>
                    <p>
                     Search
                    </p>
                </div>
     
                <div className="hearder_icon">
                <FlashOnIcon/>
                    <p>
                   Trending
                    </p>
                </div>
                <div className="hearder_icon">
                    <VideoLibraryIcon/>
                     <p>Collections</p>
                </div>
                <div className="hearder_icon">
                <LiveTvIcon/>
                    <p>
                         Live
                    </p>
                </div>
                <div className="hearder_icon">
                <PersonOutlineIcon/>
                    <p>
                         Account
                    </p>
                </div>
           
             

            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhu902pu-wcDmzjJxMoquW9BZnO6ZCXMEHhA&amp;" alt=""/>
        </div>
    )
}

export default Header
