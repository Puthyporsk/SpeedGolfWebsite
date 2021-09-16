import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import FloatingButton from './FloatingButton.js';
import LoginPage from './LoginPage.js';
import AppMode from "./../AppMode.js"
import FeedPage from './FeedPage.js';
import Rounds from './Rounds.js';
import CreateAccountDialog from './CreateAccountDialog.js';
import CoursesPage from './CoursesPage.js';

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Welcome to SpeedScore";
modeTitle[AppMode.FEED] = "Activity Feed";
modeTitle[AppMode.ROUNDS] = "My Rounds";
modeTitle[AppMode.ROUNDS_LOGROUND] = "Log New Round";
modeTitle[AppMode.ROUNDS_EDITROUND] = "Edit Round";
modeTitle[AppMode.COURSES] = "Courses";

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.FEED] = FeedPage;
modeToPage[AppMode.ROUNDS] = Rounds;
modeToPage[AppMode.ROUNDS_LOGROUND] = Rounds;
modeToPage[AppMode.ROUNDS_EDITROUND] = Rounds;
modeToPage[AppMode.COURSES] = CoursesPage;


class App extends React.Component {

  constructor() {
    super();
    this.state = {mode: AppMode.LOGIN,
                  menuOpen: false,
                  userId: "",
                  pfp: "",
                  displayName: "",
                  accountClicked: false};
  }

  handleChangeMode = (newMode) => {
    this.setState({mode: newMode});
  }

  handleChangePfp = (newPic) => {
    this.setState({pfp: newPic});
  }

  handleChangeDisplayName = (dName) => {
    this.setState({displayName: dName});
  }

  openMenu = () => {
    this.setState({menuOpen : true});
  }
  
  closeMenu = () => {
    this.setState({menuOpen : false});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }

  toggleAccountClicked = () => {
    this.setState(prevState => ({accountClicked: !prevState.accountClicked}));
  }

  setUserId = (Id) => {
    this.setState({userId: Id});
  }

  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
      <div>
        <NavBar 
          title={modeTitle[this.state.mode]} 
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}
          toggleMenuOpen={this.toggleMenuOpen}/>
          <SideMenu 
            toggleAccountClicked = {this.toggleAccountClicked}
            pfp = {this.state.pfp}
            displayName = {this.state.displayName}
            menuOpen = {this.state.menuOpen}
            mode={this.state.mode}
            toggleMenuOpen={this.toggleMenuOpen}
            userId={this.state.userId}
            logOut={() => this.handleChangeMode(AppMode.LOGIN)}/>
          <ModeBar 
            mode={this.state.mode} 
            changeMode={this.handleChangeMode}
            menuOpen={this.state.menuOpen}/>
          <ModePage
            accountClicked = {this.state.accountClicked}
            toggleAccountClicked = {this.toggleAccountClicked}
            changeDName = {this.handleChangeDisplayName} 
            changePfp = {this.handleChangePfp}
            menuOpen={this.state.menuOpen}
            mode={this.state.mode}
            changeMode={this.handleChangeMode}
            userId={this.state.userId}
            setUserId={this.setUserId}/>
          {this.state.accountClicked ? <CreateAccountDialog 
            userId = {this.state.userId}
            setUserId = {this.setUserId}
            changeDName = {this.handleChangeDisplayName}
            changePfp = {this.handleChangePfp}
            toggleAccountClicked = {this.toggleAccountClicked} 
            accountClicked={this.state.accountClicked}  /> : null}
      </div>
    );  
  }
}

export default App;