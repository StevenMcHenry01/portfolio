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
      color: ${theme.palette.secondary.main} !important;
      border-color: ${theme.palette.primary.main};
    }
  `

  // ~ COMPONENT
  return (
    <div>
      <Button
        variant='outlined'
        color='primary'
        size='small'
        onClick={handleClickOpen}
      >
        <div style={{display: 'flex', alignItems: 'center'}}>
          <svg width='24' height='24'>
            <rect width='24' height='24' fill='none' rx='0' ry='0' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4 7C4 6.58579 4.33579 6.25 4.75 6.25H19.25C19.6642 6.25 20 6.58579 20 7C20 7.41421 19.6642 7.75 19.25 7.75H4.75C4.33579 7.75 4 7.41421 4 7ZM4 12C4 11.5858 4.33579 11.25 4.75 11.25H19.25C19.6642 11.25 20 11.5858 20 12C20 12.4142 19.6642 12.75 19.25 12.75H4.75C4.33579 12.75 4 12.4142 4 12ZM4.75 16.25C4.33579 16.25 4 16.5858 4 17C4 17.4142 4.33579 17.75 4.75 17.75H19.25C19.6642 17.75 20 17.4142 20 17C20 16.5858 19.6642 16.25 19.25 16.25H4.75Z'
              fill='#27aae1'
            />
          </svg>
          <span style={{paddingTop: '2px'}}>Menu</span>
        </div>
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
            activeClassName='mobileActiveStyle'
          >
            Home
          </NavLinkStyled>
          <NavLinkStyled
            onClick={handleClose}
            to='/skills'
            activeClassName='mobileActiveStyle'
          >
            Skills
          </NavLinkStyled>
          <NavLinkStyled
            onClick={handleClose}
            to='/portfolio'
            activeClassName='mobileActiveStyle'
          >
            Portfolio
          </NavLinkStyled>
          <NavLinkStyled
            onClick={handleClose}
            to='/thoughts'
            activeClassName='mobileActiveStyle'
          >
            Thoughts
          </NavLinkStyled>
          <NavLinkStyled
            onClick={handleClose}
            to='/contact'
            activeClassName='mobileActiveStyle'
          >
            Contact
          </NavLinkStyled>
        </NavStyled>
      </Dialog>
    </div>
  )
}
