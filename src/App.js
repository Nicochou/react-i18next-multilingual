import React, { Component } from "react";
import { Switch ,Route ,Link } from "react-router-dom";
import { FaHome, FaGlobeAmericas } from "react-icons/fa";

import i18next from './config/i18nextConf';
import { withTranslation } from 'react-i18next';

import Launch from "./components/launch.component";
import Home from "./components/home.component";
import Blog from "./components/pages/blog/blog.component";
import Aboutus from "./components/pages/discover/aboutus.component";
import Prices from "./components/pages/discover/prices.component";
import Contact from "./components/pages/support/contact.component";
import Faq from "./components/pages/support/faq.component";
import Bogue from "./components/pages/support/bogue.component";
import News from "./components/pages/project/news.component";
import Release from "./components/pages/project/release.component";
import Licences from "./components/pages/project/licences.component";

import './css/App.css';
import './css/Plugin.css';
import './css/Theme.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    const { t } = this.props;
    const changeLanguage = (lng) => {
      i18next.changeLanguage(lng);
    }
    return (
      <div>
      <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                  <FaHome />{this.props.t('home_menu')}
              </Link>
            </li>
        </ul>
        <a className="navbar-brand mx-auto" href="/" onClick={this.modal}>React-i18next</a>
        <ul className="navbar-nav ml-auto">
            <li className="dropdown"><Link className="nav-link">{this.props.t('discover_menu')}</Link>
              <ul className="dropdown-menu">
                <li className="nav-link text-dark"><Link to={"/aboutus"}>{this.props.t('aboutus_menu')}</Link></li>
                <li className="nav-link text-dark"><Link to={"/prices"}>{this.props.t('price_menu')}</Link></li>
              </ul>
            </li>
            <li className="ml-auto">
                <Link to={"/blog"} className="nav-link">
                  {this.props.t('blog_menu')}
                </Link>
            </li>
            <li className="ml-auto dropdown"><Link className="nav-link">{this.props.t('support_menu')}</Link>
              <ul className="dropdown-menu">
                <li className="nav-link text-dark"><Link to={"/contact"} >{this.props.t('contact_menu')}</Link></li>
                <li className="nav-link text-dark"><Link to={"/faq"} >{this.props.t('faq_menu')}</Link></li>
                <li className="nav-link text-dark"><Link to={"/bogue"} >{this.props.t('bug_menu')}</Link></li>
              </ul>
            </li>
            <li className="ml-auto dropdown"><Link className="nav-link">{this.props.t('project_menu')}</Link>
              <ul className="dropdown-menu">
                <li className="nav-link text-dark"><Link to={"/release"} >{this.props.t('features_menu')}</Link></li>
                <li className="nav-link text-dark"><Link to={"/news"} >{this.props.t('news_menu')}</Link></li>
                <li className="nav-link text-dark"><Link to={"/licences"} >{this.props.t('licenses_menu')}</Link></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                  <div className="p-dropdown">
                      <a className="nav-link" href="#"><FaGlobeAmericas /><span>{this.props.t('iso')}</span></a>
                      <ul className="p-dropdown-content">
                          <li><a href="" onClick={() => changeLanguage('fr')}>Français</a></li>
                          <li><a href="" onClick={() => changeLanguage('en')}>English</a></li>
                          <li><a href="" onClick={() => changeLanguage('sp')}>Español</a></li>
                          <li><a href="" onClick={() => changeLanguage('pt')}>português</a></li>
                          <li><a href="" onClick={() => changeLanguage('ru')}>Pусский</a></li>
                          <li><a href="" onClick={() => changeLanguage('ar')}>عربي</a></li>
                          <li><a href="" onClick={() => changeLanguage('ch')}>中国人</a></li>
                          <li><a href="" onClick={() => changeLanguage('cr')}>한국인</a></li>
                          <li><a href="" onClick={() => changeLanguage('jp')}>日本</a></li>
                      </ul>
                  </div>
              </li>
        </ul>
      </nav>
        <div className="">
            <Switch>
              <Route exact path="/" component={Launch} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/bogue" component={Bogue} />
              <Route exact path="/aboutus" component={Aboutus} />
              <Route exact path="/prices" component={Prices} />
              <Route exact path="/release" component={Release} />
              <Route exact path="/news" component={News} />
              <Route exact path="/licences" component={Licences} />
            </Switch>
        </div>
    </div>
    );
  }
}

export default withTranslation()(App);
