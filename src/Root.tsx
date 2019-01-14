import * as React from "react"

const handleClick = () => console.log("ding!")

const Root: React.SFC = () => <div onClick={handleClick}>ding!</div>

export default Root
