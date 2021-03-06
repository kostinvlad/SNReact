import React from 'react';
import classes from './favoriteFriends.module.css'
import { NavLink } from 'react-router-dom';

const FavoriteFriends = (props) => {
    let path = '/profile'
return (
    <div className={classes.sidebarWrapper}>
        <h5 className={classes.sidebarHeader}>Favorite Friend</h5>
        <div className={classes.iconBlock}>
            {/* <NavLink to={path}><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b758f881-6461-4549-bba6-c63b0dbe56a4/db87oj8-96429869-637d-4db9-94e4-8e2da11df224.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3NThmODgxLTY0NjEtNDU0OS1iYmE2LWM2M2IwZGJlNTZhNFwvZGI4N29qOC05NjQyOTg2OS02MzdkLTRkYjktOTRlNC04ZTJkYTExZGYyMjQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8EBRxm4Cee7-lXnQie4T9CI569iO7LgZmjpgGRH8QB8" /></NavLink>
            <NavLink to={path}><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b758f881-6461-4549-bba6-c63b0dbe56a4/d83zoea-a3543be7-8930-42d9-9bc2-683349857809.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3NThmODgxLTY0NjEtNDU0OS1iYmE2LWM2M2IwZGJlNTZhNFwvZDgzem9lYS1hMzU0M2JlNy04OTMwLTQyZDktOWJjMi02ODMzNDk4NTc4MDkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0jXTNFKrsvaUaYbARUATu1Xy-iyZyAYc-smJ-HVkwtU" /></NavLink> */}
            <NavLink to={path}><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b758f881-6461-4549-bba6-c63b0dbe56a4/d854da1-d2e23822-fbe9-4625-b008-b318d96e953d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3NThmODgxLTY0NjEtNDU0OS1iYmE2LWM2M2IwZGJlNTZhNFwvZDg1NGRhMS1kMmUyMzgyMi1mYmU5LTQ2MjUtYjAwOC1iMzE4ZDk2ZTk1M2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a4_-chuZzSt82VIKxv5YEnBE3nlhhJXfP66qxrVnqRk" /></NavLink>
            
        </div>
       
    </div>
)
}

export default FavoriteFriends;
