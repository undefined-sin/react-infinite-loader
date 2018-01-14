# react-infinite-loader
A very simple infinite loader react component.

# How to use?


```
<Pagination numberOfPages={totalPages} 
            isLoading={this.state.isLoading}
            startPage={0}
            loadMore={this.fetchMoreData}>
  {
     this.reenderPages()
  }
</Pagination>
```
