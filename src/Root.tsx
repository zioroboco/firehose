import * as React from "react"
import StatefulExample from "./StatefulExample"
import StatelessExample from "./StatelessExample"

const Root: React.SFC = () => (
  <div>
    <div>
      <h1>StatefulExample</h1>
      <StatelessExample thing="🎈" />
    </div>
    <div>
      <h1>StatelessExample</h1>
      <StatefulExample happy="😸" sad="😿" />
    </div>
  </div>
)

export default Root
