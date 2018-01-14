# react-infinite-loader
A very simple infinite loader react component.

# How to use?

With children:

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
Without children:

```
<div style={
        {
          width: '50%',
          margin: '0 auto'
        }
        }>
        {
             this.reenderPages()
        }
        <Pagination numberOfPages={totalPages} 
                    isLoading={this.state.isLoading}
                    startPage={0}
                    loadMore={this.fetchMoreData}/>
      </div>
```


