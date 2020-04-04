import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

export default function NavModal() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const theme = useTheme()

  // STYLING

  const NavStyled = styled.nav`
    margin: 4rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `

  const NavLinkStyled = styled(Link)`
    margin: 1rem;
    font-size: 1rem;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    font-weight: 500;
    letter-spacing: 0.08em;
    line-height: 1.4em;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.palette.grey[400]};
    text-decoration: none;
    border-style: solid;
    border-width: 0px 0px 2px;
    transition: border-color 0.3s ease 0s, color 0.3s ease 0s;
    border-color: transparent;
    &:hover {
      color: rgba(0, 0, 0, 0.9) !important;
      border-color: ${theme.palette.primary.main};
    }
  `

  // ~ COMPONENT
  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Menu
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        ></DialogTitle>
        <NavStyled>
          <NavLinkStyled
            onClick={handleClose}
            to='/'
            activeClassName='activeStyle'
          >
            Home
          </NavLinkStyled>
          <NavLinkStyled
            onClick={handleClose}
            to='skills'
            activeClassName='activeStyle'
          >
            Skills
          </NavLinkStyled>
          <NavLinkStyled
            onClick={handleClose}
            to='portfolio'
            activeClassName='activeStyle'
          >
            Portfolio
          </NavLinkStyled>
          <NavLinkStyled
            onClick={handleClose}
            to='thoughts'
            activeClassName='activeStyle'
          >
            Thoughts
          </NavLinkStyled>
          <NavLinkStyled
            onClick={handleClose}
            to='contact'
            activeClassName='activeStyle'
          >
            Contact
          </NavLinkStyled>
        </NavStyled>
      </Dialog>
    </div>
  )
}
