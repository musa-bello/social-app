import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import iconData from '../FontAwesomeIcons/iconData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import Icon from '../reusable/Icon'

const TimeLine = ({uid}) => {
    if (!uid) return <Redirect to="/signin" />
const menuList = iconData.map (menu =>  <Icon key={menu.id} icon={menu.icon} title={menu.title} />)

    return (
        <div className="flex container h-screen">
            <div className="w-2/5 border-r border-lighter py-2 px-8">
                <button className="h-12 w-12 hover:bg-blue-500 rounded-full text-blue-500 hover:text-white">
                    <FontAwesomeIcon icon={faTwitter} className="" size="2x" />
                </button>
                <div>
                    {menuList}
                </div>
            </div>
            ggggggggggggggggggggz
            <h3>fefefee</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        uid: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(TimeLine)

