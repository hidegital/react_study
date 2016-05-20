// React をロード
import React from 'react';
// 外部ファイルへ分割した Message クラスをロード
//import Message from './message.jsx';

// このアプリケーションのメインとなる App クラス
//class App extends React.Component {
//  //es5だとgetInitialState
//  constructor(props) {
//    super(props);
//    this.state = {
//      name: '山田'
//    }
//  }
//  //独自メソッド
//  handleChange(event) {
//    this.setState({
//      name: event.target.value
//    })
//  }
//  //画面へ描画する内容を定義
//  render() {
//    return (
//        <div>
//          <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
//          <Message name={this.state.name} />
//        </div>
//    );
//  }
//}
//
//// app クラスを描画
//React.render(
//    <App />,
//    document.getElementById('container')
//)

//var a = function() {
//  class HelloComponent extends React.Component {
//    constructor(props) {
//      super(props);
//    }
//
//    render() {
//      return (
//          <div>Hello</div>
//      )
//    }
//  }
//
//  React.render(
//      <HelloComponent />,
//      document.getElementById('container')
//  );
//
//};
//
//
//function ready(fn) {
//  if (document.readyState != 'loading'){
//    fn();
//  } else {
//    document.addEventListener('DOMContentLoaded', fn);
//  }
//}
//
//
//ready(a());

//class HelloComponent extends React.Component {
//  //constructor(props) {
//  //  super(props);
//  //}
//
//  render() {
//    return (
//        <div>Hello</div>
//    )
//  }
//}
//
//var mount = React.render(
//    <HelloComponent />,
//    document.getElementById('container')
//);
//

var commentData = [
  {
    author: "ユーザー1",
    authorImage: "https://source.unsplash.com/random",
    comment: "コメント1"
  },
  {
    author: "ユーザー2",
    authorImage: "https://source.unsplash.com/random",
    comment: "コメント2"
  },
  {
    author: "ユーザー3",
    authorImage: "https://source.unsplash.com/random",
    comment: "コメント3"
  }
];


//記事リンク
class ArticleLink extends React.Component {
  render() {
    var articleImage = {
      backgroundImage : "url(" + this.props.image + ")"
    };
    return (
        <a href={this.props.articleUrl} target="_blank"  style={articleImage}>
          <h2>{this.props.articleTitle}</h2>
          <p>{this.props.articleDescription}</p>
        </a>
    );
  }
}
//
////記事リンクエリア
class ArticleArea extends React.Component {
  render() {
    return (
        <ArticleLink articleUrl="/" image="https://source.unsplash.com/random" articleTitle="記事タイトル" articleDescription="discription"></ArticleLink>
    );
  }
}

//記事リストコンポーネント
//class ArticleList extends React.Component {
//  render() {
//    return (
//        <li>
//          <article>
//            <ArticleArea />
//          </article>
//        </li>
//    );
//  }
//}



class Tag extends React.Component {
  render() {
    return (
        <li data-tag={this.props.tag}><a href={this.props.tagUrl}>{this.props.tag}</a></li>
    );
  }
}

//タグ取得
class TagList extends React.Component {
  render() {
    return (
        <Tag tag="タグ1" tagUrl="/">タグ1</Tag>
    );
  }
}

//タグリスト
class TagArea extends React.Component {
  render() {
    return (
        <ul className="tag-list">
          <TagList />
        </ul>
    );
  }
}

class Mark extends React.Component {
  render() {
    var accountImage = {
      backgroundImage : "url(" + this.props.image + ")"
    };
    return (
        <li data-account={this.props.author} style={accountImage}></li>
    );
  }
}

//読んだ人取得
class MarkList extends React.Component {
  render() {
    return (
        <Mark author="Pete Hunt" image="https://source.unsplash.com/random"></Mark>
    );
  }
}

//読んだ人リスト
class MarkArea extends React.Component {
  render() {
    return (
        <ul className="account-list">
          <MarkList />
        </ul>
    );
  }
}

class Comment extends React.Component {
  render() {
    var accountImage = {
      backgroundImage : "url(" + this.props.image + ")"
    };
    return (
        <li><span data-account={this.props.author} style={accountImage}></span><span>{this.props.children}</span></li>
    );
  }
}

//コメント取得
class CommentList extends React.Component {
  render() {
    return (
        <Comment author="Pete Hunt" image="https://source.unsplash.com/random">コメント1</Comment>
    );
  }
}

//コメントリスト
class CommentArea extends React.Component {
  render() {
    return (
        <ul className="comment-list">
          <CommentList />
        </ul>
    );
  }
}


//記事リストコンポーネント
class ArticleList extends React.Component {
  render() {
    return (
        <li>
          <article>
            <ArticleArea />
            <TagArea />
            <h3>読んだ</h3>
            <MarkArea />
            <h3>コメント</h3>
            <CommentArea />
          </article>
        </li>
    );
  }
}


//レンダリング
React.render(
    <ArticleList />,
    document.getElementById('article-list')
)

//React.render(
//    <ArticleList />,
//    document.getElementById('container')
//);






