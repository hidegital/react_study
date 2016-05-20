//import React from 'react';
import $ from 'jquery';

var React = require('react');
var SiteHeader = require('./SiteHeader.jsx');
var ArticleArea = require('./ArticleArea.jsx');
var SiteFooter = require('./SiteFooter.jsx');

//メインコンポーネント
var Main = React.createClass({
  render: function() {
    return (
        <main className="wrap">
          <ArticleArea />
        </main>
    );
  }
});

//bodyコンポーネント
var Body = React.createClass({
  render: function() {
    return (
        <div id="container">
          <SiteHeader />
          <Main />
          <SiteFooter />
        </div>
    );
  }
});

/* React + JSX */
React.render(
    <Body />,
    document.getElementById('body')
);
