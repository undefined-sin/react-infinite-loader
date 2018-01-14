# react-infinite-loader
A very simple infinite loader react component.

# How to use?

## Props:
* **children** - Not required. The children nodes.
* **loader** - Not required, the default renders a div with the string 'Loading'. The component that is visible while isLoading prop is true.
* **loadMore** - Required. The callback to load more data. The callback should accept the parameter 'page'.
* **isLoading** - Required. Controls whether the loader component should be visible or not.
* **numberOfPages** - Required. The total number of pages for the given data.
* **thresholdPercent** - Not required, default is 90%. The percent(between 0.1 and 0.9) of the page that will trigger a new page load.
* **startPage** - Not required, when provided the component will fetch the page during componentWillMount. The page that the component will start.

### Examples:

#### With children:
```
render() {
    const { totalPages } = this.state;
    return (
      <Pagination numberOfPages={totalPages} 
                  isLoading={this.state.isLoading}
                  startPage={0}
                  loadMore={this.fetchMoreData}>
          {
            this.reenderPages()
          }
      </Pagination>
    );
  }
```
#### Without children:
```
render() {
 const { totalPages } = this.state;
 return (<div>
           { this.reenderPages() }
           <Pagination numberOfPages={totalPages} 
                    isLoading={this.state.isLoading}
                    startPage={0}
                    loadMore={this.fetchMoreData}/>
         </div>);
}
```


