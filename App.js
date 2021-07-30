import React from 'react';
import Header from './app/Header';
import Page from './app/Page';
import Footer from './app/Footer';

class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        page: 'HOME',
      };
      this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    handlePageChange(newPage) {
      this.setState({
        page: newPage,
      });
    }
  
    render() {
      const { page } = this.state;
      
      return (
        <div className="main">
          <div className="container">
            <Header 
              onPageChange={this.handlePageChange}
              page={page} 
            />
            <Page page={page} />
            <Footer />
          </div>
        </div>
      );
    }
  }
  
  export default App;