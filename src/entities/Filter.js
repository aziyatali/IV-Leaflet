import React from 'import';
const Filter = (FilterItems) => {
    return (     <div
        style={{
          display: "flex",
          alignItems: "stretch",
        }}
      >
        {FilterItems.map((item) => (
          <div
            key={item.title}
            style={{
              backgroundColor: item.color,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: item.textColor != null ? item.textColor : "black",
              fontWeight: "bolder",
              fontSize: "1em",
              height: "10vh",
            }}
          >
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      );
}

export default Filter;