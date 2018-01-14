# react-infinite-loader
A very simple infinite loader react component.

# How to use?

With children:

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
Without children:

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


