# react-infinite-loader
A very simple infinite loader react component.

# How to use?

## Props:
* **children** - Not required. The children nodes.
* **loader** - The component that is displaying while isLoading prop is true.
* **loadMore** - The callback to load more transactions. It should accept the parameter 'page'.
* **isLoading** - Controls whethere the loader component should be visible.
* **numberOfPages** - The total number of pages for the given data.
* **thresholdPercent** - The percent of the page that will trigger a new page load.
* **startPage** - The page that the component will start.

### Examples:

#### With children:
```
render() {
    const { totalPages, page } = this.state;
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
 return (<div>
           { this.reenderPages() }
           <Pagination numberOfPages={totalPages} 
                    isLoading={this.state.isLoading}
                    startPage={0}
                    loadMore={this.fetchMoreData}/>
         </div>);
}
```


