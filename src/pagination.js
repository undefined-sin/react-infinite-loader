import React, { Component, PropTypes } from 'react';

//https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
function  getScrollPercent (){
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
};

export default class Pagination extends Component {
    
    static propTypes = {
        children:  PropTypes.node,
        loader: PropTypes.node,
        numberOfPages: PropTypes.number.isRequired,
        thresholdPercent: PropTypes.number.isRequired,
        startPage: PropTypes.number.isRequired
    };
   

    static defaultProps = {
        thresholdPercent: 0.9,
        startPage: -1,
        loader: <div>Loading...</div>,
        numberOfPages: 0
    };

    constructor(props){
        super(props);
        this.state = {
          page: props.startPage || 0,
          loadTime: 0
        };
    }


    componentDidMount(){
        window.onscroll = this.onScroll;
        if(this.props.startPage > -1){
            this.props.loadMore(this.state.page);
        }
    }


    onScroll = () => {
        const { hasMore, thresholdPercent, numberOfPages } = this.props;
        const currentPage = this.state.page;
        const scrollPercentage = getScrollPercent();
        if(scrollPercentage > thresholdPercent) {
            const page = currentPage + 1;
            const diff = new Date().getTime() - this.state.loadTime;
            if(diff < 150 || numberOfPages <= page){
                return;
            }
            this.setState({
                page,
                loadTime: new Date().getTime() 
            });
            this.props.loadMore(page);
        }
   }

    render(){
      return <div>
          { this.props.children }
          { this.props.isLoading && this.props.loader }
          </div>;
    }
}