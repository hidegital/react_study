var React = require('react');

//略
import $ from 'jquery'

//タグ
var Tag = React.createClass({
	render: function() {
		return (
			<li data-tag={this.props.tag}><a href={this.props.tagUrl}>{this.props.tag}</a></li>
		)
	}
});

//タグリスト
var TagList = React.createClass({
	render: function() {
		var tagNodes = this.props.data.map(function(tag) {
			return (
				<Tag tag={tag.tag} tagUrl={tag.tagUrl} />
			)
		});
		return (
			<ul className="tag-list">
				{tagNodes}
			</ul>
		)
	}
});

//読んだ人
var Mark = React.createClass({
	render: function() {
		var accountImage = {
			backgroundImage : "url(" + this.props.accountImage + ")"
		};
		return (
			<li data-account={this.props.account} style={accountImage}></li>
		)
	}
});

//読んだ人リスト
var MarkList = React.createClass({
	render: function() {
		var markNodes = this.props.data.map(function(mark) {
			return (
				<Mark account={mark.account} accountImage={mark.accountImage} />
			)
		});
		return (
			<ul className="account-list">
				{markNodes}
			</ul>
		)
	}
});

var ArticleList = React.createClass({
	render: function() {
		var articleImage = {
			backgroundImage : "url(" + this.props.articleImage + ")"
		};
		return (
			<li>
				<article>
					<a href={this.props.articleUrl} target="_blank" style={articleImage}>
						<h2>{this.props.articleTitle}</h2>
						<p>{this.props.articleDescription}</p>
					</a>
					<TagList data={this.props.articleTag} />
					<h3>読んだ</h3>
					<MarkList data={this.props.articleMark} />
					<h3>コメント</h3>
					<CommentList data={this.props.articleComment} />
				</article>
			</li>
		);
	}
});

var Comment = React.createClass({
	render: function() {
		var authorImage = {
			backgroundImage : "url(" + this.props.authorImage + ")"
		};
		return (
			<li>
				<span data-account={this.props.author} style={authorImage}></span><span>{this.props.comment}</span>
			</li>
		)
	}
});

//コメントリスト
var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author} authorImage={comment.authorImage} comment={comment.comment} />
			)
		});
		return (
			<ul className="comment-list">
				{commentNodes}
			</ul>
		)
	}
});

//記事リストコンポーネント
var ArticleArea = React.createClass({

	//JSONデータ取得
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		$.ajax({
			url: 'list.json',
			dataType: 'json',
			cache: false,
			jsonpCallback: 'callback',
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('list.json', status, err.toString());
			}.bind(this)
		});
	},
	render: function() {
		var articleNodes = this.state.data.map(function(article) {
			return (
				<ArticleList articleTag={article.tagData} articleMark={article.markData} articleComment={article.commentData} articleTitle={article.articleTitle} articleUrl={article.articleUrl} articleDescription={article.articleDescription} articleImage={article.articleImage} />
			)
		});
		return (
			<ul id="article-list">
				{articleNodes}
			</ul>
		)
	}
});

module.exports = ArticleArea;
