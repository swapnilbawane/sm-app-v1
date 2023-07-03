# This describes obsolete code

## src/Components/Aside left

```javascript
<div className="flex flex-column sidebar gapleft">
        {/* removed from above mr-xxl / pl-xxl class */}
```

------------

## src/Components/AsideRight

1. This was responsible for showing search input in `asideright`

```javascript
 <div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap">
                    <i className="bi bi-search"></i>
                    <input
                        type="search"
                        name="search-bar"
                        id=""
                        className="search-bar border-none outline-transparent p-s width-16"
                        placeholder="Search Posts, People, Anything"
                        spellCheck={false}
                        data-ms-editor={true}
                    />
</div>
```

This was besides Who to follow to show more users
`<div className="primary-color">Show More</div>`
