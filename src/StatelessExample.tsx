import * as React from "react"

type Props = { thing: string }

const StatelessExample = (props: Props) => (
  <div style={{ fontSize: "4rem" }}>{props.thing}</div>
)

export default StatelessExample
