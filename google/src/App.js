import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Books from './Books';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header title="Google Book Search" scroll>
            <Navigation>
               
            </Navigation>
            <Books />
        </Header>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
