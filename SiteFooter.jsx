
var React = require('react');

//サイトフッタコンポーネント
var SiteFooter = React.createClass({
	render: function() {
		return (
			<footer id="common-footer">
				<h2>フッタ</h2>
				<address>連絡先とか</address>
				<p>コピーライト</p>
			</footer>
		);
	}
});

module.exports = SiteFooter;