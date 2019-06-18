import React from 'react';
import logo from './assets/y18.gif';
import './App.scss';
import topStories from './data/topstories';

class App extends React.Component {

  state = {
    stories: topStories,
    search: ''
  };

  /**
   * Here we match a given url and return its domain.
   * @param {string} url
   * @returns String || null
   */
  domainFromUrl(url) {
    return String(url)
      .match(/^https?:\/\/([^/:?#]+)(?:[/:?#]|$)/i)[0] // matches and returns domain
      .replace(/(https?)?:\/\//, '') // removes protocol
      .replace(/www\./, '') // removes www
      .replace(/\/+/, ''); // remove trailing slash
  }

  timeago(time) {
    // get the difference in seconds between now and then
    var seconds = Math.floor((new Date() - time * 1000) / 1000);

    // check if up to a year and return
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + " years";

    // check if up to a month and return
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " months";

    // check if up to a day and return
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + " days";

    // check if up to an hour and return
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + " hours";

    // check if up to a minute and return
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " minutes";

    // return seconds
    return Math.floor(seconds) + " seconds";
  }

  render() {
    const { stories } = this.state;
    return (
      <div className="app">
        <div className="inner">
          {/* header */}
          <header className="app-header">
            {/* brand */}
            <div className="brand">
              <a href="https://news.ycombinator.com/">
                <img src={logo} alt="Y" className="logo" />
              </a>
            </div>

            {/* navs */}
            <div className="nav-list-container">
              <a href="https://news.ycombinator.com/news">
                <span className="name">Hacker News</span>
              </a>
              <ul className="nav-list main">
                <li className="nav-item">
                  <a href="https://news.ycombinator.com/newest">new</a>
                </li>
                <li className="nav-item">
                  <a href="https://news.ycombinator.com/front">past</a>
                </li>
                <li className="nav-item">
                  <a href="https://news.ycombinator.com/newcomments">comments</a>
                </li>
                <li className="nav-item">
                  <a href="https://news.ycombinator.com/ask">ask</a>
                </li>
                <li className="nav-item">
                  <a href="https://news.ycombinator.com/show">show</a>
                </li>
                <li className="nav-item">
                  <a href="https://news.ycombinator.com/jobs">jobs</a>
                </li>
                <li className="nav-item">
                  <a href="https://news.ycombinator.com/submit">submit</a>
                </li>
              </ul>
            </div>

            {/* right header items */}
            <a className="login-button" href="https://news.ycombinator.com/login?goto=news">login</a>
          </header>

          {/* stories */}
          <ul className="stories">
            {stories.map((item, index) => (
              <Story
                key={index}
                {...item}
                number={index + 1}
                domain={this.domainFromUrl(item.url)}
                time={this.timeago(item.time)}
              />
            ))}
          </ul>

          <a href="https://news.ycombinator.com/news?p=2" className="more-link">More</a>

          <footer className="app-footer">

            {/* navigation links */}
            <ul className="nav-list">
              <li>
                <a href="https://news.ycombinator.com/newsguidelines.html">Guidelines</a>
              </li>
              <li>
                <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
              </li>
              <li>
                <a href="mailto:hn@ycombinator.com">Support</a>
              </li>
              <li>
                <a href="https://github.com/HackerNews/API">API</a>
              </li>
              <li>
                <a href="https://news.ycombinator.com/security.html">Security</a>
              </li>
              <li>
                <a href="https://news.ycombinator.com/lists">List</a>
              </li>
              <li>
                <a href="https://news.ycombinator.com/bookmarklet.html">Bookmarklet</a>
              </li>
              <li>
                <a href="http://www.ycombinator.com/legal">Legal</a>
              </li>
              <li>
                <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
              </li>
              <li>
                <a href="mailto:hn@ycombinator.com">Contact</a>
              </li>
            </ul>

            {/* search form */}
            <form className="search-form" method="get" action="http://hn.algolia.com/">
              <label>Search:</label>
              <input
                type="text"
                name="q"
                value=""
                size="17"
                autoCorrect="off"
                spellCheck="false"
                autoCapitalize="off"
                autoComplete="false"
                onChange={e => this.setState({ search: e.target.value })}
              />
            </form>
          </footer>
        </div>
      </div>
    );
  }
}

const Story = function Story(props) {
  return (
    <li className="story-item">
      <section>
        {/* stories list item number */}
        <span className="number">{props.number}.</span>

        {/* upvoting toggle button */}
        <button className="upvote-button"></button>

        <div>
          {/* title */}
          <a href={props.url} className="title">
            {props.title}
          </a>

          {/* source website */}
          <a
            href={`https://news.ycombinator.com/from?site=${props.domain}`}
            className="source-domain"
          >
            (<span>{props.domain}</span>)
          </a>
        </div>
      </section>
      <ul className="meta-info">
        {/* score */}
        <li><span>{props.score} points</span></li>

        {/* author */}
        <li>
          <span>by </span>
          <a
            href={`https://news.ycombinator.com/user?id=${props.by.id}`}
          >
            {props.by.id}
          </a>
        </li>

        {/* time */}
        <li><span>{props.time}</span></li>

        {/* hide button */}
        <li><button type="button" className="hide-button">hide</button></li>

        {/* comments count */}
        <li><a href={props.url}>{props.descendants} Comments</a></li>
      </ul>
    </li>
  );
}

export default App;
