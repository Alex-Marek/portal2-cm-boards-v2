import { useStyles, CustomButton } from "./style.js"
import { Menu, MenuItem } from "@material-ui/core"
import aggregatedIcon from "./img/aggregated.png"
import overallIcon from "./img/cup_noborder.jpg"
import spIcon from "./img/Singleplayer.png"
import coopIcon from "./img/Co-op.png"
import React from "react"
import { Link } from "react-router-dom"

const Dropdown = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div id='container' className={classes.dropdown}>
      <CustomButton
        aria-controls='menu'
        aria-haspopup='true'
        onClick={handleClick}>
        <img src={aggregatedIcon} className={classes.icon} />
        Aggregated
      </CustomButton>
      <Menu
        id='menu'
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to='/aggregated-overall'>
          <img src={overallIcon} className={classes.iconMenu} />
          Overall
        </MenuItem>
        <MenuItem
          onClose={handleClose}
          component={Link}
          to='/aggregated-singleplayer'>
          <img src={spIcon} className={classes.iconMenu} />
          Single Player
        </MenuItem>
        <MenuItem
          onClose={handleClose}
          component={Link}
          to='/aggregated-cooperative'>
          <img src={coopIcon} className={classes.iconMenu} />
          Cooperative
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Dropdown
